import { getGenerateDubleArray, generateRandomNumber, changeToNumber, checkArray} from './util.js';
import { NUMBER_COLORS, LEVELS } from './data.js';
import { changeShadowLayout } from './layout.js';
import { startTimer, stopTimer } from './timer.js';


const nasd = new Audio('../public/bomb.mp3');
console.log(nasd)
// !Заменить на запрос из input
let QUANTITY_MINE = 10;
// !Заменить на выбор с кнопок после 10\15\25 клеток
let FIELD_SIZE = 10;
let fieldClick = 0;
let leftClickCount = 0;
let flagCout = 0;



const FILED_ARRAY = getGenerateDubleArray(FIELD_SIZE);

let MINE_LOCATION;


const BODY = document.querySelector('.body');
const MAIN_SECTION = document.createElement('section');
MAIN_SECTION.classList = 'main-section';
const MAIN_BOX = document.createElement('div');
MAIN_BOX.classList = 'main-box';
const CONTAINER = document.createElement('div');

const MAIN_BTN = document.createElement('div');
MAIN_BTN.classList = 'main-btn';

const NEW_GAME = document.createElement('div');
NEW_GAME.classList = 'new-game-btn';
const NEW_GAME_TEXT = document.createElement('span');
NEW_GAME_TEXT.classList = 'new-game-text';
NEW_GAME_TEXT.textContent = 'New Game';
NEW_GAME.append(NEW_GAME_TEXT);

const SETTING_GAME = document.createElement('div');
SETTING_GAME.classList = 'setting-game-btn';
const SETTING_GAME_TEXT = document.createElement('span');
SETTING_GAME_TEXT.classList = 'setting-game-text';
SETTING_GAME_TEXT.textContent = 'Settings';
SETTING_GAME.append(SETTING_GAME_TEXT);


MAIN_SECTION.prepend(MAIN_BOX);
MAIN_BTN.prepend(NEW_GAME);
MAIN_BTN.prepend(SETTING_GAME);
MAIN_BOX.prepend(CONTAINER);
MAIN_BOX.prepend(MAIN_BTN);

BODY.prepend(MAIN_SECTION);


const POPUP = document.createElement('div');
POPUP.classList = 'popup popup-disable';
const POPUP_TEXT = document.createElement('span');
POPUP_TEXT.classList = 'popup-text';
POPUP.prepend(POPUP_TEXT);
BODY.prepend(POPUP);


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

LEVEL_BTN_BOX.append(EASY, MID, HARD);


// Создание элементов
const section = document.createElement('section');
section.className = 'setting setting-hidden';

const divContainer = document.createElement('div');
divContainer.className = 'setting-container';

const divHeader = document.createElement('div');
divHeader.className = 'setting-header';

const h2Title = document.createElement('h2');
h2Title.className = 'setting-title';
h2Title.textContent = 'Settings';

const divMenu = document.createElement('div');
divMenu.className = 'setting-menu';

const labelMines = document.createElement('label');
labelMines.className = 'title-fields';
labelMines.setAttribute('for', 'mines');
labelMines.textContent = 'Mines';


const inputMines = document.createElement('input');
inputMines.className = 'mines';
inputMines.setAttribute('id', 'mines');
inputMines.setAttribute('type', 'number');
inputMines.setAttribute('min', '10');
inputMines.setAttribute('max', '99');


const spanMines = document.createElement('span');
spanMines.className = 'error-text';
spanMines.textContent = 'A number from 10 to 99';

const fieldTitle = document.createElement('h3');
fieldTitle.className = 'field-size-title';
fieldTitle.textContent = 'Field Size';

// ! Тема
const labelTheme = document.createElement('label');
labelTheme.className = 'switch';
const switchInput = document.createElement('input');
switchInput.className = 'switch-input';
switchInput.type = 'checkbox';
switchInput.id = 'themeSwitch';
const switchSpan = document.createElement('span');
switchSpan.className = 'slider';
const switchTitle = document.createElement('h3');
switchTitle.className = 'switch-title';
switchTitle.textContent = 'Theme toggle';
labelTheme.append(switchInput);
labelTheme.append(switchSpan);
labelTheme.prepend(switchTitle);

const divBtns = document.createElement('div');
divBtns.className = 'setting-btns';

const btnSave = document.createElement('button');
btnSave.className = 'setting-btn save';

const spanSave = document.createElement('span');
spanSave.className = 'setting-text';
spanSave.textContent = 'save';

const btnExit = document.createElement('button');
btnExit.className = 'setting-btn exit';

const spanExit = document.createElement('span');
spanExit.className = 'setting-text';
spanExit.textContent = 'exit';


// !Клики, Таймер и флаги
const COUNT_BOX = document.createElement('div');
COUNT_BOX.classList = 'count-box';

const CLICK_COUNT_BOX = document.createElement('div');
CLICK_COUNT_BOX.classList = 'click-count-box';
const CLICK_COUNT_TITLE = document.createElement('span');
CLICK_COUNT_TITLE.classList = 'click-count-title';
CLICK_COUNT_TITLE.textContent = 'Clicks:';

