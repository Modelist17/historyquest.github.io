var A = [];
A[0] = "1928";
A[1] = "1941";
A[2] = "1942";
A[3] = "3";
A[4] = "Кошкин";
A[5] = "Клим Ворошилов";
A[9] = "45.9";
A[6] = "Генерал Эрвин Роммель";
A[7] = "3 года в Заксенхаузене";
A[8] = "Schutz staffel";

var score = 0;

var data;

$('document').ready(function() {
    console.log("Document Ready");
    
    $('input').addClass('form-control');

    $('#game_form').submit(function (event) {
        score = 0;
        
        for (var i = 1; i <= 10; i++) {
            if ($('#a'+i).val().toString() == A[i-1]) {
                score++;
            }
        }
        
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        
        console.log(score);
        
        window.location.href="end_game_1.html";
    });

});
