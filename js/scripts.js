$(document).ready(function () {
    $("#start").click(function () {

        //PROTOTYPE OBJECT
        const Player = {

            init: function () {
                this.hand = [];
            },
            total: 0,

            count: function () {
                const card_letters = [];
                let counting = 0;
                //slice first 2 letters in the card
                this.hand.forEach(function (card) {
                    const card_letter = card.slice(0, 2);
                    card_letters.push(card_letter);
                });

                //counting for a special cases where having two Ace cards
                if (card_letters.length === 2 && card_letters[0] === "A " && card_letters[1] === "A ") {
                    counting = 21;
                    card_letters[0] = card_letters[1] = "0 ";
                };

                //convert jack, queen and king cards into text of '10'
                for (let i = 0; i <= card_letters.length - 1; i++) {
                    if ((card_letters.length === 2) && (card_letters[i] === "A ")) {
                        card_letters[i] = "11";
                    }
                    if (card_letters[i] === "Q " || card_letters[i] === "J " || card_letters[i] === "K ") {
                        card_letters[i] = "10";
                    };
                };

                //remove Ace cards into a separate array
                const ace = [];
                if (card_letters.length >= 3) {
                    for (let i = 0; i <= card_letters.length; i++) {
                        if (card_letters[i] === "A ") {
                            card_letters[i] = "0";
                            ace.push("A ");
                        }
                    };
                };

                // count how many Ace cards in a hand
                const ace_count = ace.length;

                //count total points in a hand
                card_letters.forEach(function (card) {
                    counting = counting + parseInt(card);
                });

                if (card_letters.length >= 2 && counting >= 8 && counting <= 10 && ace_count >= 1) {
                    counting = counting + 11;
                } else {
                    counting = counting + ace_count;
                };

                //assign the counting to the constiable of total
                this.total = counting;
                counting = 0;
            } //end the function count()
        }; //end the object Player

        //OBJECT TO DEAL WITH THE CARD DECK
        const BlackJack = {

            //function deal
            cards: ["", "A spade", "2 spade", "3 spade", "4 spade", "5 spade", "6 spade", "7 spade", "8 spade", "9 spade", "10 spade", "J spade", "Q spade", "K spade", "A club", "2 club", "3 club", "4 club", "5 club", "6 club", "7 club", "8 club", "9 club", "10 club", "J club", "Q club", "K club", "A heart", "2 heart", "3 heart", "4 heart", "5 heart", "6 heart", "7 heart", "8 heart", "9 heart", "10 heart", "J heart", "Q heart", "K heart", "A diamond", "2 diamond", "3 diamond", "4 diamond", "5 diamond", "6 diamond", "7 diamond", "8 diamond", "9 diamond", "10 diamond", "J diamond", "Q diamond", "K diamond"],
            images: ["", "css/images/ace_of_spades.png", "css/images/2_of_spades.png", "css/images/3_of_spades.png", "css/images/4_of_spades.png", "css/images/5_of_spades.png", "css/images/6_of_spades.png", "css/images/7_of_spades.png", "css/images/8_of_spades.png", "css/images/9_of_spades.png", "css/images/10_of_spades.png", "css/images/jack_of_spades2.png", "css/images/queen_of_spades2.png", "css/images/king_of_spades2.png", "css/images/ace_of_clubs.png", "css/images/2_of_clubs.png", "css/images/3_of_clubs.png", "css/images/4_of_clubs.png", "css/images/5_of_clubs.png", "css/images/6_of_clubs.png", "css/images/7_of_clubs.png", "css/images/8_of_clubs.png", "css/images/9_of_clubs.png", "css/images/10_of_clubs.png", "css/images/jack_of_clubs2.png", "css/images/queen_of_clubs2.png", "css/images/king_of_clubs2.png", "css/images/ace_of_hearts.png", "css/images/2_of_hearts.png", "css/images/3_of_hearts.png", "css/images/4_of_hearts.png", "css/images/5_of_hearts.png", "css/images/6_of_hearts.png", "css/images/7_of_hearts.png", "css/images/8_of_hearts.png", "css/images/9_of_hearts.png", "css/images/10_of_hearts.png", "css/images/jack_of_hearts2.png", "css/images/queen_of_hearts2.png", "css/images/king_of_hearts2.png", "css/images/ace_of_diamonds.png", "css/images/2_of_diamonds.png", "css/images/3_of_diamonds.png", "css/images/4_of_diamonds.png", "css/images/5_of_diamonds.png", "css/images/6_of_diamonds.png", "css/images/7_of_diamonds.png", "css/images/8_of_diamonds.png", "css/images/9_of_diamonds.png", "css/images/10_of_diamonds.png", "css/images/jack_of_diamonds2.png", "css/images/queen_of_diamonds2.png", "css/images/king_of_diamonds2.png"],

            card1: "",
            card2: "",
            card3: "",
            card4: "",
            card5: "",
            card6: "",
            card7: "",
            card8: "",
            card_n: "",
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            image5: "",
            image6: "",
            image7: "",
            image8: "",
            image_n: "",
            computer_images: [],

            //random choose first 4 cards from the card deck+ return value of card image sources
            deal: function () {
                const random1 = Math.floor(Math.random() * 51 + 1);
                const first_card = this.cards[random1];
                this.cards.splice(random1, 1);
                this.card1 = first_card;
                const first_image = this.images[random1];
                this.images.splice(random1, 1);
                this.image1 = first_image;

                const random2 = Math.floor(Math.random() * 50 + 1);
                const second_card = this.cards[random2];
                this.cards.splice(random2, 1);
                this.card2 = second_card;
                const second_image = this.images[random2];
                this.images.splice(random2, 1);
                this.image2 = second_image;

                const random3 = Math.floor(Math.random() * 49 + 1);
                const third_card = this.cards[random3];
                this.cards.splice(random3, 1);
                this.card3 = third_card;
                const third_image = this.images[random3];
                this.images.splice(random3, 1);
                this.image3 = third_image;

                const random4 = Math.floor(Math.random() * 48 + 1);
                const fourth_card = this.cards[random4];
                this.cards.splice(random4, 1);
                this.card4 = fourth_card;
                const fourth_image = this.images[random4];
                this.images.splice(random4, 1);
                this.image4 = fourth_image;

            }, //end of function deal()

            //hit with n run from 5 to 10
            hit: function (n) {
                this.card_n = "";
                this.image_n = "";
                const card_left = 52 - n;
                const random_n = Math.floor(Math.random() * card_left + 1);
                const card_n_th = this.cards[random_n];
                this.cards.splice(random_n, 1);
                this.card_n = card_n_th;
                const image_n_th = this.images[random_n];
                this.image_n = image_n_th;
                this.images.splice(random_n, 1);
            } //end the function hit()

        }; //end of the Object BlackJack

        //initiating objects from Prototype Objects
        const playing = Object.create(BlackJack);
        const player1 = Object.create(Player);
        const player2 = Object.create(Player);

        $("#start").hide();
        $("#stand").show();
        let hit_num = 5;

        //run the deal function
        playing.deal();

        //create hand array in Player objects respectively for each player
        player1.init();
        player2.init();

        //push cards of each player into respective hand of each player
        player1.hand.push(playing.card1, playing.card3);
        player2.hand.push(playing.card2, playing.card4);

        //show images of cards
        $(".player_card1").attr("src", playing.image1);
        $(".player_card1").show();
        $(".player_card2").attr("src", playing.image3);
        $(".player_card2").show();
        $(".computer_card1").attr("src", playing.image2);
        $(".computer_card1").show();

        //count to show the couting of player
        player1.count();
        let player1_count = player1.total;
        $("#result_player1").text("Your cards are: " + player1.total);
        $("#hit1").show();
        $("#new-game").hide();

        //function check to stop game when player score is over 21
        const check = function () {
            player1.count();
            player1_count = player1.total;
            player2.count();
            player2_count = player2.total;

            if (player1.total > 21) {
                winner();
                $("#hit1").hide();
                $("#hit2").hide();
                $("#hit3").hide();
                $("#hit4").hide();
                $("#stand").hide();
                $("#new-game").show();
            }
        };

        //after player done, this function run to hit more card for dealer if necessary
        const computer_play = function () {
            while ((player1_count < 21 && player1_count > player2_count) || (player1_count == player2_count && player2_count <= 16)) {

                hit_num = hit_num + 1;
                playing.hit(hit_num);
                playing.card8 = playing.card_n;
                player2.hand.push(playing.card8);
                player2.count();
                player2_count = player2.total;
                playing.image8 = playing.image_n;
                playing.computer_images.push(playing.image8);
                playing.card8 = "";
                playing.image_n = "";
            };
        };

        //this function is integrated in hit3 and stand function
        //show images of dealer's cards at the end
        const auto_run = function () {
            let player2_cards = player2.hand.join(" , ");
            player2.count();
            player2_count = player2.total;
            $("#result_computer").text("Dealer cards: " + player2_count);
            //$("#comp1").text("Computer cards: "+ player2_cards);
            $(".computer_card2").attr("src", playing.image4);
            $(".computer_card2").show();

            if (playing.computer_images[0]) {
                $(".computer_card3").attr("src", playing.computer_images[0]);
                $(".computer_card3").show();
            };

            if (playing.computer_images[1]) {
                $(".computer_card4").attr("src", playing.computer_images[1]);
                $(".computer_card4").show();
            };

            if (playing.computer_images[2]) {
                $(".computer_card5").attr("src", playing.computer_images[2]);
                $(".computer_card5").show();
            };
        }; //end of function auto_run

        //function to decide who is the winner based on their scores
        const winner = function () {
            player1.count();
            player1_count = player1.total;
            player1.count();
            player2_count = player2.total;

            if (player1_count > 21) {
                $("#final_result").text("You're busted!");
            };

            if (player2_count > 21) {
                $("#final_result").text("Dealer is busted! YOU WON!");
            };

            if (player1_count <= 21 && player2_count <= 21 && player1.hand.length === 5) {
                $("#final_result").text("AWESOME! BLACKJACK! YOU WON!");
            };

            if (player1_count <= 21 && player2_count <= 21 && player2.hand.length === 5) {
                $("#final_result").text("Dealer got BLACKJACK! You lose!");
            };

            if (player1.hand.length === 5 && player2.hand.length === 5 && player1_count === player2_count) {
                $("#final_result").text("We tie");
            };

            if (player1.hand.length === 5 && player2.hand.length === 5 && player1_count < player2_count) {
                $("#final_result").text("WE BOTH GOT BLACKJACK! But you're lower score. YOU WON!");
            };

            if (player1.hand.length === 5 && player2.hand.length === 5 && player1_count > player2_count) {
                $("#final_result").text("WE BOTH GOT BLACKJACK! But you're higer score. You lose!");
            };

            if (player1.hand.length === 5 && player2.hand.length === 5 && player1_count === player2_count) {
                $("#final_result").text("WE BOTH GOT BLACKJACK! WE TIE!");
            };

            if (player1_count <= 21 && player2_count <= 21 && player1.hand.length < 5 && player2.hand.length < 5 && player1_count > player2_count) {
                $("#final_result").text("YOU WON!");
            };

            if (player1_count <= 21 && player2_count <= 21 && player1.hand.length < 5 && player2.hand.length < 5 && player1_count < player2_count) {
                $("#final_result").text("You lose!");
            };

            if (player1_count <= 21 && player2_count <= 21 && player1.hand.length < 5 && player2.hand.length < 5 && player1_count === player2_count) {
                $("#final_result").text("We tie!");
            };
            if (player2_count === 21 && player2_count < 21 && player2.hand.length === 2) {
                $("#final_result").text("You lose!");
            };
        };

        //function to start a new game
        $("#new-game").click(function () {
            window.location.reload(true);
        });

        //function hit() run when player hit the first time
        $("#hit1").click(function () {
            $("#hit1").hide();
            $("#hit2").show();
            $("#stand").show();

            //run the hit function and put new card into player's hand
            hit_num = hit_num + 1;
            playing.hit(hit_num);
            playing.card5 = playing.card_n;
            playing.image5 = playing.image_n;
            player1.hand.push(playing.card_n);
            //$("#hum1").text("Your cards: "+ playing.card1+"    &   "+playing.card3+"    &   "+playing.card5 );
            $(".player_card3").attr("src", playing.image5);
            $(".player_card3").show();
            //$("#comp1").text("Computer cards: "+ playing.card2);
            player1.count();
            const player1_count = player1.total;
            $("#result_player1").text("Your cards are: " + player1.total);

            //after hit a new card, run function check to see if player counting is over 21 or not
            check();
        }); //end of function hit1

        //run the function hit when player hit the second time
        $("#hit2").click(function () {
            $("#hit2").hide();
            $("#hit3").show();
            $("#stand").show();

            //run the function hit and put the new card into player's hand
            hit_num = hit_num + 1;
            playing.hit(hit_num);
            playing.image6 = playing.image_n;
            playing.card6 = playing.card_n;
            player1.hand.push(playing.card6);
            //$("#hum1").text("Your cards: "+ playing.card1+"    &   "+playing.card3+"    &   "+playing.card5+"    &   "+playing.card6);
            $(".player_card4").attr("src", playing.image6);
            $(".player_card4").show();
            //$("#comp1").text("Computer cards: "+ playing.card2);
            player1.count();
            const player1_count = player1.total;
            $("#result_player1").text("Your cards are: " + player1.total);

            //after hit a new card, run check function to see if player's counting is over 21 or not
            check();
        }); //end of function hit2

        //run the function hit when player hit the third time
        $("#hit3").click(function () {
            $("#hit3").hide();
            $("#hit4").show();
            $("#stand").hide();
            $("#new-game").show();
            hit_num = hit_num + 1;
            playing.hit(hit_num);
            playing.image7 = playing.image_n;
            playing.card7 = playing.card_n;
            player1.hand.push(playing.card7);
            //$("#hum1").text("Your cards: "+ playing.card1+"    &   "+playing.card3+"    &   "+playing.card5+"    &   "+playing.card6+"    &   "+playing.card7);
            $(".player_card5").attr("src", playing.image7);
            $(".player_card5").show();
            //$("#comp1").text("Computer cards: "+ playing.card2);
            player1.count();
            player1_count = player1.total;
            check();
            const player1_num_cards = player1.hand.length;
            $("#result_player1").text("Your cards are: " + player1.total);
            $("#done").unbind("click");
            //$("#comp1").text("Computer cards: "+ playing.card2+"    &   "+playing.card4);
            player2.count();
            player2_count = player2.total;
            $("#result_computer").text("Dealer cards are: " + player2_count);

            //after 3 hits, player is done
            computer_play(); //get more hit for dealer if necessary
            auto_run(); //showing dealer's cards
            winner(); //decide who is the winner
        }); //end of function hit3

        //run the function stand
        $("#stand").click(function () {
            $("#hit1").hide();
            $("#hit2").hide();
            $("#hit3").hide();
            $("#hit4").hide();
            $("#stand").hide();
            $("#new-game").show();
            player1.count();
            const player1_count = player1.total;
            const player1_num_cards = player1.hand.length;
            $("#result").text("Your cards are: " + player1.total);
            //$("#comp1").text("Computer cards: "+ playing.card2+"    &   "+playing.card4);
            player2.count();
            player2_count = player2.total;
            $("#result_computer").text("Dealer cards are: " + player2_count);
            $(".computer_card2").attr("src", playing.image4);
            $(".computer_card2").show();

            check();
            computer_play();
            auto_run();
            winner();
        }); //end of function stand

    }); //end of function start at the beginning

}); //end of document loading at the first line
