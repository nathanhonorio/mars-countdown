function countDownUpdate() {
  var countDownDate = new Date("Jan 27, 2022 19:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var remainingTime = countDownDate - now;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    const numberDays = (document.getElementById("days").innerHTML = days);
    const numberHours = (document.getElementById("hours").innerHTML = hours);
    const numberMinutes = (document.getElementById("minutes").innerHTML = minutes);
    const numberSeconds = (document.getElementById("seconds").innerHTML = seconds);
  }, 1000);
}
countDownUpdate();
