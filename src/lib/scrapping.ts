import { dataSourceEnum, feedNews } from "../types/feedNews";

// import puppeteer library
const puppeteer = require('puppeteer')
function feedsElPais():Promise<feedNews> {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({
                headless: false,
                ignoreHTTPSErrors: true,
            })
            // then we need to start a browser tab
            let page = await browser.newPage();
            await page.goto('https://elpais.com/', {
                waitUntil: 'domcontentloaded',
            });

            let headers = await page.$$('article header h2 a');
            let descriptions = await page.$$('article p');


            let headersPais:string[] = []
            let descriptionsPais:string[] = []

            for (let i = 0; i < 5; i++) {
                headersPais.push(await headers[i].evaluate((node: { innerText: any; }) => node.innerText));
                descriptionsPais.push(await descriptions[i].evaluate((node: { innerText: any; }) => node.innerText))
            }


            await page.close();
            await browser.close();
            return resolve({
                headers: headersPais,
                descriptions: descriptionsPais,
                dataSource:  dataSourceEnum.ELPAIS
            });


        } catch (e) {
            return reject(e);
        }


    })
}

function feedsElMundo():Promise<feedNews> {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({
                headless: false,
                ignoreHTTPSErrors: true,
            })
            let page = await browser.newPage();
            await page.goto('https://www.elmundo.es/', {
                waitUntil: 'domcontentloaded',
            });

            let headersMundo:string[] = []
            let linksMundo:string[] = []

            let headers = await page.$$('article header h2');
            let links = await page.$$('article header a');

            for (let i = 0; i < 5; i++) {
                headersMundo.push(await headers[i].evaluate((node: { innerText: any; }) => node.innerText))
                linksMundo.push(await links[i].evaluate((node: { getAttribute: (arg0: string) => any; }) => node.getAttribute("href")))
            }

            await page.close();
            await browser.close();
            return resolve({
                headers: headersMundo,
                descriptions: headersMundo,
                dataSource: dataSourceEnum.ELNUNDO
            });

        } catch (e) {
            return reject(e);
        }

    })
}

export { feedsElPais, feedsElMundo };
