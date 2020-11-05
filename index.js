const axios = require('axios');
const puppeteer = require('puppeteer');

async function run() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.setViewport({width: 1400, height: 1200});
	await page.goto(process.argv[2])
	await page.screenshot({path: `image.png`, fullPage: true})
	await browser.close()
}
run();
