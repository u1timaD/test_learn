import { getGenerateDubleArray, generateRandomNumber, changeToNumber, checkArray} from './util.js';
import { NUMBER_COLORS, LEVELS } from './data.js';

// !Заменить на запрос из input
const QUANTITY_MINE = 10;
// !Заменить на выбор с кнопок после 10\15\25 клеток
let FIELD_SIZE = 10;
let fieldClick = 0;
let leftClickCount = 0;


const FILED_ARRAY = getGenerateDubleArray(FIELD_SIZE);

let MINE_LOCATION;


const getCreateElement = () => document.createElement('div');



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


// !Рисуем Кнопки сложности
const LEVEL_BTN_BOX = document.createElement('div');
LEVEL_BTN_BOX.classList = 'level-box';
const EASY = document.createElement('div');
EASY.classList = 'level-btn';
EASY.dataset.level = 'easy';
EASY.textContent = '10x10';
const MID = document.createElement('div');
MID.classList = 'level-btn';
MID.dataset.level = 'mid';
MID.textContent = '15x15';
const HARD = document.createElement('div');
HARD.classList = 'level-btn';
HARD.dataset.level = 'hard';
HARD.textContent = '25x25';
const START = document.createElement('div');
START.classList = 'start-btn';
START.dataset.level = 'start';
START.textContent = 'START';



LEVEL_BTN_BOX.append(EASY, MID, HARD, START);
BODY.prepend(LEVEL_BTN_BOX);


// ! Через DIV
// const numberField = document.createElement('div');
// numberField.contentEditable = true; // Позволяет редактировать содержимое

// numberField.addEventListener('input', function() {
//   const enteredValue = numberField.textContent.trim(); // Удаляем пробелы в начале и конце
//   const numberPattern = /^\d{2}$/; // Регулярное выражение для двузначного числа

//   if (numberPattern.test(enteredValue)) {
//     const enteredNumber = parseInt(enteredValue);
//     if (enteredNumber >= 10 && enteredNumber <= 99) {
//       console.log('Введено число:', enteredNumber);
//     } else {
//       console.log('Число должно быть от 10 до 99');
//     }
//   } else {
//     console.log('Некорректный ввод');
//   }
// });


// Добавляем поле для ввода числа на страницу
// BODY.prepend(numberField);


// ! Через INPUT
const numberInput = document.createElement('input');
numberInput.type = 'number';

// Устанавливаем атрибуты min и max для ограничения диапазона
numberInput.min = 10;
numberInput.max = 99;

numberInput.addEventListener('input', function() {
  const enteredValue = parseInt(numberInput.value);

  if (isNaN(enteredValue) || enteredValue < 10 || enteredValue > 99) {
    // Если введено некорректное значение, очищаем поле ввода
    numberInput.value = '';
  }
});

// Добавляем поле ввода на страницу
BODY.prepend(numberInput);




// ! Переделать на классы
// ! ТУТ создаём линии и ячейки и присваиваем каждой свой атрибут

const createField = () => {
  CONTAINER.innerHTML = '';

  for(let i = 1; i <= FIELD_SIZE; i++) {
    const LINE = document.createElement('div');
    CONTAINER.classList = 'container';
    LINE.classList = 'line';
    LINE.setAttribute('data-line-number', `${i}`)

    for(let j = 1; j <= FIELD_SIZE; j++) {
      const CELL_BOX = document.createElement('div');
      CELL_BOX.classList = 'cell-box';

      const CELL = document.createElement('div');
      CELL.classList = 'cell cell-shadow';
      CELL.setAttribute('data-cell-number', `${i}-${j}`);

      LINE.append(CELL_BOX);
      CELL_BOX.append(CELL);
    }
    CONTAINER.append(LINE);
  }
}
createField()


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
  numberCell.style.fontWeight = '900';
  numberCell.style.fontFamily = 'Arial';

  const currentValue = parseInt(numberCell.textContent);

  if (!isNaN(currentValue)) {
    // Если текущее значение не NaN (число), то увеличиваем его на 1
    numberCell.textContent = currentValue + 1;

    // Проверяем, есть ли цвет для текущего значения в объекте
    const color = NUMBER_COLORS.hasOwnProperty(currentValue) ? NUMBER_COLORS[currentValue] : '#0000FF'; // По умолчанию: Синий
    numberCell.style.color = color;
    } else {
    // Если текущее значение NaN (не число), то устанавливаем значение 1 и цвет красный
    numberCell.textContent = 1;
    numberCell.style.color = '#0000FF';
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



// ! Установка уровня игры
const chooseGameDifficulty = (evt) => {
  if (evt.target !== LEVEL_BTN_BOX) {
    evt.stopPropagation()
    const btn = evt.target.dataset.level;

    if(FIELD_SIZE !== LEVELS[btn] && btn !== 'start') {
      FIELD_SIZE = LEVELS[btn];
      restartGame();
    }
  }
}

LEVEL_BTN_BOX.addEventListener('click', chooseGameDifficulty);






const renderField = (evt) => {

  if (evt.target !== CONTAINER) {
    evt.stopPropagation()

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
const restartGame = () => {
  fieldClick = 0;
  leftClickCount = 0;
  openedCells = [];
  flagCollection = [];
  createField();
}


const btnClick = (evt) => {
  restartGame();
}

const btnStart = BTN.addEventListener('click', btnClick);

