import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
    {
        text: "Get Started",
        icon: "bolt",
        link: "/en/start/"
    }, {
        text: "Projects",
        icon: "toolbox",
        prefix: "/en/projects/",
        children: [
            "space/",
            "meteor/",
            "blackhole/",
            "galaxy/",
            "aurora/",
            "eclipse/",
        ]
    }, {
        text: "Online Platform",
        icon: "layer-group",
        link: "/en/platform/"
    }, {
        text: "About US",
        icon: "circle-user",
        link: "/en/about/"
    }
]);
