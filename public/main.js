import { getGenerateDubleArray, generateRandomNumber, changeToNumber, checkArray} from './util.js';

// !Заменить на запрос из input
const QUANTITY_MINE = 10;
// !Заменить на выбор с кнопок после 10\15\25 клеток
const FIELD_SIZE = 10;
let fieldClick = 0;
const FILED_ARRAY = getGenerateDubleArray(FIELD_SIZE);

let MINE_LOCATION;


const BODY = document.querySelector('.body');
const CONTAINER = document.createElement('div');

const BTN = document.createElement('button');
BTN.classList = 'btn';
BTN.textContent = 'Кнопка';
BODY.prepend(CONTAINER);
BODY.prepend(BTN)

const POPUP = document.createElement('div');
POPUP.classList = 'popup';
POPUP.textContent = 'Игра окончена'




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





// ! Расставляет мин по полю, сделать так чтобы только после нажатия первой клетки
// TODO: Добавить по другому мины, не через класс



// TODO: Приходит двумерный массив из строк, их к строке дата селл
// TODO: И всё.
const generateMine = (mineLocation) => {
  for(const mine of mineLocation) {
    const MINE_LINE = mine[0];
    const MINE_CELL = mine[1];
    const mineInCell = document.querySelector(`[data-cell-number="${MINE_LINE}-${MINE_CELL}"]`);
    mineInCell.classList.add('cell-picture');
  }
}



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


// ! Массив открытых ячеек
let openedCells = [];

const checkEmptyCell = (loc, centerCell) => {
let selectCells = loc;

  for(const cell of selectCells) {
    const numberCell = document.querySelector(`[data-cell-number="${cell[0]}-${cell[1]}"]`);
    if (numberCell.textContent.length === 0 && !checkArray(openedCells, cell)) {
      openedCells.push(cell);
      findEmptyCellAround(cell);

    } else {
      numberCell.style.backgroundColor = 'orange';
    }
  }

// ! Открыли квадраты по периметру
// TODO: Сделать функцию открытия

// !Далее смотри, если ячейка пустая заходим в неё и опять открываем все в радиусе

  // !Если чейка НЕ ПУСТАЯ, то проверяем все ячейки вокруг (добавляем все ячейки в массив)
 // ! Если хотя бы одна ячейка в окружении есть пустая, то проходим для каждой ячейки всё ещё раз.
 // ! В противном случае выходим и нчего не делаем

}


const findEmptyCellAround = (value) => {
  const MINE_LINE = value[0];
  const MINE_CELL = value[1];
  const CENTER_CELL = [MINE_LINE, MINE_CELL];
  const selectCells = []

  for(let i=MINE_LINE-1; i<=MINE_LINE+1; i++) {
    for(let j=MINE_CELL-1; j<=MINE_CELL+1; j++) {
      const location = [i,j];

      if (
        i !== 0 &&
        j !== 0 &&
        i !== FIELD_SIZE + 1 &&
        j !== FIELD_SIZE + 1
      ) {
        selectCells.push(location)
      }
    }
  }
  checkEmptyCell(selectCells, CENTER_CELL);
}



const renderField = (evt) => {
  const CLICK_CELL = evt.target.getAttribute('data-cell-number');
  const changeClickToArray = changeToNumber(CLICK_CELL);


  // ! Самое первое нажатие
  if (!fieldClick) {
    fieldClick = 1;
    MINE_LOCATION = generateRandomNumber(QUANTITY_MINE, FIELD_SIZE, CLICK_CELL);
    setNumberAround(generateMine(MINE_LOCATION));
  }

  // ! Проверка если ткнул в пусое поле
  if (evt.target.textContent.length === 0 && !checkArray(MINE_LOCATION, changeClickToArray)) {
    const clickLocation = changeToNumber(CLICK_CELL);
    findEmptyCellAround(clickLocation);
  }

  else if (evt.target.textContent.length !== 0 && !checkArray(MINE_LOCATION, changeClickToArray)) {

    evt.target.style.backgroundColor = 'orange';

    console.log('Попал в цифру');

  } else {
    console.log('Попал в бомбу')
    BODY.append(POPUP);
  }
}

CONTAINER.addEventListener('click', renderField);


const btnClick = (evt) => {
  generateMine(MINE_LOCATION);
  setNumberAround();
}

const btnStart = BTN.addEventListener('click', btnClick);