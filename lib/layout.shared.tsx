import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, Zap } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "MagoDocs",
    },
    links: [
      {
        text: "Documentation",
        url: "/docs",
        icon: <BookIcon className="size-4" />,
      },
      {
        text: "Quick Start",
        url: "/docs#quick-start",
        icon: <Zap className="size-4 fill-fd-primary/20 text-fd-primary" />
      },
    ]
  }
}
