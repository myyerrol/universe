import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "快速上手",
        icon: "bolt",
        link: "/start/"
    }, {
        text: "核心项目",
        icon: "toolbox",
        prefix: "/projects/",
        children: [
            "space/",
            "meteor/",
            "blackhole/",
            "galaxy/",
            "aurora/",
            "eclipse/",
        ]
    }, {
        text: "在线平台",
        icon: "layer-group",
        link: "/platform/"
    }, {
        text: "关于我们",
        icon: "circle-user",
        link: "/about/"
    }
]);
