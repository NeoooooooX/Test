import {
    _ as f,
    G as b,
    r as n,
    a as m,
    o as i,
    c as d,
    w as a,
    b as t,
    e as c,
    D as w,
    h as g,
    t as y,
    F as T,
    d as x,
    f as L
} from "./index-f3667432.js";
import {
    b as H,
    c as M
} from "./home-a0068934.js";
import "./filter-93edc1f5.js";
const B = {
        components: {
            "svg-omni-logo": H,
            "svg-omni-brand": M
        },
        computed: {
            content() {
                return this.$routing.post.content.home_fictional
            },
            links() {
                const o = this.content.links_work.split(`
`);
                return b(o, _ => {
                    const s = _.split(" ");
                    return {
                        label: s[0],
                        url: s[1]
                    }
                })
            }
        },
        methods: {
            letsPlay() {
                const o = this;
                o._app.setDark(!1), o._analytics.track("Giant play button clicked"), setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "instant"
                    })
                }, 100)
            }
        }
    },
    D = {
        class: "template-home_footer-work"
    },
    C = ["innerHTML"],
    N = {
        class: "template-home_footer-work_divider"
    },
    V = t("hr", null, null, -1),
    F = t("hr", null, null, -1),
    G = {
        class: "template-home_footer-work_bottom"
    },
    O = ["innerHTML"],
    P = ["innerHTML"];

function W(o, _, s, E, S, e) {
    const p = n("ui-button"),
        h = n("svg-omni-brand"),
        k = n("ui-link"),
        v = n("svg-omni-logo"),
        r = m("orphans"),
        l = m("nl2br");
    return i(), d("section", D, [a(t("h5", {
        class: "--type-title-work",
        innerHTML: e.content.title_work
    }, null, 8, C), [
        [r],
        [l]
    ]), c(p, {
        class: "template-home_footer-work_button",
        variant: "yellow",
        mobile: !1,
        uppercase: "",
        onClick: e.letsPlay
    }, {
        default: w(() => [g(y(e.content.button_work), 1)]),
        _: 1
    }, 8, ["onClick"]), t("div", N, [V, c(h), F]), t("div", G, [t("div", null, [a(t("h6", {
        class: "--type-title-work",
        innerHTML: e.content.strapline_work
    }, null, 8, O), [
        [r],
        [l]
    ]), (i(!0), d(T, null, x(e.links, u => (i(), L(k, {
        text: u.label,
        link: u.url
    }, null, 8, ["text", "link"]))), 256))]), t("div", null, [c(v), a(t("p", {
        innerHTML: e.content.clarify_work
    }, null, 8, P), [
        [r],
        [l]
    ])])])])
}
const A = f(B, [
    ["render", W]
]);
export {
    A as
    default
};