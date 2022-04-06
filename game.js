let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let level = 0;

$('.play').click(function(){
    $('.game-starts, .play').addClass('visible');
    level++;
    $('#center h1').text('Level ' +level);
    nextSequence();
    console.log(gamePattern);
});

function soundButton(userChosenColor) {
    if (userChosenColor = "red"){
        $('this').addClass(userChosenColor);
        setTimeout(function (){
            let sound = new Audio("sounds/red.mp3");
            sound.play();
        }, 0);
        gamePattern.push(buttonColors[0]);
    } else
    if (userChosenColor = "blue"){
        $('this').addClass(userChosenColor);
        setTimeout(function (){
            let sound = new Audio("sounds/blue.mp3");
            sound.play();
        }, 0);
        gamePattern.push(buttonColors[1]);
    } else
    if (userChosenColor = "green"){
        $('this').addClass(userChosenColor);
        setTimeout(function (){
            let sound = new Audio("sounds/green.mp3");
            sound.play();
        }, 0);
        gamePattern.push(buttonColors[2]);
    } else
    if (userChosenColor = "yellow"){
        $('this').addClass(userChosenColor);
        setTimeout(function (){
            let sound = new Audio("sounds/yellow.mp3");
            sound.play();
        }, 0);
        gamePattern.push(buttonColors[3]);
    }
}

function nextSequence() {
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum];
    gamePattern.push(soundButton(randomChosenColor));
    
}

// function buttons(pattern){
    
//     let userChosenColor = $('#red-button').on('click', function (){
//         $('#red-button').fadeOut(100).fadeIn(100);
//         setTimeout(function (){
//             let sound = new Audio("sounds/red.mp3");
//             sound.play();
//         }, 0);
//         pattern.push(buttonColors[0]);
//     });
//     console.log(userChosenColor);
//     $('#blue-button').on('click', function (){
//         $('#blue-button').fadeOut(100).fadeIn(100);
//         setTimeout(function (){
//             let sound = new Audio("sounds/blue.mp3");
//             sound.play();
//         }, 0);
//         pattern.push(buttonColors[1]);
//     });
//     $('#green-button').on('click', function (){
//         $('#green-button').fadeOut(100).fadeIn(100);
//         setTimeout(function (){
//             let sound = new Audio("sounds/green.mp3");
//             sound.play();
//         }, 0);
//         pattern.push(buttonColors[2]);
//     });
//     $('#yellow-button').on('click', function (){
//         $('#yellow-button').fadeOut(100).fadeIn(100);
//         setTimeout(function (){
//             let sound = new Audio("sounds/yellow.mp3");
//             sound.play();
//         }, 0);
//         pattern.push(buttonColors[3]);
//     });
// };
// buttons(gamePattern);
