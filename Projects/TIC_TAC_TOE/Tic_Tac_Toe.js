let cells=document.querySelectorAll(".cell");
let reset = document.getElementById("resetBtn");
let count=0;
let turn = "X";
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.innerText !== "") return;
        cell.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        if(count>=5) checkWin();
        count++;
    }
);
});
reset.addEventListener("click", resetGame);
function resetGame() {
    cells.forEach((cell) => {
        cell.innerText = "";
    });}
const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
checkWin = () => {
    console.log("Checking for win");
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (
            cells[a].innerText &&
            cells[a].innerText === cells[b].innerText &&
            cells[a].innerText === cells[c].innerText
        ) {
            alert(`Player ${cells[a].innerText} wins!`);
            count=0;
            resetGame();
            return;
        }
    }
};