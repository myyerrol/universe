import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
    // Theme Basic
    hostname: "https://myyerrol.github.io",
    author: {
        name: "Miao Yuyang",
        url: "https://myyerrol.github.io",
        email: "myyerrol@126.com"
    },
    license: "GPL-3.0",
    favicon: "/res/images/logo/logo.png",

    // Theme Layout
    // Navbar
    navbarIcon: true,
    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Language", "Repo", "Outlook", "Search"]
    },
    logo: "/res/images/logo/logo.png",
    logoDark: "/res/images/logo/logo.png",
    repo: "myyerrol/universe",
    repoDisplay: true,
    repoLabel: "GitHub",
    navbarAutoHide: "mobile",
    hideSiteNameOnMobile: true,
    // Sidebar
    sidebarIcon: true,
    sidebarSorter: ["readme", "order", "title", "filename"],
    headerDepth: 2,
    // Route Navgation
    breadcrumb: true,
    breadcrumbIcon: true,
    prevLink: true,
    nextLink: true,
    // Title
    titleIcon: true,
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    // Meta
    lastUpdated: true,
    contributors: true,
    editLink: true,
    docsRepo: "repo",
    docsBranch: "main",
    docsDir: "src",
    // Footer
    copyright: "",
    displayFooter: true,
    // Others
    rtl: false,
    toc: true,

    // Theme Appearance
    iconAssets: "fontawesome",
    darkmode: "toggle",
    fullscreen: false,
    pure: false,
    print: false,

    // Theme i18N
    locales: {
        "/zh/": {
            navbar: zhNavbar,
            sidebar: zhSidebar,
            footer: "GPL协议 | 版权所有 © 2024-现在 myyerrol",
            metaLocales: {
                editLink: "在 GitHub 上编辑此页"
            },
        },
        "/en/": {
            navbar: enNavbar,
            sidebar: enSidebar,
            footer: "GPL License | Copyright © 2024-now myyerrol",
            metaLocales: {
                editLink: "Edit this page on GitHub"
            },
        }
    },

    // Theme Plugins
    plugins: {
        mdEnhance: {
            gfm: false,
            hint: true,
            vPre: false,
            breaks: false,
            linkify: false,
            alert: false,
            tabs: false,
            codetabs: false,
            align: false,
            attrs: false,
            sup: false,
            sub: false,
            footnote: false,
            mark: false,
            figure: false,
            imgLazyload: false,
            imgMark: false,
            imgSize: false,
            obsidianImgSize: false,
            tasklist: false,
            include: false,
            katex: false,
            mathjax: false,
            component: false,
            chart: false,
            echarts: false,
            flowchart: false,
            mermaid: false,
            stylize: undefined,
            playground: undefined,
            vuePlayground: false,
            sandpack: false,
            demo: false,
            revealJs: false,
            delay: 800,
            locales: undefined
        },
        blog: false,
        comment: false,
        searchPro: {
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
        },
        copyright: {
            author: "myyerrol",
            license: "GPL-3.0",
            triggerLength: 1,
            maxLength: 0,
            global: true,
            disableCopy: false,
            disableSelection: false
        },
        feed: false,
        catalog: true,
        backToTop: true,
        components: {
            components: [
                "Badge"
            ]
        },
        copyCode: true,
        externalLinkIcon: true,
        git: true,
        linksCheck: true,
        prismjs: true,
        photoSwipe: true,
        pwa: false,
        readingTime: {
            wordPerMinute: 300
        },
        seo: true,
        sitemap: true
    }
}, {
    // Theme Behavior
    check: true,
    compact: true,
    custom: false
});
