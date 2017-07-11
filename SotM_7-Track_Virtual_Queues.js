/*
 * Track sheets printed on virtual queue
 *
 * Read more at https://selectec.com/script-of-the-month-7-count-virtual-queue-sheets/
 */

function printJobHook(inputs, actions) {

 if (!inputs.job.isAnalysisComplete) {
   // No job details yet so return.
   return;
 }

  // Show current sheets
  actions.client.promptOK('So far "' + inputs.utils.getNumberProperty('green-queue') + '" pages have been printed using this queue');

  // Increment green-queue by total sheets in job
  actions.utils.onCompletionIncrementNumberProperty('green-queue', inputs.job.totalSheets)
}
