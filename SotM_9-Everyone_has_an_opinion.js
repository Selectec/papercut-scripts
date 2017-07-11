/*
 * Ask users to vote on important things like staying in the EU
 *
 * Read more at https://www.selectec.com/script-of-the-month-9-everyone-has-an-opinion/
 */

function printJobHook(inputs,actions) {

  // Prompt Title
  var TITLE = "Referendum on the United Kingdom's membership of the European Union";
  // What question are we going to ask?
  var QUESTION = "Should the United Kingdom remain a member of the European Union or leave the European Union?";
  // Array of possible choices
  var CHOICES = ["Remain", "Leave", "Undecided"];

  // Dictionary containing Prompt options
  var OPTIONS = {
    'defaultChoice' : 'Undecided',
    'hideJobDetails' : true,
    'dialogDesc' : QUESTION,
    'dialogTitle' : TITLE
  }

  // Analysis has not completed return
  if (!inputs.job.isAnalysisComplete) {
    return;
  }


  // Show the prommpt and set the response to vote
  var vote = actions.client.promptForChoice('', CHOICES, OPTIONS);

  // We are not bothered by Timeouts or those who don't want to vote
  if (vote == "TIMEOUT" || vote == "CANCEL") {
    return;
  }

  // Loop choices
  for (i = 0; i < CHOICES.length; i++) {
    // If vote = choice
    if (vote == CHOICES[i]) {
      // increase vote.[users-choice] by 1
      actions.utils.onCompletionIncrementNumberProperty('vote.' + vote, 1);
    }
  }
}
