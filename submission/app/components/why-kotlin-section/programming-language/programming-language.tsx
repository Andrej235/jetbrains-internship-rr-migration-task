import { Button } from "@rescui/button";
import { Tab, TabList, TabSeparator } from "@rescui/tab-list";
import { useTextStyles } from "@rescui/typography";
import cn from "classnames";
import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import { useEffect, useRef, useState } from "react";

import { tabs } from "./data";

import "highlight.js/styles/github.css";
import { useLoaderData } from "react-router";
import type { loader } from "~/routes/overview/overview";
import "./programming-language.scss";

hljs.registerLanguage("kotlin", kotlin);

export function ProgrammingLanguage() {
  const textCn = useTextStyles();
  const loaderData = useLoaderData<typeof loader>();
  const [activeIndex, setActiveIndex] = useState(loaderData.initialIndex);

  const codeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!codeRef.current) return;

    delete codeRef.current.dataset.highlighted;
    hljs.highlightElement(codeRef.current);
  }, [activeIndex]);

  return (
    <div className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
      <div className="kto-col-4 kto-col-md-12">
        <h3 className={textCn("rs-h2")}>
          Modern, concise and safe programming language
        </h3>
        <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="kto-offset-top-32">
          <Button mode="outline" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </div>

      <div className="kto-col-8 kto-col-md-12">
        <TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
          {tabs.map((tab, i) => (
            <Tab key={i}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabSeparator />
        <pre className="programming-language__code kto-offset-top-16">
          <code ref={codeRef} className="hljs">
            {tabs[activeIndex].code}
          </code>
        </pre>
      </div>
    </div>
  );
}
