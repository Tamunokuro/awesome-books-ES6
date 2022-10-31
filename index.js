// const { min } = require("lodash");
/* eslint-disable */
import showDate from './modules/time.js';
import addBook from './modules/add.js';
import booklist from './modules/bookList.js';
import contact from './modules/contact.js';

setInterval(showDate, 1000);
addBook();
booklist();
contact();
