const readline = require("readline");

function isCliAlertsInstalled() {
  try {
    require.resolve("cli-alerts");
    return true;
  } catch (error) {
    return false;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const colorText = (text, colornb) => `\x1b[${colornb}m${text}\x1b[0m`;

rl.question(
  colorText(
    "Hey Humberto, please set up cli-alerts by typing: 'npm i cli-alerts' and then restart the app! Once ok, please press 'Enter'.",
    36
  ),
  () => {
    if (isCliAlertsInstalled()) {
      const alert = require("cli-alerts");
      alert({ type: `success`, msg: `cli-alerts is installed` });
      rl.close();
    } else {
      console.log(
        colorText(
          'Please install cli-alerts by typing " npm i cli-alerts"',
          31
        ),
        rl.close()
      );
    }
  }
);
