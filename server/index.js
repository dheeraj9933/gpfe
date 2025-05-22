import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
import { Search, Android, ArrowRight } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import { Container, Image, Nav, NavDropdown, Form, Row, Col, Button, Card } from "react-bootstrap";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Header = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("header", {
      className: "",
      children: /* @__PURE__ */ jsx(Navbar, {
        bg: "#fff",
        "data-bs-theme": "light",
        children: /* @__PURE__ */ jsxs(Container, {
          className: "d-flex justify-content-between align-items-center py-3",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex-shrink-0 ",
            children: /* @__PURE__ */ jsx(Navbar.Brand, {
              href: "/",
              className: "position-absolute",
              style: {
                top: "10px"
              },
              children: /* @__PURE__ */ jsx(Image, {
                src: "/home.png"
              })
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "position-absolute start-50 translate-middle-x",
            style: {
              left: "55%"
            },
            children: /* @__PURE__ */ jsxs(Nav, {
              className: "me-auto fw-bold",
              children: [/* @__PURE__ */ jsxs(NavDropdown, {
                title: "Who we are",
                id: "basic-nav-dropdown",
                children: [/* @__PURE__ */ jsx(NavDropdown.Item, {
                  href: "/about-us",
                  children: "About us"
                }), /* @__PURE__ */ jsx(NavDropdown.Item, {
                  href: "#action/3.3",
                  children: "Founders Journey"
                })]
              }), /* @__PURE__ */ jsxs(NavDropdown, {
                title: "Our Business",
                id: "basic-nav-dropdown",
                children: [/* @__PURE__ */ jsx(NavDropdown.Item, {
                  href: "/steel",
                  children: "Steel"
                }), /* @__PURE__ */ jsx(NavDropdown.Item, {
                  href: "/casting",
                  children: "Casting"
                }), /* @__PURE__ */ jsx(NavDropdown.Item, {
                  href: "/power",
                  children: "Power"
                })]
              }), /* @__PURE__ */ jsx(Nav.Link, {
                href: "/Sustainability",
                children: "Sustainability"
              }), /* @__PURE__ */ jsx(Nav.Link, {
                href: "/careers",
                children: "Careers"
              }), /* @__PURE__ */ jsxs(NavDropdown, {
                title: "Partners",
                id: "basic-nav-dropdown",
                children: [/* @__PURE__ */ jsx(NavDropdown.Item, {
                  href: "/suppliers",
                  children: "Suppliers"
                }), /* @__PURE__ */ jsx(NavDropdown.Item, {
                  href: "/customers",
                  children: "Customers"
                })]
              }), /* @__PURE__ */ jsx(Nav.Link, {
                href: "#pricing",
                children: "Contact Us"
              })]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex-shrink-0 d-flex align-items-center",
            children: [/* @__PURE__ */ jsx(Search, {
              style: {
                fontWeight: "bold",
                transform: "scale(1.2)"
              },
              className: "fw-bold"
            }), /* @__PURE__ */ jsxs(Form.Select, {
              className: "ms-2 rounded-4",
              size: "sm",
              "aria-label": "Default select example",
              children: [/* @__PURE__ */ jsx("option", {
                children: "Eng"
              }), /* @__PURE__ */ jsx("option", {
                value: "1",
                children: "Eng"
              }), /* @__PURE__ */ jsx("option", {
                value: "2",
                children: "Hindi"
              }), /* @__PURE__ */ jsx("option", {
                value: "3",
                children: "Spanish"
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("main", {
      children: /* @__PURE__ */ jsx(Outlet, {})
    })]
  });
};
const index$1 = withComponentProps(Header);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$1
}, Symbol.toStringTag, { value: "Module" }));
const WhiteBox = () => {
  return /* @__PURE__ */ jsxs("div", { className: "white-box d-flex flex-column justify-content-center align-items-center", children: [
    /* @__PURE__ */ jsx("h4", { children: "200+" }),
    /* @__PURE__ */ jsx("span", { className: "fw-bold", children: "Acres" }),
    /* @__PURE__ */ jsx("span", { children: "Steel plant" })
  ] });
};
const FutureSection = () => {
  return /* @__PURE__ */ jsx(Container, { fluid: true, className: "future py-5", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { children: [
    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column justify-content-center align-items-end h-100", children: [
      /* @__PURE__ */ jsx(Image, { src: "/leaf.svg" }),
      " ",
      /* @__PURE__ */ jsx("p", { className: "text-light fw-bold text-end mt-2", children: "We are commited towards the future" })
    ] }) }),
    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(WhiteBox, {}) }),
    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(WhiteBox, {}) }),
    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(WhiteBox, {}) }),
    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(WhiteBox, {}) }),
    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(WhiteBox, {}) })
  ] }) }) });
};
const AboutUs$1 = () => {
  return /* @__PURE__ */ jsx(Container, { className: "about-us-section-container", children: /* @__PURE__ */ jsxs(Row, { className: "", children: [
    /* @__PURE__ */ jsx(Col, { style: { flexBasis: "50%", flexGrow: "0" }, children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center flex-column gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "orange-title", children: "About Us" }),
      /* @__PURE__ */ jsx("h2", { className: "fs-3", children: "A Legacy of Strength. A Future of Possibility." }),
      /* @__PURE__ */ jsx("p", { children: "GP Agarwal Group is a next-generation industrial powerhouse, built on decades of trust and excellence. With diversified ventures in steel, sustainability, and infrastructure, we are committed to driving nation-building through innovation, integrity, and impact." }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { className: "px-4", variant: "danger", children: "Know More" }) })
    ] }) }),
    /* @__PURE__ */ jsxs(
      Col,
      {
        className: "d-flex justify-content-end",
        style: {
          flexBasis: "50%",
          flexGrow: "0",
          position: "relative"
        },
        children: [
          /* @__PURE__ */ jsx(Image, { src: "/about1.png", className: "about-img-1" }),
          /* @__PURE__ */ jsx(Image, { src: "/about2.png", className: "about-img-2" }),
          /* @__PURE__ */ jsx("div", {})
        ]
      }
    )
  ] }) });
};
const Industry = () => {
  return /* @__PURE__ */ jsxs(Container, { fluid: true, className: "p-0 d-flex flex-wrap", children: [
    /* @__PURE__ */ jsx("div", { className: "steel w-100 d-flex justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "steel-inner d-flex flex-column align-items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "orange-text", children: "Industry" }),
      /* @__PURE__ */ jsx("h2", { children: "Steel" }),
      /* @__PURE__ */ jsx(Button, { className: "px-4", variant: "btn btn-outline-light", children: "Know More" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "casting w-50", children: /* @__PURE__ */ jsx("h3", { className: "text-center mt-5", children: "Casting" }) }),
    /* @__PURE__ */ jsx("div", { className: "power w-50", children: /* @__PURE__ */ jsx("h3", { className: "text-center mt-5", children: "Power" }) })
  ] });
};
const Sustainability$1 = () => {
  return /* @__PURE__ */ jsxs(Container, { fluid: true, className: "sustainability position-relative dark-blue-bg", children: [
    /* @__PURE__ */ jsxs(Container, { className: "", children: [
      /* @__PURE__ */ jsx(Image, { src: "/sustain-1.png", alt: "Sustainability", className: "w-100" }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex gap-4 bg-body text-dark sustainability-floater ", children: [
        /* @__PURE__ */ jsx(Image, { src: "/sustain-2.png", alt: "Sustainability", className: "" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "h5 text-uppercase m-0 mt-3 orange-text", children: "Sustainability" }),
          /* @__PURE__ */ jsx("h4", { children: "Business with a Human Heart" }),
          /* @__PURE__ */ jsx("p", { children: "GP Agarwal Group champions community care and sustainability through education, daily meals, clean energy, and circular economy initiatives." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Image, { src: "/bg-poly-2.png", alt: "Sustainability", className: "bottom-right-bg" })
  ] });
};
const Career = () => {
  return /* @__PURE__ */ jsx(Container, { fluid: true, className: "career dark-blue-bg", children: /* @__PURE__ */ jsxs(Container, { className: "career-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "career-text d-flex justify-content-center flex-column gap-2 text-white w-50 ", children: [
      /* @__PURE__ */ jsx("h2", { className: "orange-title fs-5", children: "Career" }),
      /* @__PURE__ */ jsx("h2", { className: "fs-3", children: "Empowered People. Empowering Progress." }),
      /* @__PURE__ */ jsx("p", { children: "Discover your next chapter with us. The future isn’t built alone. At GP Agarwal Group, we’re creating a thriving ecosystem where professionals, entrepreneurs, and partners come together to drive transformation." }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { className: "px-4 mt-3", variant: "danger", children: "Explore" }) })
    ] }),
    /* @__PURE__ */ jsx(Image, { src: "/career.png", className: "career-img-1" })
  ] }) });
};
const WorkCulture = () => {
  return /* @__PURE__ */ jsxs(Container, { fluid: true, className: "work-culture", children: [
    /* @__PURE__ */ jsx(Image, { src: "/bg-poly-3.png", className: "top-left-bg" }),
    /* @__PURE__ */ jsxs(Container, { className: "work-culture-container d-flex flex-column", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: "work-culture.png",
          alt: "work culture",
          className: "work-culture-img w-50"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "d-flex gap-4 text-dark dark-blue-bg work-culture-text", children: /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "h5 text-uppercase m-0 mt-3 orange-text", children: "Work Culture" }),
        /* @__PURE__ */ jsx("h4", { className: "text-white", children: "Business with a Human Heart" }),
        /* @__PURE__ */ jsx("p", { className: "text-white", children: "At GP Agarwal Group, our people are our strength. We nurture a culture of collaboration, diversity, and purpose — where every voice matters and every effort counts. Together, we’re not just building industries, we’re building futures." })
      ] }) })
    ] })
  ] });
};
const Clients = () => {
  return /* @__PURE__ */ jsx(Container, { fluid: true, className: "clients", children: /* @__PURE__ */ jsxs(Container, { className: "clients-text d-flex gap-4 align-items-end", children: [
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2 w-25", children: [
      /* @__PURE__ */ jsx("h3", { className: "h5 text-uppercase m-0 mt-3 orange-text", children: "CLIENTS" }),
      /* @__PURE__ */ jsx("h4", { children: "Powering India’s Leading Projects" }),
      /* @__PURE__ */ jsx("p", { children: "We are proud to partner with some of India’s most respected names in infrastructure, construction, energy, and public sector enterprises." })
    ] }),
    /* @__PURE__ */ jsx(Image, { src: "/clients.png", alt: "clients", className: "clients-img" })
  ] }) });
};
const NewsSmall = ({ data }) => {
  return /* @__PURE__ */ jsxs("div", { className: "align-items-stretch d-flex flex-column h-100 p-4", children: [
    /* @__PURE__ */ jsx("h3", { className: "h5", children: data.title }),
    /* @__PURE__ */ jsx("p", { className: "fs-6", children: data.description }),
    /* @__PURE__ */ jsx("span", { className: "text-red align-self-end mt-auto", children: "Press Release" })
  ] });
};
const NewsBig = ({ data }) => {
  return /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column h-100 p-4", children: [
    /* @__PURE__ */ jsx(Image, { src: data.img, alt: "News Image", fluid: true }),
    /* @__PURE__ */ jsx("h3", { className: "h5", children: data.title }),
    /* @__PURE__ */ jsx("p", { className: "fs-6", children: data.description }),
    /* @__PURE__ */ jsx("span", { className: "text-red align-self-end mt-auto", children: "Press Release" })
  ] });
};
const News = () => {
  const newsData = {
    title: "Chairman Shekharan Merger with our businesses, community initiatives",
    description: "Get the latest news and feature stories on our businesses, community initiatives, heritage and people. Scroll to read."
  };
  const newsData2 = {
    img: "/news.png",
    title: "Chairman Shekharan Merger with our businesses, community initiatives",
    description: "Get the latest news and feature stories on our businesses, community initiatives, heritage and people. Scroll to read."
  };
  return /* @__PURE__ */ jsxs(Container, { className: "news-section", children: [
    /* @__PURE__ */ jsx("h2", { className: "orange-title", children: "News & Features" }),
    /* @__PURE__ */ jsx(Row, { className: "my-3", children: /* @__PURE__ */ jsx(Col, { md: 12, children: /* @__PURE__ */ jsxs(Row, { className: "gap-3 flex-nowrap", children: [
      /* @__PURE__ */ jsx(Col, { xs: 6, className: "light-grey-bg rounded", children: /* @__PURE__ */ jsx(NewsBig, { data: newsData2 }) }),
      /* @__PURE__ */ jsx(Col, { md: 3, className: "light-grey-bg rounded", children: /* @__PURE__ */ jsx(NewsSmall, { data: newsData }) }),
      /* @__PURE__ */ jsx(Col, { md: 3, className: "light-grey-bg rounded", children: /* @__PURE__ */ jsx(NewsSmall, { data: newsData }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { md: 12, children: /* @__PURE__ */ jsxs(Row, { className: "gap-3 flex-nowrap", children: [
      /* @__PURE__ */ jsx(Col, { xs: 6, className: "light-grey-bg rounded", children: /* @__PURE__ */ jsx(NewsBig, { data: newsData2 }) }),
      /* @__PURE__ */ jsx(Col, { md: 3, className: "light-grey-bg rounded", children: /* @__PURE__ */ jsx(NewsSmall, { data: newsData }) }),
      /* @__PURE__ */ jsx(Col, { md: 3, className: "light-grey-bg rounded", children: /* @__PURE__ */ jsx(NewsSmall, { data: newsData }) })
    ] }) }) })
  ] });
};
function Welcome() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "", children: [
    /* @__PURE__ */ jsx(
      Container,
      {
        fluid: true,
        className: "p-0 text-white min-vh-100",
        style: {
          backgroundImage: `url('/banner_1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px"
          // or whatever height you need
        },
        "data-bs-theme": "dark",
        children: /* @__PURE__ */ jsx(Container, { className: "banner-text", children: /* @__PURE__ */ jsxs("div", { className: "inner-text-container", children: [
          /* @__PURE__ */ jsx("h2", { children: "Strength in Every Load. Progress in Every Pipe." }),
          /* @__PURE__ */ jsx("p", { children: "At GP Agarwal Group, our steel pipes move more than material — they carry the vision of a stronger, better-connected India. From production to project delivery, every load represents precision, trust, and the backbone of infrastructure." })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "founder-section", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "py-5 my-5", children: [
      /* @__PURE__ */ jsx(Col, { style: { flexBasis: "50%", flexGrow: "0" }, children: /* @__PURE__ */ jsxs("div", { className: "founder-img d-flex justify-content-center", children: [
        /* @__PURE__ */ jsx(Image, { src: "/bg_frame.png", className: "bg_poly" }),
        /* @__PURE__ */ jsx(Image, { src: "/Mask-group.png", className: "w-50" })
      ] }) }),
      /* @__PURE__ */ jsxs(
        Col,
        {
          className: "",
          style: {
            flexBasis: "45%",
            flexGrow: "0",
            position: "relative"
          },
          children: [
            /* @__PURE__ */ jsx(Image, { src: "/annotations.png", className: "speech-quote" }),
            /* @__PURE__ */ jsx("h2", { children: "Cherish every day. We have adapted the journey as our destination." }),
            /* @__PURE__ */ jsx("p", { children: "At GP Agarwal Group, our mission is rooted in passion, purpose, and people. Our founder, Late Shri Maneklal Agarwal Ji, instilled in us the values of perseverance, moral strength, and a commitment to uplift society." }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column my-4", children: [
              /* @__PURE__ */ jsx("h3", { children: "Shri. Gopal Agarwal " }),
              /* @__PURE__ */ jsx("span", { children: "Managing Director , GP Agarwal Group" })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { className: "px-4", variant: "danger", children: "Know More" }) })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(FutureSection, {}) }),
    /* @__PURE__ */ jsxs("section", { className: "about-us-section", children: [
      /* @__PURE__ */ jsx(AboutUs$1, {}),
      /* @__PURE__ */ jsx(Image, { src: "/bg-poly-1.svg", className: "bottom-left-bg" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "industry-section", children: /* @__PURE__ */ jsx(Industry, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(News, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(Sustainability$1, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(WorkCulture, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(Clients, {}) }),
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(Career, {}) })
  ] }) });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const Banner = ({
  children,
  image
}) => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "py-5 text-white banner d-flex",
      style: {
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        backgroundRepeat: "no-repeat"
      },
      children: /* @__PURE__ */ jsx(Container, { className: "d-flex flex-column", children })
    }
  );
};
const HalfHalfSection = ({
  leftContent,
  rightContent
}) => {
  return /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "align-items-center justify-content-around", children: [
    /* @__PURE__ */ jsx(Col, { xs: 12, md: 6, className: "d-flex ", children: leftContent }),
    /* @__PURE__ */ jsx(Col, { xs: 12, md: 6, className: "d-flex ", children: rightContent })
  ] }) });
};
const AboutUs = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "about-us-page",
    children: [/* @__PURE__ */ jsxs(Banner, {
      image: "about/about-banner.png",
      children: [/* @__PURE__ */ jsx("div", {
        className: "",
        style: {
          flexBasis: "45%"
        }
      }), /* @__PURE__ */ jsx("div", {
        className: "",
        style: {
          flexBasis: "50%",
          width: "50%"
        },
        children: /* @__PURE__ */ jsxs("div", {
          className: "",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "fs-2",
            children: "A Legacy Forged in Steel, A Future Built on Purpose"
          }), /* @__PURE__ */ jsx("p", {
            className: "lead",
            children: "Every great journey begins with a dream. For us, that dream took shape decades ago—to build a legacy that not only builds economies but uplifts people."
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("section", {
      className: "padding-y-100 position-relative stand-for-section",
      children: [/* @__PURE__ */ jsx(HalfHalfSection, {
        leftContent: /* @__PURE__ */ jsx(Image, {
          src: "about/stand.png",
          alt: "Industrial Plant",
          fluid: true,
          className: "rounded shadow"
        }),
        rightContent: /* @__PURE__ */ jsxs("div", {
          className: "d-flex flex-column gap-4",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "fs-3",
            children: "What We Stand For?"
          }), /* @__PURE__ */ jsx("p", {
            className: "fs-5",
            children: "We are a company that manufactures steel—and supports the dreams of a better tomorrow."
          }), /* @__PURE__ */ jsx("p", {
            className: "fs-5",
            children: "Our plant spans 200+ acres and produces 1,400,000 tons annually—but it’s our people, passion, and vision that make us who we are."
          }), /* @__PURE__ */ jsxs("ul", {
            className: "list-unstyled d-flex flex-column gap-2",
            children: [/* @__PURE__ */ jsxs("li", {
              className: "mb-2 fs-5 d-flex align-items-center",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), "We don’t rely on coal."]
            }), /* @__PURE__ */ jsxs("li", {
              className: "mb-2 fs-5  d-flex align-items-center",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), " We don’t cut corners."]
            }), /* @__PURE__ */ jsxs("li", {
              className: "mb-2 fs-5 d-flex align-items-center",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), " We deliver cleaner, ethical production, and innovation with heart."]
            })]
          })]
        })
      }), /* @__PURE__ */ jsx(Image, {
        src: "bg-poly-4.png",
        className: "bottom-right-bg"
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "text-white banner-img padding-y-100",
      style: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(about/mission.jpg)`
      },
      children: /* @__PURE__ */ jsx(Container, {
        className: "py-5",
        children: /* @__PURE__ */ jsxs(Row, {
          className: "justify-content-between",
          children: [/* @__PURE__ */ jsxs(Col, {
            md: 5,
            children: [/* @__PURE__ */ jsx("h3", {
              children: "Our Mission"
            }), /* @__PURE__ */ jsx("p", {
              children: "To empower industries and communities by delivering high-quality, sustainable engineering solutions that inspire trust, growth, and long-term value."
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 5,
            children: [/* @__PURE__ */ jsx("h3", {
              children: "Our Vision"
            }), /* @__PURE__ */ jsx("p", {
              children: "To empower industries and communities by delivering high-quality, sustainable engineering solutions that inspire trust, growth, and long-term value."
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-5",
      children: /* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-center mb-5",
          children: "Our Values"
        }), /* @__PURE__ */ jsxs("div", {
          className: "d-flex card-container",
          children: [/* @__PURE__ */ jsxs(Col, {
            className: "box-shadow-light p-4 my-card",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-flex align-items-center mb-3 ",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), /* @__PURE__ */ jsx("h5", {
                children: "Integrity"
              })]
            }), /* @__PURE__ */ jsx("p", {
              children: "We lead with honesty, transparency, and unwavering ethical standards."
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            className: "box-shadow-light p-4 my-card",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-flex align-items-center mb-3",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), /* @__PURE__ */ jsx("h5", {
                children: "Innovation"
              })]
            }), /* @__PURE__ */ jsx("p", {
              children: "We solve real-world problems and shape a better future."
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            className: "box-shadow-light p-4 my-card",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-flex align-items-center mb-3",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), /* @__PURE__ */ jsx("h5", {
                children: "Excellence"
              })]
            }), /* @__PURE__ */ jsx("p", {
              children: "From raw material to product—we ensure quality at every stage."
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            className: "box-shadow-light p-4 my-card",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-flex align-items-center mb-3",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), /* @__PURE__ */ jsx("h5", {
                children: "People-Centered"
              })]
            }), /* @__PURE__ */ jsx("p", {
              children: "We invest in people, valuing relationships with respect."
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            className: "box-shadow-light p-4 my-card",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-flex align-items-center mb-3",
              children: [/* @__PURE__ */ jsx(Android, {
                className: "bt-icon me-2"
              }), /* @__PURE__ */ jsx("h5", {
                children: "Sustainability"
              })]
            }), /* @__PURE__ */ jsx("p", {
              children: "We’re responsible—protecting our communities."
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-5 bg-light",
      children: /* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-center mb-3 h3",
          children: "Leadership"
        }), /* @__PURE__ */ jsx("span", {
          className: "d-block text-center mb-5 fs-6",
          children: "Meet the visionaries behind the momentum — and the reason we’re rising"
        }), /* @__PURE__ */ jsxs(Row, {
          className: "justify-content-around",
          children: [/* @__PURE__ */ jsxs(Col, {
            md: 3,
            className: "text-center",
            children: [/* @__PURE__ */ jsx(Image, {
              fluid: true,
              src: "about/leadership1.webp",
              alt: "Gopal Agarwal",
              className: "mb-3"
            }), /* @__PURE__ */ jsx("h5", {
              children: "Gopal Agarwal"
            }), /* @__PURE__ */ jsx("p", {
              children: "Chairman"
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            className: "text-center",
            children: [/* @__PURE__ */ jsx(Image, {
              fluid: true,
              src: "about/leadership2.webp",
              alt: "Abhishek Agarwal",
              className: "mb-3"
            }), /* @__PURE__ */ jsx("h5", {
              children: "Abhishek Agarwal"
            }), /* @__PURE__ */ jsx("p", {
              children: "CEO"
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            className: "text-center",
            children: [/* @__PURE__ */ jsx(Image, {
              fluid: true,
              src: "about/leadership3.webp",
              alt: "Vijay Kumar Natholia",
              className: "mb-3"
            }), /* @__PURE__ */ jsx("h5", {
              children: "Vijay Kumar Natholia"
            }), /* @__PURE__ */ jsx("p", {
              children: "Executive President of Sales"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-5",
      children: /* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-center mb-5  h3",
          children: "Awards & Recognition"
        }), /* @__PURE__ */ jsxs(Row, {
          children: [/* @__PURE__ */ jsx(Col, {
            md: 3,
            className: "text-center",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 p-4  align-items-center box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "about/medal.svg",
                className: "w-50"
              }), /* @__PURE__ */ jsx(Card.Body, {
                children: /* @__PURE__ */ jsx(Card.Text, {
                  children: "Star Export Certified Company 2020"
                })
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            md: 3,
            className: "text-center",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 p-4  align-items-center box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "about/award.svg",
                className: "w-50"
              }), /* @__PURE__ */ jsx(Card.Body, {
                children: /* @__PURE__ */ jsx(Card.Text, {
                  children: "ISO 9001:2020 Certified"
                })
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            md: 3,
            className: "text-center",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 p-4  align-items-center box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "about/bars.svg",
                className: "w-50"
              }), /* @__PURE__ */ jsx(Card.Body, {
                children: /* @__PURE__ */ jsx(Card.Text, {
                  children: "Best TMF for the Year 2019"
                })
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            md: 3,
            className: "text-center",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 p-4  align-items-center box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "about/employee.svg",
                className: "w-50"
              }), /* @__PURE__ */ jsx(Card.Body, {
                children: /* @__PURE__ */ jsx(Card.Text, {
                  children: "Award for Best Employee Retention"
                })
              })]
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "py-5",
      children: /* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-center mb-5",
          children: "Key Business Highlights"
        }), /* @__PURE__ */ jsxs(Row, {
          children: [/* @__PURE__ */ jsx(Col, {
            md: 4,
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                className: "rounded flex-grow-1",
                variant: "top",
                src: "about/highlight2.png"
              }), /* @__PURE__ */ jsxs(Card.Body, {
                className: "flex-shrink-1 flex-grow-0",
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  children: "1,44,000+ Tons Annual Capacity"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: "Among South India’s top ERW steel pipe manufacturers."
                })]
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            md: 4,
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                className: "rounded flex-grow-1",
                variant: "top",
                src: "about/highlight1.png"
              }), /* @__PURE__ */ jsxs(Card.Body, {
                className: "flex-shrink-1 flex-grow-0",
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  children: "Fully Integrated Plant"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: "From sponge iron to finished pipes—ensuring full control and consistency."
                })]
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            md: 4,
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                className: "rounded flex-grow-1",
                variant: "top",
                src: "about/highlight3.png"
              }), /* @__PURE__ */ jsxs(Card.Body, {
                className: "flex-shrink-1",
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  children: "8 MW Clean Power Generator"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: "WHRB-based captive power driving sustainable operations."
                })]
              })]
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("footer", {
      className: "py-5 bg-light",
      children: /* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsxs(Row, {
          children: [/* @__PURE__ */ jsx(Col, {
            md: 3,
            children: /* @__PURE__ */ jsx(Image, {
              src: "https://picsum.photos/50/50",
              alt: "GP Agarwal Logo",
              className: "mb-3"
            })
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsx("h5", {
              children: "Who We Are"
            }), /* @__PURE__ */ jsxs(Nav, {
              className: "flex-column",
              children: [/* @__PURE__ */ jsx(Nav.Link, {
                href: "#about-us",
                children: "About Us"
              }), /* @__PURE__ */ jsx(Nav.Link, {
                href: "#founders-journey",
                children: "Founder's Journey"
              })]
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsx("h5", {
              children: "Our Businesses"
            }), /* @__PURE__ */ jsxs(Nav, {
              className: "flex-column",
              children: [/* @__PURE__ */ jsx(Nav.Link, {
                href: "#steel",
                children: "Steel"
              }), /* @__PURE__ */ jsx(Nav.Link, {
                href: "#casting",
                children: "Casting"
              }), /* @__PURE__ */ jsx(Nav.Link, {
                href: "#power",
                children: "Power"
              })]
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsx("h5", {
              children: "Contact Us"
            }), /* @__PURE__ */ jsx("p", {
              children: "Kansas Towers, 5-4, 3rd Floor, 16th Cross, Chamber Road, Mumbai - 400053"
            }), /* @__PURE__ */ jsx("p", {
              children: "+91-1-9876543210"
            }), /* @__PURE__ */ jsx("p", {
              children: "contact@gpagarwal.com"
            })]
          })]
        }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx("p", {
          className: "text-center",
          children: "Copyright © 2025 GP Agarwal Group. All Rights Reserved."
        })]
      })
    })]
  });
};
const About = withComponentProps(AboutUs);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const Sustainability = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "sustainability-page",
    children: [/* @__PURE__ */ jsxs(Banner, {
      image: "Sustainability/banner.webp",
      children: [/* @__PURE__ */ jsx("div", {
        className: "",
        style: {
          flexBasis: "45%"
        }
      }), /* @__PURE__ */ jsx("div", {
        className: "",
        style: {
          flexBasis: "50%",
          width: "50%",
          maxWidth: "400px"
        },
        children: /* @__PURE__ */ jsxs("div", {
          className: "",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "fs-2 fst-italic",
            children: "Growing Responsibly, Building Sustainably"
          }), /* @__PURE__ */ jsx("p", {
            className: "lead mt-3",
            children: "At GP Agarwal Group, sustainability isn’t just a promise; it’s how we power progress—balancing industry, environment, and community to thrive together."
          })]
        })
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "padding-y-100 lightgreen-bg",
      children: /* @__PURE__ */ jsx(HalfHalfSection, {
        leftContent: /* @__PURE__ */ jsx(Image, {
          src: "Sustainability/commitment.png",
          alt: "Hands with Plant",
          fluid: true,
          className: "shadow border-rounded"
        }),
        rightContent: /* @__PURE__ */ jsxs("div", {
          className: "d-flex flex-column gap-3",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-green h3 m-0",
            children: "Our Commitment to Sustainability"
          }), /* @__PURE__ */ jsx("p", {
            children: "At GP Agarwal Group, we don’t just see sustainability as a goal—it’s an opportunity to redefine the future."
          }), /* @__PURE__ */ jsx("p", {
            children: "We are building industries that respect the Earth’s resources, power clean cities, and nurture thriving communities. Through clean energy initiatives, efficient steel manufacturing, and community partnerships, we are innovating today for a sustainable tomorrow—where every investment moves the planet, and every forward step leaves a positive legacy for generations to come."
          }), /* @__PURE__ */ jsxs("p", {
            className: "text-white green-bg p-3 rounded commitment",
            children: [/* @__PURE__ */ jsx("strong", {
              children: "Our vision is clear:"
            }), " To create an India where every innovation fuels resilience, every investment strengthens the planet, and every step forward leaves a positive legacy for generations to come."]
          })]
        })
      })
    }), /* @__PURE__ */ jsxs("section", {
      className: "pillars lightgreen-bg position-relative",
      children: [/* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-center mb-5 text-green",
          children: "Three Sustainability Pillars"
        }), /* @__PURE__ */ jsxs(Row, {
          className: "justify-content-around align-items-stretch",
          children: [/* @__PURE__ */ jsx(Col, {
            className: "flex-30",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 text-center px-2 pt-5 box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "Sustainability/pillar1.png",
                alt: "Clean Manufacturing",
                className: "rounded-circle mx-auto mb-4",
                style: {
                  width: "150px",
                  height: "150px"
                }
              }), /* @__PURE__ */ jsxs(Card.Body, {
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  className: "text-green",
                  children: "Clean Manufacturing"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: /* @__PURE__ */ jsxs("ul", {
                    className: "text-start",
                    children: [/* @__PURE__ */ jsx("li", {
                      children: "8 MW Energy from Waste Heat"
                    }), /* @__PURE__ */ jsx("li", {
                      children: "Minimum Carbon Footprint"
                    }), /* @__PURE__ */ jsx("li", {
                      children: "Product Efficiency"
                    })]
                  })
                })]
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            className: "flex-30",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 text-center px-2 pt-5 box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "Sustainability/pillar2.png",
                alt: "Community Development",
                className: "rounded-circle mx-auto mb-4",
                style: {
                  width: "150px",
                  height: "150px"
                }
              }), /* @__PURE__ */ jsxs(Card.Body, {
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  className: "text-green",
                  children: "Community Development"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: /* @__PURE__ */ jsxs("ul", {
                    className: "text-start",
                    children: [/* @__PURE__ */ jsx("li", {
                      children: "Daily Meals for Need"
                    }), /* @__PURE__ */ jsx("li", {
                      children: "Education for All"
                    }), /* @__PURE__ */ jsx("li", {
                      children: "Healthcare and Assistance"
                    })]
                  })
                })]
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            className: "flex-30",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 text-center px-2 pt-5 box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "Sustainability/pillar3.png",
                alt: "Environmental Responsibility",
                className: "rounded-circle mx-auto mb-4",
                style: {
                  width: "150px",
                  height: "150px"
                }
              }), /* @__PURE__ */ jsxs(Card.Body, {
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  className: "text-green",
                  children: "Environmental Responsibility"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: /* @__PURE__ */ jsxs("ul", {
                    className: "text-start",
                    children: [/* @__PURE__ */ jsx("li", {
                      children: "Water Reuse Conservation"
                    }), /* @__PURE__ */ jsx("li", {
                      children: "Solar Energy and Green Innovation"
                    }), /* @__PURE__ */ jsx("li", {
                      children: "Reforestation Efforts"
                    })]
                  })
                })]
              })]
            })
          })]
        })]
      }), /* @__PURE__ */ jsx(Image, {
        src: "Sustainability/poly-bg-right.svg",
        className: "bottom-right-bg"
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "",
      children: /* @__PURE__ */ jsx(Container, {
        fluid: true,
        className: "",
        children: /* @__PURE__ */ jsxs(Row, {
          className: "text-white flex-nowrap",
          style: {
            gap: "5px"
          },
          children: [/* @__PURE__ */ jsxs(Col, {
            md: 6,
            className: "banner-img py-2 d-flex flex-column justify-content-around flex-shrink-1",
            style: {
              backgroundImage: "url('/Sustainability/csr.webp')",
              minHeight: "400px"
            },
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-flex flex-column align-items-center",
              children: [/* @__PURE__ */ jsx(Image, {
                src: "Sustainability/csr.svg",
                alt: "CSR",
                fluid: true,
                className: "rounded shadow"
              }), /* @__PURE__ */ jsx("hr", {
                className: "border border-white border-2 opacity-100 w-25"
              }), /* @__PURE__ */ jsx("span", {
                className: "text-center h4",
                children: "Our CSR "
              })]
            }), /* @__PURE__ */ jsxs("a", {
              href: "#explore",
              className: "text-white link-underline link-underline-opacity-0 border border-white align-self-center px-3 rounded py-1",
              children: ["Explore", /* @__PURE__ */ jsx(ArrowRight, {
                className: "ms-5"
              })]
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 6,
            className: "banner-img py-2 d-flex flex-column justify-content-around",
            style: {
              backgroundImage: "url('/Sustainability/esg.webp')"
            },
            children: [/* @__PURE__ */ jsxs("div", {
              className: "d-flex flex-column align-items-center",
              children: [/* @__PURE__ */ jsx(Image, {
                src: "Sustainability/esg.svg",
                alt: "ESG",
                fluid: true,
                className: "rounded shadow"
              }), /* @__PURE__ */ jsx("hr", {
                className: "border border-white border-2 opacity-100 w-25"
              }), /* @__PURE__ */ jsx("span", {
                className: "text-center h4",
                children: "Our ESG "
              })]
            }), /* @__PURE__ */ jsxs("a", {
              href: "#explore",
              className: "text-white link-underline link-underline-opacity-0 border border-white align-self-center px-3 rounded py-1",
              children: ["Explore", /* @__PURE__ */ jsx(ArrowRight, {
                className: "ms-5"
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "padding-y-100 lightgreen-bg",
      children: /* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsxs(Row, {
          className: "mb-5",
          children: [/* @__PURE__ */ jsxs(Col, {
            md: 6,
            className: "pe-5",
            children: [/* @__PURE__ */ jsx("h2", {
              className: "text-green h4 text-uppercase",
              children: "Forging a Greener Tomorrow"
            }), /* @__PURE__ */ jsx("h3", {
              className: "h4",
              children: "Our roadmap for building a sustainable, responsible future."
            }), /* @__PURE__ */ jsx("p", {
              children: "At GP Agarwal Group, we are committed to creating a future we are investing in long-term solutions that protect our environment, generations to come, and build resilience for the future."
            })]
          }), /* @__PURE__ */ jsx(Col, {
            md: 6,
            children: /* @__PURE__ */ jsx(Image, {
              src: "Sustainability/garden.png",
              alt: "Greener Tomorrow",
              fluid: true,
              className: "shadow border-rounded"
            })
          })]
        }), /* @__PURE__ */ jsxs(Row, {
          className: "card-container justify-content-between",
          children: [/* @__PURE__ */ jsx(Col, {
            className: "flex-24",
            children: /* @__PURE__ */ jsx(Card, {
              className: "border-0 p-4 box-shadow-light h-100",
              children: /* @__PURE__ */ jsxs(Card.Body, {
                className: "p-0",
                children: [/* @__PURE__ */ jsx(Card.Img, {
                  variant: "top",
                  src: "Sustainability/roadmap1.svg",
                  alt: "Clean Manufacturing",
                  className: "rounded-circle mb-2",
                  style: {
                    width: "50px",
                    height: "50px"
                  }
                }), /* @__PURE__ */ jsx(Card.Title, {
                  children: "Expand Clean Energy"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: "Transition more operations to renewable energy sources."
                })]
              })
            })
          }), /* @__PURE__ */ jsx(Col, {
            className: "flex-24",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 p-4 box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "Sustainability/roadmap2.svg",
                alt: "Clean Manufacturing",
                className: "rounded-circle mb-2",
                style: {
                  width: "50px",
                  height: "50px"
                }
              }), /* @__PURE__ */ jsxs(Card.Body, {
                className: "p-0",
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  children: "Achieve Net-Zero by 2030"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: "Reduce emissions through greener practices."
                })]
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            className: "flex-24",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 p-4 box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "Sustainability/roadmap3.svg",
                alt: "Clean Manufacturing",
                className: "rounded-circle mb-2",
                style: {
                  width: "50px",
                  height: "50px"
                }
              }), /* @__PURE__ */ jsxs(Card.Body, {
                className: "p-0",
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  children: "Strengthen Community Development"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: "Enhance education and livelihood programs."
                })]
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            className: "flex-24",
            children: /* @__PURE__ */ jsxs(Card, {
              className: "border-0 p-4 box-shadow-light h-100",
              children: [/* @__PURE__ */ jsx(Card.Img, {
                variant: "top",
                src: "Sustainability/roadmap4.svg",
                alt: "Clean Manufacturing",
                className: "rounded-circle mb-2",
                style: {
                  width: "50px",
                  height: "50px"
                }
              }), /* @__PURE__ */ jsxs(Card.Body, {
                className: "p-0",
                children: [/* @__PURE__ */ jsx(Card.Title, {
                  children: "Adopt Circular Economy Principles"
                }), /* @__PURE__ */ jsx(Card.Text, {
                  children: "Reduce waste in all operations."
                })]
              })]
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsxs("section", {
      className: "py-5 lightgreen-bg highlight",
      children: [/* @__PURE__ */ jsxs(Container, {
        children: [/* @__PURE__ */ jsx("h2", {
          className: "h4 text-uppercase text-green",
          children: "Sustainability Highlights of FY 2023-24"
        }), /* @__PURE__ */ jsx("p", {
          className: "w-75 fs-5",
          children: "We drive environmental responsibility by integrating sustainable practices across our operations. Our initiatives focus on clean manufacturing, renewable energy adoption, resource conservation and promoting circular economy for a better tomorrow."
        }), /* @__PURE__ */ jsxs(Row, {
          className: "mt-4 align-items-end",
          children: [/* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsxs("h4", {
              className: "h6 text",
              children: ["Material ", /* @__PURE__ */ jsx("br", {}), " Management"]
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-green fw-bold",
              children: "32%"
            }), /* @__PURE__ */ jsx("p", {
              className: "fs-7",
              children: "Recycled eco-friendly material used"
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsxs("h4", {
              className: "h6",
              children: ["Renewable ", /* @__PURE__ */ jsx("br", {}), " Resource"]
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-green fw-bold",
              children: "0.16 Mn GJ"
            }), /* @__PURE__ */ jsx("p", {
              className: "fs-7",
              children: "Renewable energy used"
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-green fw-bold",
              children: "9.2%"
            }), /* @__PURE__ */ jsx("p", {
              className: "fs-7",
              children: "of total electricity consumption"
            })]
          })]
        }), /* @__PURE__ */ jsxs(Row, {
          className: "mt-4",
          children: [/* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsxs("h4", {
              className: "h6",
              children: ["Green ", /* @__PURE__ */ jsx("br", {}), " Business"]
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-green fw-bold",
              children: "50%"
            }), /* @__PURE__ */ jsx("p", {
              className: "fs-7",
              children: "Of revenue"
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsxs("h4", {
              className: "h6",
              children: ["Energy ", /* @__PURE__ */ jsx("br", {}), " Efficiency"]
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-green fw-bold",
              children: "16%"
            }), /* @__PURE__ */ jsx("p", {
              className: "fs-7",
              children: "Reduction in energy intensity FY"
            })]
          })]
        }), /* @__PURE__ */ jsxs(Row, {
          className: "align-items-end",
          children: [/* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsxs("h4", {
              className: "h6",
              children: ["Protecting ", /* @__PURE__ */ jsx("br", {}), " Nature"]
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-green fw-bold",
              children: "~4M"
            }), /* @__PURE__ */ jsx("p", {
              className: "fs-7",
              children: "Saplings planted across the region"
            })]
          }), /* @__PURE__ */ jsxs(Col, {
            md: 3,
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-green fw-bold",
              children: ">50%"
            }), /* @__PURE__ */ jsx("p", {
              className: "fs-7",
              children: "Water reused"
            })]
          })]
        }), /* @__PURE__ */ jsx("h2", {
          className: "text-green w-50 text-center mt-5 ms-5",
          children: '"Sustainability is not a choice — it’s the future we build today."'
        })]
      }), /* @__PURE__ */ jsx(Image, {
        src: "Sustainability/tree.png",
        className: "bottom-right-bg"
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "py-5 text-center banner-img h-100 d-flex align-items-center justify-content-center",
      style: {
        backgroundImage: "url(Sustainability/contact.webp)",
        minHeight: "800px"
      },
      children: /* @__PURE__ */ jsxs(Container, {
        className: "align-items-center d-flex flex-column justify-content-center h-100",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "text-white h1 w-75",
          children: "Together, we can build a future that is strong, sustainable, and full of opportunity."
        }), /* @__PURE__ */ jsx(Button, {
          variant: "light",
          href: "#contact-us",
          className: "mt-3 text-green fw-bold px-5 fs-5",
          children: "Contact Us"
        })]
      })
    })]
  });
};
const index = withComponentProps(Sustainability);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dkmi4nQb.js", "imports": ["/assets/chunk-AYJ5UCUI-BqEzv7Om.js", "/assets/index-ClqFNjjG.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-E0FuJ08l.js", "imports": ["/assets/chunk-AYJ5UCUI-BqEzv7Om.js", "/assets/index-ClqFNjjG.js", "/assets/with-props-CGxt1Msj.js"], "css": ["/assets/root-CoFJ26U4.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "common/Header/index": { "id": "common/Header/index", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-BC6k3Ahb.js", "imports": ["/assets/with-props-CGxt1Msj.js", "/assets/chunk-AYJ5UCUI-BqEzv7Om.js", "/assets/Image-Cu-_0SzV.js", "/assets/Nav-BIEgkiuL.js", "/assets/index-ClqFNjjG.js", "/assets/CardHeaderContext-gsMjRBJr.js", "/assets/Button-DaO6dmbF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "common/Header/index", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-BSEAfPND.js", "imports": ["/assets/with-props-CGxt1Msj.js", "/assets/chunk-AYJ5UCUI-BqEzv7Om.js", "/assets/Image-Cu-_0SzV.js", "/assets/Row-Cj4potEW.js", "/assets/Button-DaO6dmbF.js"], "css": ["/assets/home-CORjHvny.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "views/About/About": { "id": "views/About/About", "parentId": "common/Header/index", "path": "/about-us", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/About-EoMQ3668.js", "imports": ["/assets/with-props-CGxt1Msj.js", "/assets/chunk-AYJ5UCUI-BqEzv7Om.js", "/assets/index-DSOTDu32.js", "/assets/Image-Cu-_0SzV.js", "/assets/Row-Cj4potEW.js", "/assets/Nav-BIEgkiuL.js", "/assets/CardHeaderContext-gsMjRBJr.js"], "css": ["/assets/About-qiMfs6e3.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "views/Sustainability/index": { "id": "views/Sustainability/index", "parentId": "common/Header/index", "path": "/sustainability", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-D9McEZzG.js", "imports": ["/assets/with-props-CGxt1Msj.js", "/assets/chunk-AYJ5UCUI-BqEzv7Om.js", "/assets/index-DSOTDu32.js", "/assets/Image-Cu-_0SzV.js", "/assets/Row-Cj4potEW.js", "/assets/Button-DaO6dmbF.js", "/assets/CardHeaderContext-gsMjRBJr.js"], "css": ["/assets/index-DuBUxfml.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-96a7d241.js", "version": "96a7d241", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "common/Header/index": {
    id: "common/Header/index",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "common/Header/index",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "views/About/About": {
    id: "views/About/About",
    parentId: "common/Header/index",
    path: "/about-us",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "views/Sustainability/index": {
    id: "views/Sustainability/index",
    parentId: "common/Header/index",
    path: "/sustainability",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
