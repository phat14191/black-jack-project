# BlackJack Game Card JavaScript
This is a card game also called twenty-one using language JavaScript. The site also demonstrates the use of HTML, CSS, jQuery, Bootstrap, Prototype Object and logic programming for JavaScript.

## Screenshots

## <img src="https://s3-us-west-1.amazonaws.com/phat14191/black-jack/black-jack1.png" width="600px"/>
## <img src="https://s3-us-west-1.amazonaws.com/phat14191/black-jack/black-jack2.png" width="600px"/>
## <img src="https://s3-us-west-1.amazonaws.com/phat14191/black-jack/black-jack3.png" width="600px"/>

## Demo

For the live version of this game card, check out <https://phat14191.github.io/blackJack-javaScript/>

## Setup instructions

1) git clone https://github.com/phat14191/blackJack-javaScript.git
2) cd blackJack-javaScript
3) click on file: index.html

## Documentation

#### Functions

The functions used to run the BlackJack App are located in [js/scripts.js](https://github.com/phat14191/blackJack-javaScript/blob/master/js/scripts.js) and are explained more fully below. 

##### init()

This function create hand array in Player objects respectively for each player.

##### count()

This function count scores, count special cases cards, remove Ace cards if length >= 3, count total scores.

##### deal()

This function random choose first 4 cards from the card deck and return value of card image sources.

##### hit()

This function hit with n run from 5 to 10. 

##### newGame()

This function resets game environment vars (e.g., the user's score, question history, etc.).  

##### computer_play()

This function after player done, this function run to hit more card for dealer if necessary.

##### auto_run()

This function is integrated in hit 3 and stand function and showing images of dealer's cards at the end.

##### winner()

This function decides who is the winner based on their scores

