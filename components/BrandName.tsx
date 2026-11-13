"use client";

import { useEffect } from "react";

const previousBrand = /\bBAM Transport\b|\bBAM\b/g;
const currentBrand = "Barakah Al Madinah";

function replaceBrand(value: string) {
  return value.replace(previousBrand, currentBrand);
}

export function BrandName() {
  useEffect(() => {
    document.title = replaceBrand(document.title);
    if (window.location.pathname === "/partner-with-bam") {
      document.querySelector<HTMLAnchorElement>('a[href="#partner-enquiry"]')?.replaceChildren("Become a Partner");
    }

    const replaceTextNodes = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let node = walker.nextNode();
      while (node) {
        const parent = node.parentElement;
        if (parent && !parent.closest("[data-brand-keep]") && !["SCRIPT", "STYLE"].includes(parent.tagName) && previousBrand.test(node.textContent ?? "")) nodes.push(node as Text);
        previousBrand.lastIndex = 0;
        node = walker.nextNode();
      }
      nodes.forEach((text) => { text.textContent = replaceBrand(text.textContent ?? ""); });
      if (root instanceof Element) {
        root.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
          ["aria-label", "alt", "title"].forEach((attribute) => {
            const value = element.getAttribute(attribute);
            if (value) element.setAttribute(attribute, replaceBrand(value));
          });
        });
      }
    };

    replaceTextNodes(document.body);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => replaceTextNodes(node)));
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
