/* eslint-disable */
import { DateTime } from './luxon.js';

const dateDisplay = document.getElementById('date');

export default function showDate() {
  const dt = DateTime.now();
  dateDisplay.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
}