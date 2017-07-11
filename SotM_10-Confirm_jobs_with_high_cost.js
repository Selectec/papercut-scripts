/*
 * Ask users to confirm the print job if over a certain cost
 *
 * Read more at https://www.selectec.com/script-of-the-month-10-confirm-jobs-high-cost/
 */

function printJobHook(inputs,actions) {
  // What is our limit for alerts?
  var COST = 1.0;
  // This is the message we will show the users
  var MESSAGE = "This job costs over £" + COST + " are you sure you want to print it?";

  if (!inputs.job.isAnalysisComplete) {
    return;
  }

  // Check the job cost
  if (inputs.job.cost >= COST) {
    // Show the prompt and set the response to the response variable
    var response = actions.client.promptPrintCancel(MESSAGE);
    // If user clicked Cancel or there was a timeout
    if (response == "CANCEL" || response == "TIMEOUT") {
      // Cancel the job and exit the script
      actions.job.cancel();
      return;
    }
    // User pressed print so we will let the job go
  }

}
