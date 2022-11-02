import { DateTime } from '../node_modules/luxon/src/luxon.js';

const showDate = () => {
  const dateDisplay = document.getElementById('date');
  const dt = DateTime.now();
  dateDisplay.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
};

export default showDate;