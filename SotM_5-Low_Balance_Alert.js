/*
 * Email user when balance is low
 *
 * Read more at https://selectec.com/script-of-the-month-5-low-balance-alert/
 */

function printJobHook(inputs, actions) {

  var LOW = 1;
  var SUBJECT = "Your balance is low";
  var BODY = "Your PaperCut Balance is getting low, Don't forget to top up soon or you won't be able to print";

  if (!inputs.job.isAnalysisComplete) {
    return;
  }

  if ( inputs.user.balance - inputs.job.cost <= LOW ) {
    actions.utils.sendEmail(inputs.user.email, SUBJECT, BODY);
  }
}
