

var score = 0;

var data;

$('document').ready(function () {
    console.log("Document Ready");

    numq = 10;

    var RandNum = [];
    for (var i = 0; i < numq; i++) {
        RandNum[i] = Math.floor(Math.random() * Math.floor(Q.length));

        for (var x = 0; x < i; x++) {
            for(;RandNum[i] == RandNum[x];){
                RandNum[i] = Math.floor(Math.random() * Math.floor(Q.length));
            }
        }

        console.log(RandNum[i]);
    }


    for (var i = 0; i < numq; i++) {
        $('#addq').before('<div class="row"><div class="col-sm-12 col-lg-6"><p id="q' + i + '">'+ i + ') ' + Q[RandNum[i]] + '</p></div><div class="col-sm-12 col-lg-6"><input type="text" name="a' + i + '" id="a' + i + '"></div></div>');
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
        if (score >= 8) {
            window.location.href = "end_game_1.html";
        } else if (score < 8 &&
            score > 4) {
            window.location.href = "end_game_2.html";

        } else {
            window.location.href = "end_game_3.html";
        }
    });

});
