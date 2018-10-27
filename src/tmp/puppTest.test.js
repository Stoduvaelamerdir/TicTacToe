const puppeteer = require("puppeteer");

describe('Puppeteer screenshot test', () => {
    let browser, page;
    let url = "https://google.com"
    
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(() => {
        browser.close();
    });

    test('Should take screenshot of google\'s landing page', async () => {
        await page.goto(url);
        await page.screenshot( {path: './src/tmp/sc.png', type: 'png'} );
    });
});