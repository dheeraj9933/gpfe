import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("common/Layout/index.tsx", [
    index("routes/home.tsx"),
    route("/about-us", "views/About/About.tsx"),
    route("/sustainability", "views/Sustainability/index.tsx"),
    route("/steel", "views/Steel/index.tsx"),
    route("/power", "views/Power/index.tsx"),
    route("/casting", "views/Casting/index.tsx"),
    route("/careers", "views/Career/index.tsx"),
    route("/contact-us", "views/ContactUs/index.tsx"),
    route("/customers", "views/Customers/index.tsx"),
    route("/suppliers", "views/Supplier/index.tsx"),
    route("/news", "views/News/index.tsx"),
    route("/media", "views/Media/index.tsx"),
    route("/*", "views/NotFound/index.tsx"),
  ]),
] satisfies RouteConfig;
