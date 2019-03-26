
$('.start').on('click', function () {
    $('.start').remove();
    $('.rules').remove();
    game.loadQ();
})

$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
})

$(document).on('click', '.reset', function () {
    game.reset();
})

var questions = [
    {
        question: "The first Mario Bros. game was releasted on:",
        choices: ["December 25", "Friday the 13th", "When George Bush got elected", "June 5"],
        answer: "Friday the 13th"
    },
    {
        question: "Minecraft was going to be originally called:",
        choices: ["Cave Game", "Block Miner", "Minecraft: Deep Diamond", "Craft and Mine"],
        answer: "Cave Game"
    },
    {
        question: "Instead of a Pikachu, Ash was going to have which Pokemon in the anime originally?",
        choices: ["Squirtle", "He wasn't going to", "Pikachu", "Clefairy"],
        answer: "Clefairy"
    },
    {
        question: "Mario first appeared in which game?",
        choices: ["Mario Kart", "Donkey Kong", "Super Mario Bros", "F-Zero"],
        answer: "Donkey Kong"
    },
    {
        question: "Before Nintendo became a video game company, what type of company were they?",
        choices: ["Trading Card Company", "Publishing Company", "Movie Producing Company", "Playing Card Company"],
        answer: "Playing Card Company"
    },
    {
        question: "Mario and Luigi have a cousin named what?",
        choices: ["Stanley", "David", "Warmio", "Princess Peach"],
        answer: "Stanley"
    },
    {
        question: "What did a deleted episode of Pokemon do that sent many children to the hospital?",
        choices: ["Scared them into a coma", "Made kids faint", "Gave kids seizures", "Hypnotized them to forget who they were"],
        answer: "Gave kids seizures"
    },
    {
        question: "A glitch in Minecraft allowed you to milk what animal?",
        choices: ["Sheep", "Squids", "Zombies", "Pigs"],
        answer: "Squids"
    },
    {
        question: "Which is not a flavor in the Pokemon world?",
        choices: ["Salty", "Dry", "Bitter", "Spicy"],
        answer: "Salty"
    },
    {
        question: "How much did Red Dead Redemption 2 make during opening weekend?",
        choices: ["$500 Million", "$250 Million", "$975 Million", "$725 Million"],
        answer: "$725 Million"
    }
];


var game = {
    questions: questions,
    currentQ: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    countdown: function () {
        game.counter--;
        if (game.counter <= 0) {
            game.timeUp();
        }
    },
    loadQ: function () {
        timer = setInterval(game.countdown, 1000);
        $('.body').html('<h2>' + questions[game.currentQ].question + '</h2>');
        for (var i = 0; i < questions[game.currentQ].choices.length; i++) {
            $('.body').append('<button class="answer-button btn btn-outline-primary" id="button-' + i + '" data-name="' + questions[game.currentQ].choices[i] + '">' + questions[game.currentQ].choices[i]);
            $('.body').append('<br><br>');
        }

    },
    
    nextQ: function () {
        game.counter = 30;
        game.currentQ++;
        game.loadQ();
    },


    timeUp: function () {
        clearInterval(timer);
        game.unanswered++;
        $('.body').html('<h2>Out of time!</h2> <br>');
        $('.body').append('<h3>The correct answer: <br>' + questions[game.currentQ].answer) + '</h3>';
        if (game.currentQ == questions.length - 1) {
            setTimeout(game.result, 2*1000);
        } else {
            setTimeout(game.nextQ, 2*1000);
        }
    },
    result: function () {
        clearInterval(timer);

        $('.body').html('<h2>Your Score</h2>');
        $('.body').append('<h4>Correct: ' + game.correct + '/10</h4> <br>');
        $('.body').append('<h4>Incorrect: ' + game.incorrect + '/10</h4> <br>');
        $('.body').append('<h4>Unanswered: ' + game.unanswered + '/10</h4> <br><br>');
        $('.body').append('<button class="reset btn btn-primary btn-lg">Restart</button');
    },
    clicked: function (e) {

        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQ].answer) {
            game.answeredCorrect();
        } else {
            game.answeredIncorrect();
        }

    },
    answeredCorrect: function () {
        clearInterval(timer);
        game.correct++;
        $('.body').html('<h2>You got it!</h2>');
        if (game.currentQ == questions.length - 1) {
            setTimeout(game.result, 2*1000);
        } else {
            setTimeout(game.nextQ, 2*1000);
        }
    },
    answeredIncorrect: function () {
        clearInterval(timer);
        game.incorrect++;
        $('.body').html('<h2>Incorrect!</h2><br>');
        $('.body').append('<h3>The correct answer: ' + questions[game.currentQ].answer + '</h3>');
        if (game.currentQ == questions.length - 1) {
            setTimeout(game.result, 1000);
        } else {
            setTimeout(game.nextQ, 1000);
        }
    },
    reset: function () {
        game.currentQ = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQ();
        clearInterval(timer);
    }


}