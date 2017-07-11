/*
 * Allow a group of users to disable Archiving
 *
 * Read more at https://selectec.com/script-of-the-month-8-disable-print-archiving/
 */
 
function printJobHook( inputs, actions ) {

    var GROUP = "HR";
    var MESSAGE = "Do you want to disable archiving for this job?";
    var COMMENT = "This job was considered sensitive and archiving was disabled";

    if (!inputs.job.isAnalysisComplete) {
        return;
    }

    if (inputs.user.isInGroup(GROUP)) {
        var RESP = actions.client.promptYesNo( MESSAGE );

        if (RESP == "TIMEOUT") {
            actions.job.cancel();
            return;
        }

        if (RESP == "YES"){
            actions.job.disableArchiving();
            actions.job.addComment(COMMENT);
            return;
        }
    }
}
