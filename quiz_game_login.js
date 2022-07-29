
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

player_question = player1_name;
player_answer = player2_name;

function send() {
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    product = get_number1 * get_number2;

    question = "<h4 id='question_display'>" + get_number1 + " X " + get_number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_answer'>";
    check_button = "<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
    output_display = question + input_box + check_button;
    document.getElementById("output").innerHTML = output_display;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    get_answer = document.getElementById("input_answer").value;
    answer = get_answer;
    console.log("Product of two numbers - " + answer);
    if (answer == product) {
        if (player_answer == player1_name) {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
  

    if (player_question == player1_name) {
        player_question = player2_name
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        player_question = player1_name
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (player_answer == player1_name) {
        player_answer = player2_name
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        player_answer = player1_name
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}

function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);


    window.location.replace("quiz_game_page.html");

}