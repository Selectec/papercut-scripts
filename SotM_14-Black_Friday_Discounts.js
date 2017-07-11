/*
 * Black Friday
 *
 * Read more at https://www.selectec.com/papercut-print-script-of-the-month-14-black-friday/
 */

function printJobHook(inputs, actions) {

  // Make sure analysis is complete
  if (!inputs.job.isAnalysisComplete) {return;}

  // Normal Discount Amount - default 5%
  var DISCOUNT_PERCENT = 0.95;
  // Discount Amount for "Flash sales" - default 10%
  var FLASH_SALE_PERCENT = 0.90;
  // Comment to show in job log
  var JOB_COMMENT = "Black Friday Discount";
  // Message to show the users for normal sale
  var SALE_MESSAGE = "Black Friday Deal - This print job will only cost you '" + inputs.job.cost * DISCOUNT_PERCENT + "'";
  // Message to show the users when the flash sale is on
  var FLASH_SALE_MESSAGE = "Black Friday Flash Sale - This print job will only cost you '" + inputs.job.cost * FLASH_SALE_PERCENT + "'";
  // Hour to start flash sale - Default 12pm
  var FLASH_START = 16;
  // Hour to end flash sale - Default 1pm
  var FLASH_END = 17;
  // Set flash sale to false
  var FLASH_SALE = false;

  // Work out if it is time for a flash sale
  if (inputs.job.date.getHours() >= FLASH_START && inputs.job.date.getHours() < FLASH_END) {
    // Enable the flash sale
    FLASH_SALE = true;
  }

  // If flash sale time
  if (FLASH_SALE) {
    // Display the Flash Sale Message
    actions.client.promptOK(FLASH_SALE_MESSAGE,{'hideJobDetails': true});
    // Set the new cost of the job
    actions.job.setCost(inputs.job.cost * FLASH_SALE_PERCENT);
  } else {
    // Display normal deal Message
    actions.client.promptOK(SALE_MESSAGE,{'hideJobDetails': true});
    // Set the new cost of the job
    actions.job.setCost(inputs.job.cost * DISCOUNT_PERCENT);
  }

  // Add comment to job so we remember why there was as discount
  actions.job.addComment(JOB_COMMENT);

}
