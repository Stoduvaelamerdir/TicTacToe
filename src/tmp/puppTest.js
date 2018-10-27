const puppeteer = require('puppeteer');
/*
(async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
})();

*/
const grabData = async () => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	const page = await browser.newPage();
	await page.goto('https://google.com');

	const title = await page.title();
  	const outerHTML = await page.evaluate(() => document.querySelector('body').outerHTML);
  	// cleanup once done
  	await browser.close();
  	return { title, outerHTML };
};

module.exports = grabData;