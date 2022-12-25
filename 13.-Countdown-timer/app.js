const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


// let futureDate = new Date(2023, 0, 24, 15, 30, 0);
//In the previous line, the Date function is being requested to show a specific date
//year:2022, month:4. dia:24, hora:11, minutes:30, seconds: 0
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let Mont = futureDate.getMonth();
const date = futureDate.getDate();
const weekday = futureDate.getDay(); //return the day number

// console.log(hours);
// giveaway.textContent = `giveaway ends on ${futureDate}`
giveaway.textContent = `giveaway ends on ${weekdays[weekday]},${date} ${months[Mont]} ${year} ${hours}:${minutes}am `;

//In the previous line, the giveaway text is modified dynamically by the introducing year
//this year is stored in the variable year

// get time in milliseconds

const futureTime = futureDate.getTime();
// console.log(futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime(); //get current date
  //get time returns the difference in milliseconds from 1/1/1970 to the present

  const t = futureTime - today; // get the difference in ms between futureTime and today
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60min
  // 1d = 24h

  // value 1 day in ms

  const oneDay = 24 * 60 * 60 * 1000; //one day in ms
  const oneHour = 60 * 60 * 1000; //on day time in ms
  const oneMinute = 60 * 1000; //one minute in ms
  const oneSecond = 1000;

  // calculate all values

  let days = t / oneDay; //get remaining number days
  days = Math.floor(days); //converting in a integer
  // console.log("Remaining days " + days);

  let hours = (t % oneDay) / oneHour; //get remaining number of hours
  hours = Math.floor(hours);
  // console.log("Remaining hours " + hours);

  let minutes = (t % oneHour) / oneMinute; //get remaining number of minutes
  minutes = Math.floor(minutes);
  // console.log("remaining minutes " + minutes);

  let seconds = (t % oneMinute) / oneSecond; //get remaining number of seconds
  seconds = Math.floor(seconds);
  // console.log("remaining minutes " + seconds);

  // set values array
  const values = [days, hours, minutes, seconds];

  const format = (item) => {
    if (item < 10) return (item = `0${item}`);
    else return item;
  };

  items.forEach((item, index) => {
    // console.log("index: "+index);
    // console.log("item "+item);
    item.innerHTML = format(values[index]);
  });
  
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
  }
};
// countdown
let countdown = setInterval(() => {
  getRemainingTime();
}, 1000);



