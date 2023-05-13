import { getGenerateDubleArray, generateRandomNumber } from './util.js';

// !Заменить на запрос из input
const QUANTITY_MINE = 3;
// !Заменить на выбор с кнопок после 10\15\25 клеток
const FIELD_SIZE = 10;



const FILED_ARRAY = getGenerateDubleArray(FIELD_SIZE);

const MINE_LOCATION = generateRandomNumber(QUANTITY_MINE, FIELD_SIZE);


const BODY = document.querySelector('.body');
const CONTAINER = document.createElement('div');
BODY.prepend(CONTAINER);

// ! Переделать на классы
// ! ТУТ создаём линии и ячейки и присваиваем каждой свой атрибут
for(let i = 0; i < FIELD_SIZE; i++) {
  const LINE = document.createElement('div');
  CONTAINER.classList = 'container';
  LINE.classList = 'line';
  LINE.setAttribute('data-line-number', `${i}`)

  for(let j = 0; j < FIELD_SIZE; j++) {
    const CELL_BOX = document.createElement('div');
    const CELL = document.createElement('div');
    CELL_BOX.classList = 'cell-box';
    CELL.classList = 'cell';
    CELL.setAttribute('data-cell-number', `${i}-${j}`)
    LINE.append(CELL_BOX);
    CELL_BOX.append(CELL);
  }
  CONTAINER.append(LINE);
}

CONTAINER.addEventListener('click', (evt) => {
  const CELL = evt.target;
  CELL.classList.toggle('cell-active');
})


// ! Расставляет мин по полю, сделать так чтобы только после нажатия первой клетки
// TODO: Добавить по другому мины, не через класс
console.log(MINE_LOCATION)


// TODO: Приходит двумерный массив из строк, их к строке дата селл
// TODO: И всё.

// for(let mine of MINE_LOCATION) {
//   const nas = `${value.line}-${value.cell}`
// }

// .forEach((value) => {
//
// const asdas = document.querySelector(`[data-cell-number="${nas}"]`);
// asdas.classList.add('cell-picture');
// })



// const mineCell = document.querySelectorAll('.cell')
// MINE_LOCATION.forEach((value, key)=>{
//   console.log(value)
//   mineCell.forEach((i)=> {
//     const cellNumber = i.getAttribute(`data-cell-number`);
//    if(cellNumber === `${value.line}-${value.cell}`) {
//     i.classList.add('cell-picture');
//    }
//   })
// })





// class Cell {
//   constructor(quantity) {
//     this.quantity = quantity;
//   }

// }


// // const cell = new Cell(2);


