const puppeteer = require('puppeteer');

const page;

(async () => {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.launch()

    //const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    //const page = await browser.newPage();

    tictactoe(page);
    await browser.close();
})();

async function tictactoe(){
	
	let pageURL = 'https://glacial-inlet-92555.herokuapp.com/';

	await page.goto(pageURL);

	await page.click('#f0'); // x - 0
	await page.click('#f3'); // o - 3
	await page.click('#f2'); // x - 2
	await page.click('#f4'); // o - 4
	await page.click('#f1'); // x - 1
	
	// x x x
	// o o -
	// - - -

	console.log("3x in a row, this puppet wins!");

}