/*
 * Halloween User Trick
 *
 * Cancel or charge double for some jobs from a certain user
 *
 * Read more at https://www.selectec.com/script-of-the-month-1-halloween-trick/
 */

function printJobHook(inputs, actions) {

  if ( !inputs.job.isAnalysisComplete ) {
    // No job details yet so return.
    return;
  }

  // The user we want to mess with
  var username = "Ross";
  // Get the seconds from the time the job was sent
  var seconds = inputs.job.date.getSeconds();

  if ( inputs.job.username == username ) {
    // If 11 or 22 seconds
    if ( seconds == 11 || seconds == 22 ) {
      // Cancel the job and let the user know
      actions.job.cancel();
      actions.client.sendMessage( "Sorry the job has been cancelled" )
    // Else If seconds is 33 or 44
    } else if ( seconds == 33 || seconds == 44 ) {
      // Double the cost of his job and a comment to the job
      actions.job.setCost( inputs.job.cost * 2 );
      actions.job.addComment( "Cost doubled for Halloweeen trick" )
    } else {
      // Don't do anything
    }
  }
}
