/*
 * Only allow printing when using certain file extensions
 *
 * Read more at http://www.selectec.com/script-of-the-month-4-color-only-extensions
 */

function printJobHook(inputs, actions) {

 if (!inputs.job.isAnalysisComplete) {
   return;
 }

 var fileExtensions = [ ".xls", ".ppt", ".doc", ".xlsx", ".pptx", ".docx" ];

 if (inputs.job.isColor){
   for (i = 0; i < fileExtensions.length; i++) {
     if (inputs.job.documentName.indexOf( fileExtensions[i] ) !== -1 ) {
       return;
     }
   }
   actions.client.sendMessage( "Colour jobs must be .xls(x), .ppt(x), .doc(x). Cancelling Job!" );
   actions.job.cancel();
 }
}
