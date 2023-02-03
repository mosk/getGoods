import settingsDefault from '../settings.js';
import puppeteer from 'puppeteer-core';

// ссылка на товар, селекторы инфы, селектор загрузки (например, контейнер товара)
const getGood = (link, settings = settingsDefault, selector = `body`) => {
	const good = {...settingsDefault};
	const selectors = Array.prototype.filter.call(settings, (item) => console.log(item));

	console.log(good, selectors);

	// async () => {
	// 	const browser = await puppeteer.launch();
	// 	const page = await browser.newPage();

	// 	await page.goto(link);
	// 	await page.setViewport({ width: 1280, height: 800 });

	// 	await page.waitForSelector(selector);
	// 	await page.click(searchResultSelector);

	// 	// Locate the full title with a unique string
	// 	const textSelector = await page.waitForSelector(
	// 		'text/Customize and automate'
	// 	);
	// 	const fullTitle = await textSelector.evaluate(el => el.textContent);

	// 	// Print the full title
	// 	console.log('The title of this blog post is "%s".', fullTitle);

	// 	await browser.close();
	// }

	return good;
};

getGood();

export default getGood;