import type { Route } from "./+types/overview";

import { ThemeProvider } from "@rescui/ui-contexts";

import { HeaderSection } from "~/components/header-section";

import "~/styles/grid.scss";
import "./overview.scss";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Title" }, { name: "description", content: "" }];
}

export default function OverviewPage() {
  return (
    <ThemeProvider theme="dark">
      <OverviewPageContent />
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
