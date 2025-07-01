const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 2000);

//   const date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   // Convert to 12-hour format
//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   // Add leading zeros
//   hours = hours < 10 ? '0' + hours : hours;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
//   clock.innerHTML = timeString;