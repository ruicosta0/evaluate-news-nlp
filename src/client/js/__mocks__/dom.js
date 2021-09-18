import { JSDOM } from "jsdom";
const path = require('path');
//create path to index.html
const htmlPath = path.join(__dirname, '..', '..', 'views', 'index.html');
const fs = require("fs");
const html = fs.readFileSync(htmlPath);
//pass index.html file and pass contents to JSDOM
const dom =  new JSDOM(html);
global.document = dom.window.document;
global.window = dom.window;

