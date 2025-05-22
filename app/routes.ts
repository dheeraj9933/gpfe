import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("common/Header/index.tsx", [
    index("routes/home.tsx"),
    route("/about-us", "views/About/About.tsx"),
    route("/sustainability", "views/Sustainability/index.tsx"),
  ]),
] satisfies RouteConfig;
