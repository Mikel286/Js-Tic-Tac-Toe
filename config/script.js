const cells = document.querySelectorAll('.cell');
const reset_button = document.getElementById('reset-button')

let turn = 0;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (turn%2 == 0 && cell.textContent == ''){
        cell.textContent = 'X';
        turn += 1;
    } else if (turn%2 == 1 && cell.textContent == '') {
        cell.textContent = 'O'
        turn += 1;
    }
});
});

reset_button.addEventListener("click", ()=>{
    cells.forEach(cell => {
        cell.textContent = '';
        turn = 0;})
});

