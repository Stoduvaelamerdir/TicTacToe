const puppeteer = require("puppeteer");

describe('TicTacToe game tests', () => {
    var browser, page, field;
    var pageURL = 'https://glacial-inlet-92555.herokuapp.com/';

    beforeAll(async () => {
        browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        page = await browser.newPage();
    });

    afterAll(() => {
        browser.close();
    });

    test('X in field 1', async () => {
        await page.goto('https://glacial-inlet-92555.herokuapp.com/', { 
            waitUntil: ['load','domcontentloaded','networkidle0','networkidle2']
        });
        await page.click('#f0');
        //await page.waitFor('#f0');
        //await page.waitFor(1000);

        field = await page.evaluate(() => document.querySelector('.title > p').innerHTML);
        expect(field).toBe('The Tic Tac Toe game!');

        field = await page.evaluate(() => document.querySelector('#f0').innerHTML);
        expect(field).toBe('X');
        // await page.screenshot( {path: './src/tmp/sc.png', type: 'png'} ); // FOR TESTING
    });

    test('X in field 1, O in field 4', async () => {
        await page.goto(pageURL);
        await page.click('#f0');
        //await page.waitFor(1000);
    
        field = await page.evaluate(() => document.querySelector('#f0').innerHTML);

        expect(field).toBe('X');

        await page.click('#f4');

        field = await page.evaluate(() => document.querySelector('#f4').innerHTML);

        expect(field).toBe('O');
        //await page.screenshot( {path: './src/tmp/sc2.png', type: 'png'} ); // FOR TESTING
    });

    test('3x X in top row should make X the winner and end the game', async () => {
        await page.goto('https://glacial-inlet-92555.herokuapp.com/', { 
            waitUntil: ['load','domcontentloaded','networkidle0','networkidle2']
        });
        
        await page.click('#f0'); // x
        await page.click('#f4'); // o
        //await page.waitFor(1000);
        await page.click('#f1'); // x
        await page.click('#f3'); // o
        await page.click('#f2'); // x
        //await page.waitFor(1000);

        //await page.screenshot( {path: './src/tmp/sc3.png', type: 'png'} ); // FOR TESTING
    
        field = await page.evaluate(() => document.querySelector('#f0').innerHTML);
        expect(field).toBe('X');

        field = await page.evaluate(() => document.querySelector('#f4').innerHTML);
        expect(field).toBe('O');

        field = await page.evaluate(() => document.querySelector('#f1').innerHTML);
        expect(field).toBe('X');

        field = await page.evaluate(() => document.querySelector('#f3').innerHTML);
        expect(field).toBe('O');

        field = await page.evaluate(() => document.querySelector('#f2').innerHTML);
        expect(field).toBe('X');

        // X should have won by now, checking endgame field for text including X (e.g. Winner: X)
        field = await page.evaluate(() => document.querySelector('#endgame').innerHTML);
        expect(field).toBe('X');

        // Game should have ended, extra clicks shouldnt fill a field
        await page.click('#f8');
        field = await page.evaluate(() => document.querySelector('#f8').innerHTML);
        expect(field).toBe('');
           
    });
    
});