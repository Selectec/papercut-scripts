/*
 * Hold Web Print jobs for longer over the weekend
 *
 * Read more at https://www.selectec.com/papercut-print-script-month-11-setting-queue-timeout-webprint/
 */

function printJobHook(inputs, actions) {
  var today = new Date();

  // If job is from Web Print
  if (inputs.job.jobSourceName == "WEB_PRINT") {
    // If today is Saturday or Sunday
    if (today.getDay() == 6 || today.getDay() == 0) {
      // Set hold timeout to 2880 minutes
      actions.job.setHoldReleaseTimeout(2880);
    }
  }
}
