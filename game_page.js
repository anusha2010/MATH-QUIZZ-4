player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
actual_answer=parseInt(player1_name) * parseInt(player2_name);

document.getElementById("p1_name").innerHTML=player1_name;
document.getElementById("p2_name").innerHTML=player2_name;

p1_score=0;
p2_score=0;

document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;


document.getElementById("question_turn").innerHTML="question turn "+  player1_name;
document.getElementById("answer_turn").innerHTML="answer turn "+  player2_name;

function send(){
 get_word=document.getElementById("word").value;

 word=get_word.toLowerCase();

 charAt1=word.charAt(1);
 length=Math.floor(word.length/2);
 charAt2=word.charAt(length);
 length2=length-1;
 charAt3=word.charAt(length2);

 replace_1=word.replace(charAt1,"_");
 replace_2=replace_1.replace(charAt2,"_");
 replace_3=replace_2.replace(charAt3,"_");
console.log(replace_3);
}

question_number='<h4>' + player1_name +'X' + player2_name + '<h4>';
input_box='<br>Answer:<input type="text" id="input_check_box">';
check_btn='<br><br><button class="btn btn-info" onclick="check()">check</button>';
row= question_word + input_box + check_btn;

document.getElementById("output").innerHTML=row;
document.getElementById("player1_name").value="";
document.getElementById("player2_name").value="";

ques_turn="player1";
ans_turn="player2";


function check(){
get_word= document.getElementById("input_check_box").value;
answer=get_word.toLowerCase();

if(answer==word){
    if(ans_turn=="player1"){
        p1_score=p1_score+1;
        document.getElementById("p1_score").innerHTML=p1_score;

    }
    else{
        p2_score=p2_score+1;
        document.getElementById("p2_score").innerHTML=p2_score;
    }
}
if(ques_turn=="player1"){
    ques_turn="player2";
    document.getElementById("question_turn").innerHTML="question turn :  "+player2_name;
}
else{
    ques_turn="player1";
    document.getElementById("question_turn").innerHTML="question turn : "+player1_name;
}

if(ans_turn=="player1"){
    ans_turn="player2";
    document.getElementById("answer_turn").innerHTML="answer turn : "+player2_name;
}
else{
    ans_turn="player1";
    document.getElementById("answer_turn").innerHTML="answer turn : "+player1_name;
}

document.getElementById("output").innerHTML="";


}
