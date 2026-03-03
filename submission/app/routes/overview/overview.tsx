import type { Route } from "./+types/overview";

import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "~/components/header-section";

import "~/styles/grid.scss";
import "./overview.scss";
import "@rescui/typography/lib/font-jb-sans-auto.css";

import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section/latest-from-kotlin-section";
import { WhyKotlinSection } from "~/components/why-kotlin-section/why-kotlin-section";
import { tabs } from "~/components/why-kotlin-section/programming-language/data";
import { UsageSection } from "~/components/usage-section/usage-section";
import { StartSection } from "~/components/start-section/start-section";

import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/github.css";
hljs.registerLanguage("kotlin", kotlin);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Kotlin Programming Language" },

    { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" },
    { rel: "icon", type: "image/svg+xml", href: "/images/favicon.svg" },
    { rel: "alternate icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/images/apple-touch-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/images/apple-touch-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/images/apple-touch-icon-144x144.png",
    },

    { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
    { rel: "dns-prefetch", href: "//resources.jetbrains.com" },

    // OG and Twitter
    { property: "og:title", content: "Kotlin" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kotlinlang.org" },
    {
      property: "og:image",
      content: "/images/open-graph/general.png",
    },
    { property: "og:description", content: "Kotlin Programming Language" },
    { property: "og:site_name", content: "Kotlin" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@kotlin" },
    { name: "twitter:title", content: "Kotlin" },
    { name: "twitter:description", content: "Kotlin Programming Language" },
    {
      name: "twitter:image:src",
      content: "/images/twitter/general.png",
    },
  ];
}

export async function loader() {
  return {
    initialIndex: Math.floor(Math.random() * tabs.length),
  };
}

function OverviewPageContent() {
  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </div>
  );
}

export default function OverviewPage() {
  return (
    <ThemeProvider theme="dark">
      <OverviewPageContent />
    </ThemeProvider>
  );
}
