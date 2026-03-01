import type { Route } from "../+types/home";

import "./home.scss";
import "~/styles/grid.scss";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Title" }, { name: "description", content: "" }];
}

export default function Home() {
  return <h1>Hello World!</h1>;
}
