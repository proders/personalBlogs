// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'proder',
    tagline: '回首向往萧瑟处，也无风雨也无晴。',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://proders.github.io', // 当前页面的url，setting里面 都可以看到部署后的url
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/blogs',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'proders', // Usually your GitHub org/user name.
    projectName: 'personalBlogs', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash:true,

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    // i18n: {
    //   defaultLocale: 'en',
    //   locales: ['en'],
    // },

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            zh: {
                label: '简体中文',
            },
        },
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'proder',
                logo: {
                    alt: 'proder',
                    src: 'img/logo.svg',
                },
                items: [
                    /*     {
                           type: 'docSidebar',
                           sidebarId: 'tutorialSidebar',
                           position: 'left',
                           label: 'Tutorial',
                         },*/
                    {
                        to: '/docs/knowledgeStructure/',
                        label: '💼知识体系🚴🏻‍♀️',
                        position: 'left',
                        logo: {
                            alt: '知识体系',
                            src: 'img/logo.svg',
                            // srcDark?: string;
                            // href?: string;
                            width: '100px',
                            height: '100px',
                            // target?: string;
                            // style?: object;
                            // className?: string;
                        }
                    },
                    {
                        to: '/docs/life/',
                        label: '👨🏻‍🌾生活📽️',
                        position: 'left',
                    },
                    {
                        to: '/docs/log/2023-11',
                        label: '日志📽️',
                        position: 'left',
                    },
                    {to: 'blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                apiKey: "***********",
                appId: "***********",
                indexName: "*****",
            },
        }),
    titleDelimiter: '🦖', // 默认为 `|`
    themes: [
        [
            "@easyops-cn/docusaurus-search-local", {
            hashed: true,
            language: ["en", "zh"],
        }
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            /*     ({
                   // ... Your options.
                   // `hashed` is recommended as long-term-cache of index file is possible.
                   hashed: true,
                   // For Docs using Chinese, The `language` is recommended to set to:
                   // ```
                   // language: ["en", "zh"],
                   // ```
                 }),*/
        ],
    ],
    plugins: [
        'docusaurus-plugin-sass',
    ],
    customFields:{
            mapKey:'a7d73805ca421c6d2ab04fb4327e4f77', // 高德地图key
            mapSecretKey:"ab8a27da8b1b63c938177bde934a624d" //高德地图安全密钥
    }
};
module.exports = config;
