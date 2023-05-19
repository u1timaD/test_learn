import { getGenerateDubleArray, generateRandomNumber, changeToNumber, checkArray} from './util.js';

// !Заменить на запрос из input
const QUANTITY_MINE = 89;
// !Заменить на выбор с кнопок после 10\15\25 клеток
const FIELD_SIZE = 10;
let fieldClick = 0;
let leftClickCount = 0;

const FILED_ARRAY = getGenerateDubleArray(FIELD_SIZE);

let MINE_LOCATION;


const BODY = document.querySelector('.body');
const CONTAINER = document.createElement('div');

const BTN = document.createElement('button');
BTN.classList = 'btn';
BTN.textContent = 'Кнопка НОВАЯ ИГРА';
BODY.prepend(CONTAINER);
BODY.prepend(BTN)

const POPUP = document.createElement('div');
POPUP.classList = 'popup';
POPUP.textContent = 'Игра окончена'

const POPUP_WIN = document.createElement('div');
POPUP_WIN.classList = 'popup';




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
    CELL.classList = 'cell cell-shadow';
    CELL.setAttribute('data-cell-number', `${i}-${j}`)
    LINE.append(CELL_BOX);
    CELL_BOX.append(CELL);
  }
  CONTAINER.append(LINE);
}


// ! Добавляем картинку мины
const generateMine = (mineLocation) => {
  for(const mine of mineLocation) {
    const MINE_LINE = mine[0];
    const MINE_CELL = mine[1];
    const mineInCell = document.querySelector(`[data-cell-number="${MINE_LINE}-${MINE_CELL}"]`);
    mineInCell.classList.add('cell-picture');
  }
}


// ! Добавление цифр в через текст контент
const countNumberAroundCell = (location) => {
  const LINE = location[0];
  const CELL = location[1];

  const numberCell = document.querySelector(`[data-cell-number="${LINE}-${CELL}"]`);

  const currentValue = parseInt(numberCell.textContent); // Получаем текущее значение и преобразуем его в число

  if (!isNaN(currentValue)) {
    // Если текущее значение не NaN (число), то увеличиваем его на 1
    numberCell.textContent = currentValue + 1;
  } else {
    // Если текущее значение NaN (не число), то устанавливаем значение 1
    numberCell.textContent = 1;
  }
}


// ! Поиск области вокруг бомб для цифр
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
        !checkArray(arr, location)
      ) {
        countNumberAroundCell(location);
      }
    }
  }
}


// !Установка цирф вокгур мин
const setNumberAround = (mine) => {
  mine.forEach((value, index, arr) => {
    findCellAroundMine(value, arr);
  })
}


// ! Массив открытых ячеек
let openedCells = [];

// ! Массив ячеек с флагами
let flagCollection = [];

const checkEmptyCell = (loc) => {
let selectCells = loc;

  for(const cell of selectCells) {
    const numberCell = document.querySelector(`[data-cell-number="${cell[0]}-${cell[1]}"]`);

    if (numberCell.textContent.length === 0 && !checkArray(openedCells, cell)) {
      openedCells.push(cell);
      findEmptyCellAround(cell);

    } else {
      numberCell.style.backgroundColor = 'orange';
      numberCell.classList.remove('cell-shadow');
    }
  }
}


const findEmptyCellAround = (value) => {
  const MINE_LINE = value[0];
  const MINE_CELL = value[1];
  const CENTER_CELL = [MINE_LINE, MINE_CELL];
  const selectCells = [];

  for(let i=MINE_LINE-1; i<=MINE_LINE+1; i++) {
    for(let j=MINE_CELL-1; j<=MINE_CELL+1; j++) {
      const location = [i,j];

      if (
        i !== 0 &&
        j !== 0 &&
        i !== FIELD_SIZE + 1 &&
        j !== FIELD_SIZE + 1 &&
        !checkArray(flagCollection, location)
      ) {
        selectCells.push(location);
      }
    }
  }
  checkEmptyCell(selectCells, CENTER_CELL);
}

