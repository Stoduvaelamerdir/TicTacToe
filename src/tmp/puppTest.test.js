const puppeteer = require("puppeteer");

describe('Puppeteer screenshot test', () => {
    let browser, page;
    let url = "https://google.com"
    
    beforeAll(async () => {
        browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
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

/*
const grabData = require('puppTest.js');

describe('tests Google', function testExample() {
  //this.timeout(30000);

  it('browses the website', async function testBrowser() {
    const { title, outerHTML } = await grabData();
    this.title = title;
    this.outerHTML = outerHTML;
  });

  it('title has text: google', async function testTitle() {
    expect(this.title.toLowerCase()).to.have.string('google');
  });

  it('outerHTML has text: google', async function testOuterHTML() {
    expect(this.outerHTML.toLowerCase()).to.have.string('google');
  });
});*/