# Calculator Project

For this calculator project, I want to emulate a pink calculator:
<img src="images\pink-calculator2.jpg" height="500"/>

### Final Product:

<img src="images\application.png" height="500" />

## CRITERIA

Using HTML & CSS:

- Create a calculator to be rendered to the html page
- Number keys 0-9
- Operator keys ( + - / x = )
- Display of current calculation in the calculator display
- Using JavaScript
- Does not need to support order of operations
- Handle decimals

Should NOT use eval() or Function() constructor

## TO ACHIEVE THE DESIRED OUTCOME:

After establishing HTML and CSS, each individual button will need to be scripted.
The display needs to show zero as default and reset to zero when triggered.
More advanced calculator functions such as 1/x and the memory storage may be implemented at a later time - first it is important to make the basic calculator functions - functional.

## THE PROCESS

### Bugs & Fixes

As I wrote my code, I found that I relied on heavily interdependent code which consequently gave way to various bugs. I had to refactor my code so that it was more simplified, less interdependent to create independent 'cogs' which simultaneously could fit and work together to produce the desired outcome. I.E. Using less global scope variables, making functions which interacted with the DOM and did not depend on variables specific to the project (this enables reusability of those functions for other project, if so desired).
A significant problem I had was working out the logic for chaining operations and making sure that the equals button actually reset certain values. (Initially, equals did not reset the stored value which lead to a bug where the calculator would produce NaN because it still had the previous stored value.)

Added edge cases and optimised certain functions such as the reset display function which would reset the display to 0. However, this caused issues as upon inputting another number, the 0 would still be there which caused errors in calculations. So I simply set it to an empty string instead.

## Future Additions

- User should not be able to input more than one zero at the beginning of the number (0000)
- Creating the functionality for the memory buttons and the V button.
- User can input infinite number of buttons, need to add edge case to control how many numbers can be inputted. As a temporary visual fix, overflow is set to hidden so that the numbers won't flow outside the calculator.
