# 1. What is TDD?

`Test Driven Development` (`TDD`) is a software development process that relies on the repetition of a very short development cycle.

## But... Why do we need to test our code?

We need `well-tested`, `bug-free` software. Also, we need to increase awareness of testing, as well as writing, code. Bugs accumulate, and, if they are not found as soon as possible, they increase the costs of application maintenance.

![1-why_tdd_is_still_alive_and_still_worth_using-02](https://cloud.githubusercontent.com/assets/2573931/16176908/744afa0a-3614-11e6-92a5-8db6d99034fc.png)

We do not want to deliver untested software.
Imagine building a house without doing planning. How is the soil, what materials do we need to use to make it durable, timelines, costs...

![](https://i.ytimg.com/vi/PV81o99Nco4/hqdefault.jpg)

To make sure our house is safe, durable and without extra costs, we need to do some planning first.

![](http://cdn.pixtea.com/big/www.oldblueprints.com/uploads/4/3/9/5/43955967/s244404381874623202_p88_i1_w1024.jpeg)

By doing our tests before hand we will developed a well tested software, durable, without extra costs, easy to maintain and bug free.

![inclusions1](https://cloud.githubusercontent.com/assets/2573931/16176958/5ecf6cb8-3616-11e6-909b-b09022a19783.jpg)


### Test-driven development cycle
![](https://upload.wikimedia.org/wikipedia/commons/0/0b/TDD_Global_Lifecycle.png)

#### 1. Add a Test
Write a test that defines a function or improvements of a function.

#### 2. Run all the tests and see if the new test fails
This validates that the test harness is working correctly, that the new test does not mistakenly pass without requiring any new code, and that the required feature does not already exist.

This step also tests the test itself, in the negative: it rules out the possibility that the new test always passes, and therefore is worthless.

The new test should also fail for the expected reason.

#### 3. Write the code
Write some code that causes the test to pass.

#### 4. Run tests
If all test cases now pass and does not break or degrade any existing features.

If they do not, the new code must be adjusted until they do.

#### 5. Refactor
The growing code base must be cleaned up regularly during test-driven development.

New code can be moved from where it was convenient for passing a test to where it more logically belongs.

Duplication must be removed. Object, class, module, variable and method names should clearly represent their current purpose and use, as extra functionality is added.

#### Repeat
Starting with another new test, the cycle is then repeated to push forward the functionality. The size of the steps should always be small.

If new code does not rapidly satisfy a new test, or other tests fail unexpectedly, the programmer should undo or revert in preference to excessive debugging.

## Further Learning
+ [Test-driven development (Wikipedia)](https://en.wikipedia.org/wiki/Test-driven_development)

+ [The Newbie's Guide to Test-Driven Development](http://code.tutsplus.com/tutorials/the-newbies-guide-to-test-driven-development--net-13835)


## Slides
You can find the slides [here](http://www.slideshare.net/MireiaSangalo/test-driven-development-63221704).

# Next...
## 2. Introduction to Jasmine
Well done! Now we have learned what is TDD and why you should **always test your code**. So let's do some tests! Click [here](https://github.com/MyPitit/TDD/tree/master/Jasmine) to get started :bowtie:
