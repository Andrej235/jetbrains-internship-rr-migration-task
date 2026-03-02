import type { Route } from "./+types/overview";

import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "~/components/header-section";

import "~/styles/grid.scss";
import "./overview.scss";
import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section/latest-from-kotlin-section";
import { WhyKotlinSection } from "~/components/why-kotlin-section/why-kotlin-section";
import { tabs } from "~/components/why-kotlin-section/programming-language/data";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Title" }, { name: "description", content: "" }];
}

export async function loader() {
  return {
    initialIndex: Math.floor(Math.random() * tabs.length),
  };
}

export default function OverviewPage() {
  return (
    <ThemeProvider theme="dark">
      <OverviewPageContent />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
    </ThemeProvider>
  );
}

function OverviewPageContent() {
  return (
    <div className="overview-page">
      <HeaderSection />
    </div>
  );
}
