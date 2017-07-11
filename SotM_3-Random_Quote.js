/*
 * Random Quote
 *
 * Show a random quote when a user prints
 *
 * Read more at http://www.selectec.com/script-of-the-month-3-random-quote/
 */

 function printJobHook( inputs, actions ) {

     if (!inputs.job.isAnalysisComplete) {
         // No job details yet so return.
         return;
     }

     // Array of quotes
     var quotes = [
         "Things work out best for those who make the best of how things work out. ~John Wooden",
         "If you are not willing to risk the usual you will have to settle for the ordinary. ~Jim Rohn",
         "All our dreams can come true if we have the courage to pursue them. ~Walt Disney",
         "Success is walking from failure to failure with no loss of enthusiasm. ~Winston Churchill",
         "Try not to become a person of success, but rather try to become a person of value. ~Albert Einstein",
         "Great minds discuss ideas; average minds discuss events; small minds discuss people. ~Eleanor Roosevelt",
         "I have not failed. I've just found 10,000 ways that won't work. ~Thomas A. Edison",
         "The whole secret of a successful life is to find out what is one's destiny to do, and then do it. ~Henry Ford",
         "What seems to us as bitter trials are often blessings in disguise.~ Oscar Wilde",
         "The distance between insanity and genius is measured only by success. ~Bruce Feirstein",
         "If you can't explain it simply, you don't understand it well enough. ~Albert Einstein",
         "Innovation distinguishes between a leader and a follower. ~Steve Jobs",
         "The starting point of all achievement is desire. ~Napolean Hill",
         "Courage is resistance to fear, mastery of fear - not absense of fear. ~Mark Twain",
         "Only put off until tomorrow what you are willing to die having left undone. ~Pablo Picasso",
         "You must expect great things of yourself before you can do them. ~Michael Jordan",
         "Failure is the condiment that gives success its flavor. ~Truman Capote",
         "Life is 10% what happens to me and 90% of how I react to it. ~Charles Swindoll",
         "Believe you can and you’re halfway there. ~Theodore Roosevelt",
         "Do or do not. There is no try. ~Yoda",
         "The only way to do great work is to love what you do. ~Steve Jobs",
         "We can’t help everyone, but everyone can help someone. ~Ronald Reagan"
     ];

     // Send message to the PC Client with a random quote from the array
     actions.client.sendMessage( quotes[ Math.floor( Math.random() * quotes.length ) ] );

 }
