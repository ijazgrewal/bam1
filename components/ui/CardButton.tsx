import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CardButtonProps = ComponentProps<typeof Link> & {
  fullWidth?: boolean;
};

export function CardButton({ className, fullWidth = true, ...props }: CardButtonProps) {
  return <Link className={cn("!inline-flex !min-h-11 items-center justify-center gap-2 !rounded-lg !bg-[#E5C378] px-5 py-3 text-sm font-bold !text-[#00291D] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:!bg-[#D4AF37] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00291D]", fullWidth && "!w-full", className)} {...props} />;
}
