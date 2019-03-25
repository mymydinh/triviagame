
$('.start').on('click', function () {
   $('.start').remove();
   game.loadQ();
})


var questions = [
    {
        question: "what is your name?",
        choices: ["nick", "brian", "jack", "mymy"],
        answer: "mymy"
    },
    {
        question: "what is your last name?",
        choices: ["tran", "dinh", "kim", "young"],
        answer: "dinh"
    }
];


var game = {
    questions: questions,
    currentQ: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function (){
        game.counter--;
        $('.counter-div').html('<h2>Time Remaining: ' + game.counter + 'seconds</h2>');

        console.log(game.counter);

        if (game.counter <= 0) {

            console.log("time up!");
            game.timeUp();
        }
    },
    loadQ: function () {
        timer = setInterval(game.countdown, 1000);

        $('.counter-div').prepend('<h2>Time Remaining: <span class="counter">30</span> seconds</h2>')

        $('.body').html('<h2>' + questions[game.currentQ].question +'</h2>');
        for (var i = 0; i < questions[game.currentQ].choices.length; i++) {
            $('.body').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQ].choices[i] + '">' + questions[game.currentQ].choices[i]);
        }

    },
    nextQ: function (){

    },
    timeUp: function (){

    },
    result: function (){

    },
    clicked: function (){

        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQ].answer) {
            game.answeredCorrect();
        } else {
            game.answeredIncorrect();
        }

    },
    answeredCorrectly: function (){
        console.log("you got it");
    },
    answeredIncorrectly: function (){
        console.log("wrong");
    },
    reset: function (){

    }

    
}

// var currentQ = 0;
// var game = {
//     correct: 0,
//     incorrect: 0,
//     count: 120,
//     countdown: function () {
//         game.count--;
//         $('.timer').html(game.count);
//         if (game.count == 0) {
//             console.log("time is up");
//             game.done();
//         }
//     },
//     start: function () {
//         timer = setInterval(game.countdown, 1000);
//         $('.contents').prepend('<h2>Time Remaining: <span class="timer">120</span> seconds</h2>')
//         $('.start').remove();



//     }

// }



// for (var i = 0; i < gameQuestions.length; i++) {
//     $('.contents').append('<h2>'+ gameQuestions[i].question + '</h2>')
//     for (var j = 0; j < gameQuestions[i].choices.length; j++) {
//         $('.contents').append('<input type="radio" name="question-"' +i+ '" value="' + gameQuestions[i].choices[j]+ '">' + gameQuestions[i].choices[j]);
//     }

// $('.content').text('<h2>' + gameQuestions + '</h2>');
// for (var i = 0; i < gameQuestions.length; i++) {
//     $('.content').append('<button class="answer-button" id="button-' + i + ' "data-name"' + gameQuestions[i] + '</button>')


        // for (var i = 0; i < questions[game.currentQ].choices.length; i++) {
        //     $('.subwrapper').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQ].choices[i] + '">' + questions[game.currentQ].choices[i] + '</button>');
        // console.log("hello");

        // console.log(gameQuestions[i]);
// console.log(gameQuestions[0].choices);
// console.log(gameQuestions[0].choices[3]);
// console.log(gameQuestions[0].answer);