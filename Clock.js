function clock() {
  let d = new Date();
  let month_num = d.getMonth();
  let day = d.getDate();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  let month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  if (day <= 9) day = "0" + day;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  let clock_data = `${day} ${month[month_num]} ${d.getFullYear()} г.`;
  let clock_time = `${hours}:${minutes}:${seconds}`;

  document.querySelector(".doc_data").innerHTML = clock_data;
  document.querySelector(".doc_time").innerHTML = clock_time;
  setTimeout(()=>clock(), 1000);
}
