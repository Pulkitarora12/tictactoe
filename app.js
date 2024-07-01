let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true; 
let count = 0;

let winPattern = [
    [0,1,2] ,[3,4,5], [6,7,8], [0,3,6],
     [1,4,7],[2,4,6] ,[2,5,8],[0,4,8]
];

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}` ; 
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPattern){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
            
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked");
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw() ;
        }
    });
});

const resetGame = () => {
    turn0 = true;
    count = 0;
    enabledBoxes() ;
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click" , resetGame)
resetGameBtn.addEventListener("click" , resetGame)


