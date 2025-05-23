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
    route("/steel", "views/Steel/index.tsx"),
    route("/power", "views/Power/index.tsx"),
    route("/casting", "views/Casting/index.tsx"),
    route("/*", "views/NotFound/index.tsx"),
  ]),
] satisfies RouteConfig;
