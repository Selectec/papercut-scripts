/*
 * Select Release Account
 *
 * Read more at https://www.selectec.com/papercut-print-script-month-13-select-release-account/
 */

function printJobHook(inputs, actions) {

  // Users that can be selected from the dropdown
  var USERS = ["none", "bwayne", "tstark", "pparker", "ballen", "oqueen", "ckent"];

  // Group to apply script to
  var GROUP = "students";

  // Message to show in the popup
  var MESSAGE = "Please select an account below to allow that user to release your job.";

  // Popup Title
  var TITLE = "Select an account";

  // Popup options
  var OPTIONS = {'dialogTitle': TITLE, 'defaultChoice': 'none', 'fieldLabel': 'Accounts', 'hideJobDetails': true};

  // As always we will wait for analysis just to make sure there are no problems
  if (!inputs.job.isAnalysisComplete) { return; }

  // If user is not in the students group exit the script
  if (!inputs.user.isInGroup(GROUP)) { return; }

  // Get the response from the prompt and set the default value to none
  var response = actions.client.promptForChoice(MESSAGE, USERS, OPTIONS);

  // If the selection is not none
  if (response != 'none') {
    // Change the user
    actions.job.changeUser(response);
  }

  // We don't need to do anything here
}
