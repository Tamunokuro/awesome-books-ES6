import showDate from './modules/time.js';
import addBook from './modules/add.js';

import booklist from './modules/bookList.js';
import contact from './modules/contact.js';
import AwesomeBook from './modules/books.js'; // eslint-disable-line no-unused-vars

setInterval(showDate, 1000);
addBook();
booklist();
contact();
