import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "教程资料",
        prefix: "/tutorials/",
        children: []
    }, {
        text: "常用工具",
        link: "/tools/"
    }
]);
