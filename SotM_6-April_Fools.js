/*
 * Send print jobs to random printer
 *
 * Read more at http://www.selectec.com/script-of-the-month-6-april-fools-2016/
 */

function printJobHook( inputs, actions ) {

  if (!inputs.job.isAnalysisComplete) {
    // No job details yet so return.
    return;
  }

  // Array of printers
  var printers = ['science_room','maths_room','english_room'];
  actions.job.redirect(printers[ Math.floor( Math.random() * printers.length ) ], {recalculateCost: true});
}
