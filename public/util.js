const CONTAINER = document.createElement('div');

// ! Генерация двумерного массива в зависимости от количества ячеек GAME_FIELD;
const getGenerateDubleArray = (GAME_FIELD) => {
  const FIELD_ARRAY = [];
  for(let i=1;i <= GAME_FIELD; i++ ) {
    const LINE_ARRAY = [];
    for(let j=1; j <= GAME_FIELD; j++){
      LINE_ARRAY.push(j);
    }
    FIELD_ARRAY.push(LINE_ARRAY);
  }
  return FIELD_ARRAY;
};

// !Проверка есть ли массив в двумерном массиве
const checkArray = (dubleArray, array) => dubleArray.some((index) => index[0] === array[0] && index[1] === array[1]);

// ! Меняем координату из 2-3 в [2,3]
const changeToNumber = (click) => {

  const LINE_NUMBER = click.match(/^([^-\s]+)/);
  const CELL_NUMBER = click.match(/-(.*)$/);
  const CLICK_CELL = [+LINE_NUMBER[1], +CELL_NUMBER[1]];
  return CLICK_CELL;
}


const generateRandomNumber = (mine, size, clickCell) => {

  const CLICK_CELL = changeToNumber(clickCell);
  const ALL_MINE_LOC = [];
  // let allMine = mine;


  for (let i = 1; ALL_MINE_LOC.length <= mine-1  ; i++ ) {
    const LINE = Math.floor(Math.random() * size) + 1;
    const CELL = Math.floor(Math.random() * size) + 1;

    // TODO: Не исключает из массива тех числе что уже есть
    // !ИСПРАВИТЬ
    if(ALL_MINE_LOC.length === 0) {
      ALL_MINE_LOC.push([LINE, CELL]);
    }
    else {

      // !ЗАМЕНИТЬ НА ФУНКЦИЮ В ПРОВЕРКЕ. (Всё равно не исключает уже ту бомбу что есть)
      if((ALL_MINE_LOC.some((coord) => coord[0] === CLICK_CELL[0] && coord[1] === CLICK_CELL[1]))) {
        const index = ALL_MINE_LOC.findIndex((coord) => coord[0] === CLICK_CELL[0] && coord[1] === CLICK_CELL[1]);
        ALL_MINE_LOC.splice(index, 1);
        // allMine--;
        // console.log(allMine)
      } else if ((ALL_MINE_LOC.some((coord) => coord[0] === LINE && coord[1] === CELL))){
        const index = ALL_MINE_LOC.findIndex((coord) => coord[0] === LINE && coord[1] === CELL);
        ALL_MINE_LOC.splice(index, 1);
        // allMine--;
      } else {
        ALL_MINE_LOC.push([LINE, CELL]);
      }
    }
  }


  return ALL_MINE_LOC;
};


export {getGenerateDubleArray, generateRandomNumber, changeToNumber, checkArray};