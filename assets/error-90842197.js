import {
  _ as l,
  r as _,
  c as r,
  b as t,
  e as p,
  F as a,
  h as o,
  t as n,
  o as s,
} from "./index-f3667432.js";
import { p as i } from "./grav-buttons-d2cdc5b3.js";
import "./filter-93edc1f5.js";
const m = {
    components: { "part-grav-buttons": i },
    computed: {
      error() {
        return this.$routing.post.error || {};
      },
      message() {
        return this.error.status === 404
          ? "Page not found"
          : this.error.message || "I'm a teapot";
      },
      install() {
        return "http://conceptcapers.dev.hextail.com/admin/install";
      },
    },
  },
  d = { class: "template-error" },
  u = { class: "template-error_grav" },
  h = { class: "template-error_content" },
  g = t("h1", { class: "--type-title-play" }, "Hello world", -1),
  y = { class: "--type-text-play --type-cms" },
  f = ["href"],
  v = { class: "--type-title-play transfrom rotate--2" },
  x = { class: "--type-text-play --type-cms" };
function k(b, B, N, V, C, e) {
  const c = _("part-grav-buttons");
  return (
    s(),
    r("main", null, [
      t("article", d, [
        t("div", u, [p(c, { error: e.message }, null, 8, ["error"])]),
        t("div", h, [
          e.error.status === 501
            ? (s(),
              r(
                a,
                { key: 0 },
                [
                  g,
                  t("p", y, [
                    o("Click "),
                    t("a", { target: "_blank", href: e.install }, "here", 8, f),
                    o(" to install"),
                  ]),
                ],
                64
              ))
            : (s(),
              r(
                a,
                { key: 1 },
                [
                  t("h1", v, n(e.error.status || 418), 1),
                  t(
                    "p",
                    x,
                    n(
                      e.error.status === 404
                        ? "Page not found"
                        : e.error.message || "I'm a teapot"
                    ),
                    1
                  ),
                ],
                64
              )),
        ]),
      ]),
    ])
  );
}
const w = l(m, [["render", k]]);
export { w as default };
