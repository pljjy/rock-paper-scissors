const choices = {0: "rock", 1: "paper", 2: "scissors"};
// no enums here😭

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function play(player, pc){
    player = player.toLowerCase();

}
