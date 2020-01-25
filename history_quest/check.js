'use strict';

var score = 0;

var data;

$('document').ready(function () {
    console.log("Document Ready");

    var numq = 5;

    var RandNum = [];
    for (var i = 0; i < numq; i++) {
        RandNum[i] = Math.floor(Math.random() * Math.floor(Q.length));

        for (var x = 0; x < i; x++) {
            if (RandNum[i] == RandNum[x]) {
                RandNum[i] = Math.floor(Math.random() * Math.floor(Q.length));
                x = -1;
            }
        }

        console.log(RandNum[i]);
    }


    for (var i = 0; i < numq; i++) {
        $('#addq').before('<div class="row"><div class="col-sm-12 col-lg-6"><p id="q' + i + '">' + (i + 1) + ') ' + Q[RandNum[i]] + '</p></div><div class="col-sm-12 col-lg-6"><input type="text" name="a' + i + '" id="a' + i + '"></div></div>');
    }

    $('input').addClass('form-control');

    $('#game_form').submit(function (event) {
        score = 0;

        for (var i = 0; i < numq; i++) {
            if ($('#a' + i).val().toString() == A[RandNum[i]]) {
                score++;
            }
        }

        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        console.log(score);
        $('#score-in-modal').text("You score: " + score);

        if (score >= numq - 2) {
            $('#score-in-modal').after(' <img src="https://media.giphy.com/media/x2woMnCz4W0Vy/giphy.gif"><audio src="mp3/Erika.mp3" autoplay>');
            //window.location.href = "end_game_1.html";
        } else if (score < (numq - 2) &&
            score > (numq / 2 - 1)) {
                $('#score-in-modal').after('<img src="https://media.giphy.com/media/x2woMnCz4W0Vy/giphy.gif"><audio src="mp3/mario_1.mp3" autoplay>');
            //window.location.href = "end_game_2.html";

        } else {
            $('#score-in-modal').after('<img src="https://media.giphy.com/media/x2woMnCz4W0Vy/giphy.gif"><audio src="mp3/porazhenie.mp3" autoplay>');
            //window.location.href = "end_game_3.html";
        }
    });

});
