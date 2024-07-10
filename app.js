let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let msg1 = document.querySelector(".msg1");

let turn0 = true;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const enable = () => {
   turn0 = true;
   for(let box of boxes)
   {
       box.disabled = false;
       box.innerHTML = "";
   }
   msg.classList.add("hide");
}

const disable = () => {
    turn0 = false;
    for(let box of boxes)
    {
        box.disabled = true;
    }
 }

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turn0)
        {
            box.innerHTML = "O";
            turn0 = false;
        }
        else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        winercheck();
    })
})

const winercheck = () =>{
    for(let pattern of winpatterns)
    {
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;

        if(val1 != "" && val2 != "" && val3 != "")
            {
                if(val1 == val2 && val2 == val3)
                {
                    winner(val1);
                }
            } 
    }
}

const winner = (win) => {
    msg1.innerText = `Congratulations, Winner is ${win}`;
    msg.classList.remove("hide");
    disable();
}

resetBtn.addEventListener("click", enable);