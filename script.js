let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst");
let turnX = true;
let newBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPtns = [   [0, 1, 2],
                    [0, 3, 6],
                    [0, 4, 8],
                    [1, 4, 7],
                    [2, 5, 8],
                    [2, 4, 6],
                    [3, 4, 5],
                    [6, 7, 8],
                ]

const disableBoxes = () => {
     for(let box of boxes){
          box.disabled = true;
     }
};

boxes.forEach((box)=>{
     box.addEventListener(("click"),()=>{
          if(turnX){
               box.innerText = "X";
               turnX = false;
          } else{
               box.innerText = "O";
               turnX = true
          }
          box.disabled = true;
          

          checkWinner();

     });
});

const showWinner = (winner)=>{
     msg.innerText = `Congratulations!\nThe winner is ${winner}!!`;
     disableBoxes();
     msgContainer.classList.remove("hide");
     
};

const checkWinner = () => {
     for(let pattern of winPtns){
          let pos1 = boxes[pattern[0]].innerText;
          let pos2 = boxes[pattern[1]].innerText;
          let pos3 = boxes[pattern[2]].innerText;
          if(pos1 != "" && pos2 != "" && pos3 != ""){
               if((pos1 === pos2) && (pos2 === pos3)){
                    console.log("Winner");
                    showWinner(pos1);
                    break;
               }
          }
     }
}

const enableBoxes = () => {
     for(box of boxes){
          box.disabled = false;
     }
}

const newGame = () => {
     turnX = true;
     msgContainer.classList.add("hide");
     enableBoxes();
     removeText();
}

const reset = () => {
     turnX = true;
     msgContainer.classList.add("hide");
     enableBoxes();
     removeText();
};

const removeText = () => {
     for(box of boxes){
          box.innerText = "";
     }
}

// Corrected the event listener
resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);
