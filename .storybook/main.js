// NOTE: Open issue on Github
// https://github.com/storybookjs/storybook/issues/9852

// const { addParameters } = require('@storybook/svelte');

// const mobilePhoneViewports = {
// 	iPhone8: {
// 		name: 'Apple iPhone 8',
// 		styles: { width: '375px', height: '667px' },
// 		type: 'mobile'
// 	},
// 	iPhone8Plus: {
// 		name: 'Apple iPhone 8 Plus',
// 		styles: { width: '414px', height: '736px' },
// 		type: 'mobile'
// 	},
// 	iPhone11: {
// 		name: 'Apple iPhone 11',
// 		styles: { width: '414px', height: '896px' },
// 		type: 'mobile'
// 	},
// 	iPhone11Pro: {
// 		name: 'Apple iPhone 11 Pro',
// 		styles: { width: '375px', height: '812px' },
// 		type: 'mobile'
// 	},
// 	iPhone11ProMax: {
// 		name: 'Apple iPhone 11 Pro Max',
// 		styles: { width: '414px', height: '896px' },
// 		type: 'mobile'
// 	},
// 	iPhoneSE: {
// 		name: 'Apple iPhone SE',
// 		styles: { width: '320px', height: '568px' },
// 		type: 'mobile'
// 	},
// 	onePlus7TPro: {
// 		name: 'OnePlus 7T Pro',
// 		styles: { width: '412px', height: '892px' },
// 		type: 'mobile'
// 	},
// 	pixel4: {
// 		name: 'Google Pixel 4',
// 		styles: { width: '411px', height: '869px' },
// 		type: 'mobile'
// 	},
// 	pixel4XL: {
// 		name: 'Google Pixel 4 XL',
// 		styles: { width: '411px', height: '869px' },
// 		type: 'mobile'
// 	},
// 	note10: {
// 		name: 'Samsung Note 10',
// 		styles: { width: '412px', height: '869px' },
// 		type: 'mobile'
// 	},
// 	note10Plus: {
// 		name: 'Samsung Note 10+',
// 		styles: { width: '412px', height: '869px' },
// 		type: 'mobile'
// 	}
// };

// const tabletViewports = {
// 	iPad: {
// 		name: 'Apple iPad 10.2"',
// 		styles: { width: '810px', height: '1080px' },
// 		type: 'tablet'
// 	},
// 	iPadMini: {
// 		name: 'Apple iPad Mini 7.9"',
// 		styles: { width: '768px', height: '1024px' },
// 		type: 'tablet'
// 	},
// 	iPadAir: {
// 		name: 'Apple iPad Air 10.5"',
// 		styles: { width: '834px', height: '1112px' },
// 		type: 'tablet'
// 	},
// 	iPadPro12: {
// 		name: 'Apple iPad Pro 12.9"',
// 		styles: { width: '1024px', height: '1366px' },
// 		type: 'tablet'
// 	},
// 	iPadPro11: {
// 		name: 'Apple iPad Pro 11"',
// 		styles: { width: '834px', height: '1194px' },
// 		type: 'tablet'
// 	},
// }

// const desktopViewports = {
// 	responsive: {
// 		name: 'Responsive Desktop',
// 		styles: { width: '100%', height: '100%' },
// 		type: 'desktop'
// 	}
// };

// addParameters({
// 	viewport: {
// 		viewports: {
// 			...mobilePhoneViewports,
// 			...tabletViewports,
// 			...desktopViewports
// 		}
// 	}
// });

module.exports = {
	stories: ['../src/components/**/*.stories.js'],
	addons: [
		'@storybook/addon-viewport/register',
		'@storybook/addon-actions',
		'@storybook/addon-links',
	]
};