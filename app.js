let countryName = document.querySelector("#country-name");
let time = document.querySelector(".time");
let select = document.querySelector("#selected");
let alarm = document.querySelector("#alarm");

for (const timeZone of Intl.supportedValuesOf("timeZone")) {
  let options = document.createElement("option");
  options.value = timeZone;
  select.appendChild(options);
}

countryName.addEventListener("change", (e) => {
  // Function to update time and check for the alarm condition
  const updateTimeAndCheckAlarm = () => {
    var d = new Date();
    time.innerHTML = d.toLocaleString("en-US", {
      timeZone: `${e.target.value}`,
    });

    // Check for the alarm condition
    let alarmHour = alarm.value.split(":")[0];
    let alarmMin = alarm.value.split(":")[1];
    if (d.getHours() == alarmHour && d.getMinutes() == alarmMin) {
      console.log("Alarm is ringing");
      let audioURL = "../assets/alarm-tune.mp3";
      let audio = new Audio(audioURL);
      audio.play()
    }
  };

  // Call the function initially to update the time when the countryName changes
  updateTimeAndCheckAlarm();

  // Set up interval to update time and check alarm every second
  setInterval(updateTimeAndCheckAlarm, 1000);
});