const CLICK_COUNT = document.createElement('span');
CLICK_COUNT.classList = 'click-count';
CLICK_COUNT.textContent = `${leftClickCount}`;
CLICK_COUNT_BOX.append(CLICK_COUNT_TITLE);
CLICK_COUNT_BOX.append(CLICK_COUNT);

const TIME_COUNT_BOX = document.createElement('div');
TIME_COUNT_BOX.classList = 'time-count-box';
const TIME_COUNT_TITLE = document.createElement('span');
TIME_COUNT_TITLE.classList = 'time-count-title';
TIME_COUNT_TITLE.textContent = 'Time:';

const TIME_COUNT = document.createElement('span');
TIME_COUNT.classList = 'time-count';
TIME_COUNT.textContent = '00:00';
TIME_COUNT_BOX.append(TIME_COUNT_TITLE);
TIME_COUNT_BOX.append(TIME_COUNT);

const FLAG_COUNT_BOX = document.createElement('div');
FLAG_COUNT_BOX.classList = 'flag-count-box';
const FLAG_COUNT_TITLE = document.createElement('span');
FLAG_COUNT_TITLE.classList = 'flag-count-title';
FLAG_COUNT_TITLE.textContent = 'Flags:';

const FLAG_COUNT = document.createElement('span');
FLAG_COUNT.classList = 'flag-count';
FLAG_COUNT.textContent = `${flagCout}`;
FLAG_COUNT_BOX.append(FLAG_COUNT_TITLE);
FLAG_COUNT_BOX.append(FLAG_COUNT);

COUNT_BOX.append(CLICK_COUNT_BOX);
COUNT_BOX.append(FLAG_COUNT_BOX);
COUNT_BOX.append(TIME_COUNT_BOX);

MAIN_BOX.append(COUNT_BOX);





// Структурирование элементов
divHeader.appendChild(h2Title);

divMenu.appendChild(labelMines);
divMenu.appendChild(inputMines);
inputMines.after(spanMines);

divMenu.appendChild(LEVEL_BTN_BOX);
LEVEL_BTN_BOX.before(fieldTitle);
//!Тема
divMenu.appendChild(labelTheme);

divBtns.appendChild(btnSave);
btnSave.appendChild(spanSave);

divBtns.appendChild(btnExit);
btnExit.appendChild(spanExit);

divContainer.appendChild(divHeader);
divContainer.appendChild(divMenu);
divContainer.appendChild(divBtns);

section.appendChild(divContainer);

// Добавление в документ
BODY.prepend(section);


// ! Переделать на классы
// ! ТУТ создаём линии и ячейки и присваиваем каждой свой атрибут

const createField = () => {
  CONTAINER.innerHTML = '';

  for(let i = 1; i <= FIELD_SIZE; i++) {
    const LINE = document.createElement('div');
    CONTAINER.classList = 'container';
    LINE.classList = 'line';
    LINE.setAttribute('data-line-number', `${i}`);

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
};
createField();


// ! Добавляем картинку мины
const generateMine = (mineLocation) => {
  for(const mine of mineLocation) {
    const MINE_LINE = mine[0];
    const MINE_CELL = mine[1];
    const mineInCell = document.querySelector(`[data-cell-number="${MINE_LINE}-${MINE_CELL}"]`);
    mineInCell.classList.add('cell-picture');
  }
};


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
};


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
};


// !Установка цирф вокгур мин
const setNumberAround = (mine) => {
  mine.forEach((value, index, arr) => {
    findCellAroundMine(value, arr);
  });
};


// ! Массив открытых ячеек
let openedCells = [];

// ! Массив ячеек с флагами
let flagCollection = [];

const checkEmptyCell = (loc) => {
  const selectCells = loc;

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
};


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
};

// ! Открыаем всё поле при выигрыше / пройгрыше
const openAllmines = (arr) => {
  for(const item of arr) {
    item.classList.remove('cell-shadow');
  }
};

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
};

updateNamesWithMoves(leftClickCount);


let settingFieldSize = 10;

// ! Установка уровня игры
const chooseGameDifficulty = (evt) => {
  if (evt.target !== LEVEL_BTN_BOX) {
    evt.stopPropagation();
    const btn = evt.target.dataset.level;

    if(FIELD_SIZE !== LEVELS[btn]) {
      settingFieldSize = LEVELS[btn];

      // restartGame();
    }
  }
};

LEVEL_BTN_BOX.addEventListener('click', chooseGameDifficulty);

// ! Проверка количества мин
const saveSettingTheGame = (evt) => {
  FIELD_SIZE = settingFieldSize;
  const mines = document.querySelector('input');
  const errorText = document.querySelector('.error-text');
  const minesValue = mines.value;

  if (minesValue < 10 || minesValue > 99) {
    errorText.style.display = 'block';
  } else {
    QUANTITY_MINE = minesValue;
    errorText.style.display = 'none';
  }
};

