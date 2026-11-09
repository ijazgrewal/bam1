import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string | URL;
  children?: ReactNode;
  locale?: string | false;
  onNavigate?: (event: unknown) => void;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
};

/**
 * Vinext's current client-side implementation of next/link throws while
 * prefetching. Native links keep navigation dependable until that upstream
 * runtime issue is resolved.
 */
export default function InternalLink({
  href,
  locale: _locale,
  onNavigate: _onNavigate,
  prefetch: _prefetch,
  replace: _replace,
  scroll: _scroll,
  shallow: _shallow,
  ...props
}: LinkProps) {
  void _locale;
  void _onNavigate;
  void _prefetch;
  void _replace;
  void _scroll;
  void _shallow;
  const destination = href.toString();
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    props.onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !destination.startsWith("/") ||
      destination.startsWith("//") ||
      destination.startsWith("/#")
    ) return;

    // Use a document navigation to bypass Vinext's failing RSC link handler.
    event.preventDefault();
    event.stopPropagation();
    window.location.assign(destination);
  };

  return <a href={destination} {...props} onClickCapture={handleClick} />;
}
