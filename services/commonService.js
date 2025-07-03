const puppeteer = require('puppeteer')
const fs = require('fs')

async function printPDF(contentToPrint, fileName) {
    return new Promise(async(resolve, reject) => {
        const browser = await puppeteer.launch({
            headless: true,
            // executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' // change it accordingly your system
            executablePath: '/usr/bin/google-chrome' // change it accordingly your system
        });
        const page = await browser.newPage();
        await page.setContent(contentToPrint);
        const pdf = await page.pdf({ path: 'pdf/' + fileName, format: 'A4' });
        console.log("PDF success." + fileName);
        // console.log(pdf.toString('base64'));
        await browser.close();
        resolve(pdf)
    });
}

async function getTemplateData(templateNameWithPath) {

    return new Promise((resolve, reject) => {
        fs.readFile(templateNameWithPath, 'utf8', (err, file) => {
            if (err) reject(err)
            resolve(file)
        });
    });
}

async function writeFile(fileContent, path, fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path + fileName, fileContent, 'utf8', (err, file) => {
            if (err) reject(err)
            resolve(file)
        });
    });
}


async function getJsonData(jsonFileToProcess) {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonFileToProcess, 'utf8', (err, file) => {
            if (err) reject(err)
            resolve(file)
        });
    });
}

async function replaceAll(string, find, replace) {

    if (!!string) {
        if (!replace)
            return string.replace(new RegExp(escapeRegExp(find), 'g'), "");
        else
            return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    } else {
        return "";
    }
};

module.exports = {
    printPDF,
    getTemplateData,
    writeFile,
    getJsonData,
    printPDF,
    replaceAll
}