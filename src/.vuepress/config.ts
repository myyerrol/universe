import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/universe/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "开源芯片宇宙",
            description: "开源芯片宇宙",
        },
        "/en/": {
            lang: "en-US",
            title: "Open Source Chip Universe",
            description: "Open Source Chip Universe"
        }
    },
    shouldPrefetch: false,
    plugins: [
    ],
    theme: theme
});