// ! Открыаем всё поле при выигрыше / пройгрыше
const openAllmines = (arr) => {
  for(const item of arr) {
    item.classList.remove('cell-shadow');
  }
}

// !Проверяет слова Ход ХОДА
const updateNamesWithMoves = (value) => {
  const valueString = value.toString();
  let matches;
  const regexOne = /\b\d*1\b/g;
  const regexTwo = /\b\d+[234]\b/g;

  if(regexTwo.test(valueString)) {
    matches = valueString.replaceAll(regexTwo, `${valueString} хода`);
  } else if (regexOne.test(valueString)) {
    matches = valueString.replaceAll(regexOne, `${valueString} ход`);
  } else {
    matches = `${valueString} ходов`;
  }
 return matches;
}

updateNamesWithMoves(leftClickCount)

const renderField = (evt) => {
  const CHECK_CELL = evt.target;
  const CLICK_CELL = evt.target.getAttribute('data-cell-number');
  const changeClickToArray = changeToNumber(CLICK_CELL);
  leftClickCount++;



  // ! Проверка на наличие флага в клетке

  if(!(CHECK_CELL.classList.contains('cell-flag'))) {

      // ! Самое первое нажатие
    if (!fieldClick) {
      fieldClick = 1;
      MINE_LOCATION = generateRandomNumber(QUANTITY_MINE, FIELD_SIZE, changeClickToArray);
      generateMine(MINE_LOCATION);
      setNumberAround(MINE_LOCATION);
    }

    // ! Проверка если ткнул в пусое поле
    if (evt.target.textContent.length === 0 && !checkArray(MINE_LOCATION, changeClickToArray)) {
      const clickLocation = changeToNumber(CLICK_CELL);
      findEmptyCellAround(clickLocation);
    }

    else if (evt.target.textContent.length !== 0 && !checkArray(MINE_LOCATION, changeClickToArray)) {

      evt.target.style.backgroundColor = 'orange';
      evt.target.classList.remove('cell-shadow');

      console.log('Попал в цифру');


      const shadow = document.querySelectorAll('.cell-shadow');

      // ! Попап для победы
      // TODO: Дополнить временем и количество кликов
      if (shadow.length === QUANTITY_MINE) {
        POPUP_WIN.textContent = `Ура! Вы нашли все мины за  секунд и ${updateNamesWithMoves(leftClickCount)}!`;
        BODY.append(POPUP_WIN);
        openAllmines(shadow);
      }

    } else {
      console.log('Попал в бомбу')

      // ! Попап для пройгрыша
      const CELL = document.querySelectorAll('.cell');
      openAllmines(CELL);
      BODY.append(POPUP);
    }
  }
}


// ! Правая кнопка с флагом
const flagRender = (evt) => {
  evt.preventDefault();

  const CLICK_CELL = evt.target.getAttribute('data-cell-number');
  const changeClickToArray = changeToNumber(CLICK_CELL);
  const clickCell = evt.target;

  if(clickCell.classList.contains('cell-shadow')) {

    if(checkArray(flagCollection, changeClickToArray)) {
      const index = flagCollection.findIndex((item) => item[0] === changeClickToArray[0] && item[1] === changeClickToArray[1]);
      flagCollection.splice(index, 1);
    }
    else {
      flagCollection.push(changeClickToArray);
    }
    console.log('Может ставить флаг');
    clickCell.classList.toggle('cell-flag');
    console.log(flagCollection)
  }
}

CONTAINER.addEventListener('click', renderField);
CONTAINER.addEventListener('contextmenu', flagRender);


// ! Рестарт игры
const btnClick = (evt) => {

//   const cellShadow = document.querySelectorAll('.cell-shadow');
//   for(const item of cellShadow) {
//     if(item.classList.contains('cell-shadow')) {

//     }
//     else {
//       item.classList.remove('cell-shadow');
//     }

// }

  generateMine(MINE_LOCATION);
  setNumberAround();
}

const btnStart = BTN.addEventListener('click', btnClick);

