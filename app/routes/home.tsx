import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GP Agarwal Group" },
    { name: "description", content: "Welcome to GP Agarwal!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
