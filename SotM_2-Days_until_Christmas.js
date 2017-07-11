/*
 * Days until Christmas
 *
 * Show the users how many days there are until Christmas
 *
 * Read more at http://www.selectec.com/script-of-the-month-2-days-until-christmas
 */

function printJobHook( inputs, actions ) {
   if ( !inputs.job.isAnalysisComplete ) {
       // No job details yet so return.
       return;
   }

   var objDate = new Date(); // New date object
   xmas = Date.parse( "Dec 25, " + objDate.getFullYear() ); // This is the date we want
   today = Date.parse( objDate ); // What is todays date again?
   daysToGo = Math.round( ( xmas - today ) / ( 1000 * 60 * 60 * 24 ) ); // Little bit of math

   if ( daysToGo == 0 ) {
       // It must be xmas today
       actions.client.sendMessage( "Merry Christmas!" );
       return;
   }

   if ( daysToGo < 0 ) {
       // Xmas has gone
       actions.client.sendMessage( "We hope you had a good Christmas" );
       return;
   }

   if ( daysToGo > 0 ) {
       // It is almost xmas time
       actions.client.sendMessage( "Christmas is only " + daysToGo + " days away" );
       return;
   }
}
