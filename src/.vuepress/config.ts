import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/galaxy/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Galaxy",
            description: "Galaxy的官方网站",
        }
    },
    shouldPrefetch: false,
    plugins: [
        searchProPlugin({
            indexContent: true,
            autoSuggestions: true,
            customFields: [{
                getter: (page) => page.frontmatter.title,
                formatter: "标题：$content"
            }, {
                getter: (page) => page.frontmatter.author,
                formatter: "作者：$content"
            }, {
                getter: (page) => page.frontmatter.category,
                formatter: "分类：$content"
            }, {
                getter: (page) => page.frontmatter.tag,
                formatter: "标签：$content"
            }],
            hotKeys: [{ key: "k", ctrl: true }, { key: "/", ctrl: true }],
            queryHistoryCount: 5,
            resultHistoryCount: 5,
            searchDelay: 150,
            sortStrategy: "max",
            worker: "search-pro.worker.js",
            hotReload: false,
            indexOptions: {},
            indexLocaleOptions: {},
            locales: {
                "/": {
                }
            }
        })
    ],
    theme: theme
});
