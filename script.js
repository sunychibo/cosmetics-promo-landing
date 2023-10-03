function reloadPage(event) {
  event.stopPropagation();
  window.location.reload(true);
}

function redirect(event) {
  event.preventDefault();
  event.stopPropagation();
  window.location.href = "https://www.google.com/";
}

function closeBanner(event) {
  event.stopPropagation();
  var banner = document.getElementsByClassName("banner");
  banner[0].style.display = 'none';
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function getDate() {

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('.');
  }

  return formatDate(new Date());
}

function pasteDate(event) {
  var date = getDate();
  if (date) {
    var dateElement = document.getElementsByClassName("user-action__date");
    dateElement[0].textContent = date;
    console.log(date);
    console.log(event);
  }
}

function generateCounter(event) {
  function getCurrentTimeInMS() {
    return new Date().getTime();
  }

  var countDownDate = getCurrentTimeInMS() + 10800000;
  var x = setInterval(function () {
    var distance = countDownDate - getCurrentTimeInMS();

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var countdownElement = document.getElementsByClassName("user-action__counter");
    countdownElement[0].textContent = hours + ":" + padTo2Digits(minutes) + ":" + padTo2Digits(seconds);

    if (distance < 0) {
      clearInterval(x);
      countdownElement[0].textContent = "00:00:00";
    }
  }, 1000);
}

function generateData(event) {
  pasteDate(event);
  generateCounter(event);
}