import {
  _ as p,
  g as d,
  r as o,
  a as n,
  c,
  b as t,
  w as f,
  F as u,
  d as b,
  e as h,
  o as e,
  f as m,
} from "./index-f3667432.js";
const g = {
    computed: {
      post() {
        return this.$routing.post;
      },
      postTitle() {
        return (
          d(this.post, "content.details.heading") || this.post.title
        ).trim();
      },
    },
  },
  k = { class: "app-x space-y-flg" },
  x = { class: "pt-f2xl x x-narrow" },
  v = ["innerHTML"],
  B = { class: "space-y-fsm" };
function T(w, y, L, $, D, s) {
  const r = o("global-blocks"),
    a = o("global-footer"),
    l = n("nl2br"),
    i = n("links");
  return (
    e(),
    c("main", null, [
      t("article", k, [
        t("header", x, [
          f(
            t(
              "h1",
              { class: "text-f6 font-90 text-center", innerHTML: s.postTitle },
              null,
              8,
              v
            ),
            [[l], [i]]
          ),
        ]),
        t("section", B, [
          (e(!0),
          c(
            u,
            null,
            b(
              s.post.content.body,
              (_) => (e(), m(r, { block: _ }, null, 8, ["block"]))
            ),
            256
          )),
        ]),
        h(a),
      ]),
    ])
  );
}
const H = p(g, [["render", T]]);
export { H as default };
