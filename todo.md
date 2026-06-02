html: create a heading a button for the roll and a p element with the bank balance keep it empty [x]
css: basic styling only dark background light text link to html[x]
js: grab the dom elements the button and the p element and link to html[x]
git: create a repo in the terminal and push it to github [x]

open treasure button
create a variable called bag
create a variable called bank
write a function rollGold that gives the player a random ammount of gold i will use math.random up to 50 i will add + 1 so it never is zero
write a function rollDragon first i create a global variable thats empty named lost in the function i set lost to true and return the value important for later
write a function called rollTreasure here i pass the other two functions as variables (not sure how to yet or if it even makes sense) first in the function i make another math.random from zero to 4 here i use if and else if number is 0 call rollDragon else RollGold
i will use console.log to test the functions dom manipulation comes later

runrender function:

IF user rolls gold and not dragon add one to the run and display it to the html DONE and works
IF user rolls dragon run gets reset to 0 DONE and works
on the dragon part save the best run and only change it if there is a higher run
