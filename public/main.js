import { getGenerateDubleArray, generateRandomNumber } from './util.js';

// !Заменить на запрос из input
const QUANTITY_MINE = 15;
// !Заменить на выбор с кнопок после 10\15\25 клеток
const FIELD_SIZE = 10;



const FILED_ARRAY = getGenerateDubleArray(FIELD_SIZE);

const MINE_LOCATION = generateRandomNumber(QUANTITY_MINE, FIELD_SIZE);


const BODY = document.querySelector('.body');
const CONTAINER = document.createElement('div');
BODY.prepend(CONTAINER);

// ! Переделать на классы
// ! ТУТ создаём линии и ячейки и присваиваем каждой свой атрибут
for(let i = 1; i <= FIELD_SIZE; i++) {
  const LINE = document.createElement('div');
  CONTAINER.classList = 'container';
  LINE.classList = 'line';
  LINE.setAttribute('data-line-number', `${i}`)

  for(let j = 1; j <= FIELD_SIZE; j++) {
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



// TODO: Приходит двумерный массив из строк, их к строке дата селл
// TODO: И всё.
// TODO: Н
const generateMine = (mineLocation) => {
  for(const mine of mineLocation) {
    const MINE_LINE = mine[0];
    const MINE_CELL = mine[1];
    const mineInCell = document.querySelector(`[data-cell-number="${MINE_LINE}-${MINE_CELL}"]`);
    mineInCell.classList.add('cell-picture');
  }
}

generateMine(MINE_LOCATION);


const cellNuberCount = () => {
    let count = 1;
  const countFunct = () => {
    // count+1
    return count;
  }
  return countFunct;
}

const ad = cellNuberCount();


// ! Добавление цифр вокруг бомб, исключая бомб
const countNumberAroundCell = (location) => {
  const LINE = location[0];
  const CELL = location[1];

  const numberCell = document.querySelector(`[data-cell-number="${LINE}-${CELL}"]`);
  numberCell.style.backgroundColor = 'red';
  
  const currentValue = parseInt(numberCell.textContent); // Получаем текущее значение и преобразуем его в число

  if (!isNaN(currentValue)) {
    // Если текущее значение не NaN (число), то увеличиваем его на 1
    numberCell.textContent = currentValue + 1;
  } else {
    // Если текущее значение NaN (не число), то устанавливаем значение 1
    numberCell.textContent = 1;
  }

}

// ! Проверка Содержаться ли координаты в двумерном массиве
const isContainedInArray = (location, arr) => {
  for (let i = 0; i < arr.length; i++) {
    const [x, y] = arr[i];
    if (x === location[0] && y === location[1]) {
      return true;
    }
  }
  return false;
}

// ! Поиск области вокруг бомб
const findCellAroundMine = (value, arr) => {
  const MINE_LINE = value[0];
  const MINE_CELL = value[1];

  for(let i=MINE_LINE-1; i<=MINE_LINE+1; i++) {
    for(let j=MINE_CELL-1; j<=MINE_CELL+1; j++) {
      const location = [i,j];
      if (
        (i !== MINE_LINE || j !== MINE_CELL) &&
        i !== 0 &&
        j !== 0 &&
        i !== FIELD_SIZE + 1 &&
        j !== FIELD_SIZE + 1 &&
        !isContainedInArray(location, arr)
      ) {
        countNumberAroundCell(location);
      }
    }
  }
}


const setNumberAround = () => {
  MINE_LOCATION.forEach((value, index, arr) => {
    findCellAroundMine(value, arr)
    // console.log(value, index)
  })
}

setNumberAround()
// class Cell {
//   constructor(quantity) {
//     this.quantity = quantity;
//   }

// }


// // const cell = new Cell(2);


