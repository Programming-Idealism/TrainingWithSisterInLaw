// Create a function that takes minute as parameter and converts it to seconds. Perform 2 test cases with different arguments to ensure the code is working. Print the results to the console.
// בצעי פונקציה שלוקחת פרמטר של דקות וממירה אותן לשניות. בנוסף בצעי שתי בדיקות עם ארגיומנטים שונים כדי לוודאות שהקוד רץ ותקין והדפיסי את התוצאות לקונסולה

minToSec(15)
// minToSec(30)
// minToSec(122)
function minToSec(minute) {
  minute *= 60
  var inWords =
    'The conversion ratio from minutes to seconds that you have inserted is ' +
    minute +
    ' seconds'
  console.log(inWords)
  return inWords
}
