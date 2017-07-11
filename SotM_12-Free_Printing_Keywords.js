/*
 * Keyword(s) = Free Printing
 *
 * Read more at https://www.selectec.com/papercut-print-script-month-12-keywords-free-printing/
 */

function printJobHook( inputs, actions ) {
  // Comment to apply to job
  var JOB_COMMENT = "Free Print Job Roald Dahl 100th Anniversary";

  // Array of Book Names
  var BOOK_NAMES = [
    "The Gremlins",
    "Over To You",
    "Some Time Never",
    "Someone Like You",
    "Kiss Kiss",
    "James and the Giant Peach",
    "Charlie and the Chocolate Factory",
    "The Magic Finger",
    "Fantastic Mr Fox",
    "Charlie and the Great Glass Elevator",
    "Danny, the Champion of the World",
    "The Wonderful Story of Henry Sugar and Six More",
    "The Enormous Crocodile",
    "My Uncle Oswald",
    "The Twits",
    "George's Marvellous Medicine",
    "Revolting Rhymes",
    "The BFG",
    "Dirty Beasts",
    "The Witches",
    "Roald Dahl’s Book of Ghost Stories",
    "Boy: Tales of Childhood",
    "The Giraffe and the Pelly and Me",
    "Two Fables",
    "Going Solo",
    "Matilda",
    "Rhyme Stew",
    "Ah, Sweet Mystery of Life",
    "Esio Trot",
    "The Vicar of Nibbleswicke",
    "The Minpins",
    "Roald Dahl's Guide to Railway Safety",
    "My Year"
  ];

  if (!inputs.job.isAnalysisComplete) {
    // No job details yet so return.
    return;
  }

  // If jobname matches any of the book names
  if (matchesAny(inputs.job.documentName.toLowerCase(), BOOK_NAMES)) {
    // Add comment to job
    actions.job.addComment(JOB_COMMENT);
    // Set the cost to 0
    actions.job.setCost(0);
  }
}

// Function borrowed from PaperCut Recipe (Confirm printing emails in color (from Outlook))
function matchesAny(str, matchStrs, actions) {
  if (str == null || matchStrs == null) {
    return false;
  }

  for (var i in matchStrs) {
    if (str.match(matchStrs[i]).toLowerCase()) {
      return true;
    }
  }

  return false;
}