const exitSettingTheGame = (evt) => {
  TIME_COUNT.textContent = '00:00';
  stopTimer()
  changeShadowLayout();
  const setting = document.querySelector('.setting');
  setting.classList.add('setting-hidden');
  restartGame();
};

const clickSettingBtn = (evt) => {
  const setting = document.querySelector('.setting');
  setting.classList.remove('setting-hidden');
  POPUP.classList.add('popup-disable');
  BODY.classList.add('shadow');
  BODY.classList.add('scroll-lock');
  // changeShadowLayout();
};


const SAVE = document.querySelector('.save');
const EXIT = document.querySelector('.exit');
const settingGameBtn = document.querySelector('.setting-game-btn');

SAVE.addEventListener('click', saveSettingTheGame);
EXIT.addEventListener('click', exitSettingTheGame);
settingGameBtn.addEventListener('click', clickSettingBtn);


const cloneMainBtn = MAIN_BTN.cloneNode(true);
const cloneSettingGameBtn = cloneMainBtn.querySelector('.setting-game-btn');
const cloneNewGameBtn = cloneMainBtn.querySelector('.new-game-btn');

cloneSettingGameBtn.addEventListener('click', clickSettingBtn);


const renderField = (evt) => {
  if (evt.target !== CONTAINER) {
    evt.stopPropagation();

    const CHECK_CELL = evt.target;
    const CLICK_CELL = evt.target.getAttribute('data-cell-number');
    const changeClickToArray = changeToNumber(CLICK_CELL);

    // !Подсчёт количества кликов
    if(CHECK_CELL.classList.contains('cell-shadow') && !(CHECK_CELL.classList.contains('cell-flag'))) {
      leftClickCount++;
      CLICK_COUNT.textContent = `${leftClickCount}`;
    }

    // ! Проверка на наличие флага в клетке
    if(!(CHECK_CELL.classList.contains('cell-flag'))) {

      // ! Самое первое нажатие
      if (!fieldClick) {
        fieldClick = 1;
        MINE_LOCATION = generateRandomNumber(QUANTITY_MINE, FIELD_SIZE, changeClickToArray);
        generateMine(MINE_LOCATION);
        setNumberAround(MINE_LOCATION);
        startTimer();
      }

      // ! Проверка если ткнул в пусое поле
      if (evt.target.textContent.length === 0 && !checkArray(MINE_LOCATION, changeClickToArray)) {
        const clickLocation = changeToNumber(CLICK_CELL);
        findEmptyCellAround(clickLocation);
      }

      else if (evt.target.textContent.length !== 0 && !checkArray(MINE_LOCATION, changeClickToArray)) {

        evt.target.style.backgroundColor = 'orange';
        evt.target.classList.remove('cell-shadow');


        const shadow = document.querySelectorAll('.cell-shadow');
        // ! Попап для победы
        // TODO: Дополнить временем и количество кликов

        if (+shadow.length === +QUANTITY_MINE) {

          // POPUP_WIN.textContent = `Ура! Вы нашли все мины за  секунд и ${updateNamesWithMoves(leftClickCount)}!`;
          POPUP_TEXT.textContent =  `Ура! Вы нашли все мины за ${TIME_COUNT.textContent} секунд и ${leftClickCount} ходов!`;
          openAllmines(shadow);
          POPUP.classList.remove('popup-disable');
          POPUP.append(cloneMainBtn);
          changeShadowLayout();
          stopTimer();

        }

      } else {
        console.log('Попал в бомбу');

        // ! Попап для пройгрыша
        const CELL = document.querySelectorAll('.cell');
        POPUP_TEXT.textContent =  'Игра окончена. Попробуйте еще раз';
        openAllmines(CELL);
        POPUP.classList.remove('popup-disable');
        POPUP.append(cloneMainBtn);
        changeShadowLayout();
        stopTimer();


      }
    }

  }
};


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
      flagCout--;
      FLAG_COUNT.textContent = `${flagCout}`;

    } else {
      flagCollection.push(changeClickToArray);
      flagCout++;
      FLAG_COUNT.textContent = `${flagCout}`;
    }
    clickCell.classList.toggle('cell-flag');
  }
};

CONTAINER.addEventListener('click', renderField);
CONTAINER.addEventListener('contextmenu', flagRender);


// ! Рестарт игры
const restartGame = () => {
  fieldClick = 0;
  leftClickCount = 0;
  CLICK_COUNT.textContent = 0;
  openedCells = [];
  flagCollection = [];
  createField();
};


const btnClick = (evt) => {
  TIME_COUNT.textContent = '00:00';
  stopTimer()
  POPUP.classList.add('popup-disable');
  BODY.classList.remove('shadow');
  BODY.classList.remove('scroll-lock');
  restartGame();
};

// !Новая игра
const btnStart = NEW_GAME.addEventListener('click', btnClick);
cloneNewGameBtn.addEventListener('click', btnClick);


//! Переключение темы
const themeSwitch = document.querySelector('#themeSwitch');
themeSwitch.addEventListener('change', function() {

  if (this.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});



