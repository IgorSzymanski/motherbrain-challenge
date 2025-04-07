import "react";

declare module "react" {
  // allow CSS custom properties
  interface CSSProperties {
    [varName: `--${string}`]: string | number | undefined;
  }

  interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    transformOrigin?: string;
  }
}
