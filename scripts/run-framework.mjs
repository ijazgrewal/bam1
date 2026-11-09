import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import net from "node:net";
import { readExecutionProfile } from "./execution-profile.mjs";

const [command, ...args] = process.argv.slice(2);
if (!["dev", "build"].includes(command)) throw new Error("Expected dev or build.");
const managedLinux = readExecutionProfile() === "managed-linux";

if (managedLinux && command === "build") {
  const result = spawnSync("bash", [
    fileURLToPath(new URL("./build-verified.sh", import.meta.url)), ...args,
  ], { stdio: "inherit" });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
}

function isPortAvailable(port, host = "127.0.0.1") {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    server.listen(port, host);
  });
}

function tryKillProcessOnPort(port) {
  if (process.platform === "win32") {
    try {
      spawnSync("powershell", [
        "-NoProfile",
        "-Command",
        `Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }`
      ], { stdio: "ignore", timeout: 3000 });
    } catch {}
  }
}

async function resolvePort(preferredPort) {
  if (await isPortAvailable(preferredPort)) {
    return preferredPort;
  }
  // Try to free the port if an orphaned process is holding it
  tryKillProcessOnPort(preferredPort);
  await new Promise((r) => setTimeout(r, 600));

  if (await isPortAvailable(preferredPort)) {
    return preferredPort;
  }

  // Find next available port
  for (let p = preferredPort + 1; p < preferredPort + 100; p++) {
    if (await isPortAvailable(p)) {
      console.log(`\n  [dev] Port ${preferredPort} is in use; automatically switching to http://localhost:${p}\n`);
      return p;
    }
  }
  return preferredPort;
}

// Import in this process so the preview owner retains its PID and signals.
const cli = new URL(managedLinux
  ? "../node_modules/vite/bin/vite.js"
  : "../node_modules/vinext/dist/cli.js", import.meta.url);

let portArgs = [];
if (!managedLinux && command === "dev") {
  const hasPortArg = args.includes("--port") || args.includes("-p");
  if (!hasPortArg) {
    const basePort = Number.parseInt(process.env.PORT || "5173", 10);
    const chosenPort = await resolvePort(basePort);
    portArgs = ["--port", String(chosenPort)];
  }
}

process.argv = [
  process.execPath,
  fileURLToPath(cli),
  command,
  ...portArgs,
  ...args,
];

await import(cli.href);
