module.exports = {
	title: 'Cloud Glossary',
	description: 'Just playing around',
	theme: 'solarized',
	globalUIComponents: ['ThemeManager'],
	themeConfig: {
		sidebar: [
			{
				title: "腾讯云",
				collapsable: false,
				sidebarDepth: 1,
				children: ["腾讯云,d1/"]
			},
		],
		repo: 'https://github.com/krast/cloud-glossary',
		repoLabel: '查看源码',
		docsDir: 'docs',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: '在线修订此页面',
		lastUpdated: '修订于',
	},
	plugins: ['autobar'],
};
