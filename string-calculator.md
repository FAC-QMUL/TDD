# String Calculator
### Before you start
* Try not to read ahead.
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs. There is no need to test for invalid inputs for this kata.
### Method  

1. Create a simple String calculator method Add(string numbers).  
     * The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example Add(“”) = 0 or Add(“1”) = 1 or Add(“1,2”) = 3
     * Start with the simplest test case of an empty string and move to 1 and 2 numbers.
        * Test for empty string
        * Test for one number in the string (i.e. "1")
        * Test another number in the string (i.e. "2", then test for "5")
        * Refactor your code so that you can put any number and then it will return it. (i.e. "1068")
        * Test for two numbers in the string (i.e. "1,2")
        * Test another number in the string (i.e. "2,3", then test for "15,9")
        * Refactor your code so that you can put any two numbers and then it will return it. (i.e. "1068, 9843")
     * Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
     * Remember to refactor after each passing test.
2. Allow the Add method to handle an unknown amount of numbers.
     * test for ("1,2,4,7,8,654" to return 676)
3. Allow the Add method to handle new lines between numbers (instead of commas).
     * The following input is ok: “1\n2,3” (will equal 6).
     * The following input is NOT ok: “1,\n” (not need to prove it - just clarifying).
     * Support different delimiters.
     * To change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return 3 where the default delimiter is ‘;’ .
     * Choosing a delimiter is optional. All existing scenarios should still be supported.
4. Calling Add with a negative number should return “negatives not allowed” + the negative that was passed. If there are multiple negatives, show all of them in the message.
5. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2.
6. Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[???]\n1???2???3” should return 6.
7. Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[£][%]\n1£2%3” should return 6.
8. Make sure you can also handle multiple delimiters with length longer than one character.  
