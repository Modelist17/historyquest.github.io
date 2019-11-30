"use strict";
var Name = [];
var Tested = [];
var Variant = [];
var Weight = [];
var Power_exploding = [];

var History = [];
var Img = [];


Name[0] = "Tsar-Bomba";
Tested[0] = "30/10/1961";
Variant[0] = "A620EN";
Weight[0] = "26,500 kg";
Power_exploding[0] = "58,6 megatons of TNT";
History[0] = "The Tsar Bomba is the single most physically powerful device ever deployed on Earth. For comparison, the largest weapon ever produced by the U.S., the now-decommissioned B41, had a predicted maximum yield of 25 megatons of TNT (100 PJ). The largest nuclear device ever tested bythe U.S. (Castle Bravo) yielded 15 megatons of TNT (63 PJ) because of an unexpectedly high involvement of lithium-7 in the fusion reaction; the preliminary prediction for the yield was from 4 to 6 megatons of TNT (17 to 25 PJ). The largest weapons deployed by the Soviet Union were also around 25 megatons of TNT (100 PJ) (e.g., the SS-18 Mod. 3 warhead).";
Img[0] = "RightDistantArawana-mobile.gif";


Name[1] = "Orange Herald";
Tested[1] = "1957";
Variant[1] = "None";
Weight[1] = "31 000 kg";
Power_exploding[1] = "700 megatons of TNT";
History[1] = "Tmegatons of TNT (63 PJ) because of an unexpectedly high involvement of lithium-7 in the fusion reaction; the preliminary prediction for the yield was from 4 to 6 megatons of TNT (17 to 25 PJ). The largest weapons deployed by the Soviet Union were also around 25 megatons of TNT (100 PJ) (e.g., the SS-18 Mod. 3 warhead).";
Img[1] = "http://sonicbomb.com/albums/nw_uk/Orange.jpg";

Name[2] = "Orange Herald";
Tested[2] = "1957";
Variant[2] = "None";
Weight[2] = "31 000 kg";
Power_exploding[2] = "700 megatons of TNT";
History[2] = "Tmegatons of TNT (63 PJ) because of an unexpectedly high involvement of lithium-7 in the fusion reaction; the preliminary prediction for the yield was from 4 to 6 megatons of TNT (17 to 25 PJ). The largest weapons deployed by the Soviet Union were also around 25 megatons of TNT (100 PJ) (e.g., the SS-18 Mod. 3 warhead).";
Img[2] = "http://sonicbomb.com/albums/nw_uk/Orange.jpg";

Name[3] = "Orange Herald";
Tested[3] = "1957";
Variant[3] = "None";
Weight[3] = "31 000 kg";
Power_exploding[3] = "700 megatons of TNT";
History[3] = "Tmegatons of TNT (63 PJ) because of an unexpectedly high involvement of lithium-7 in the fusion reaction; the preliminary prediction for the yield was from 4 to 6 megatons of TNT (17 to 25 PJ). The largest weapons deployed by the Soviet Union were also around 25 megatons of TNT (100 PJ) (e.g., the SS-18 Mod. 3 warhead).";
Img[3] = "http://sonicbomb.com/albums/nw_uk/Orange.jpg";

$(document).ready (function(){
    console.log(Name.length);
    for(var i=0; i < Name.length; i++){
        $('#bomb_name').append('<option value="' + i + '">' + Name[i] + '</option>');
    }
});

console.log("ready");
function Change_Bomb() {
    console.log($("#bomb_name option:selected").val());
    var bomb_index = $("#bomb_name option:selected").val();
    $("#tested").text(Tested[bomb_index]);
    $("#name").text(Name[bomb_index]);
    $("#variant").text(Variant[bomb_index]);
    $("#weight").text(Weight[bomb_index]);
    $("#power_exploding").text(Power_exploding[bomb_index]);
    $("#history").text(History[bomb_index]);
    $("#img_bomb").attr("src", Img[bomb_index]);
}


