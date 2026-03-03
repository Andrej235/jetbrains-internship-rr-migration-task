import type { Route } from "./+types/overview";

import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "~/components/header-section";

import "~/styles/grid.scss";
import "./overview.scss";
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
  return [{ title: "Title" }, { name: "description", content: "" }];
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
