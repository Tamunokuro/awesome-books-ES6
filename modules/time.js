/* eslint. disabled */
import { DateTime } from './luxon.js';

const dateDisplay = document.getElementById('date');

const showDate = () => {
  const dt = DateTime.now();
  dateDisplay.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
};

export default showDate;