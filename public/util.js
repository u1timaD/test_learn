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

  const CLICK_CELL = clickCell;
  const ALL_MINE_LOC = [];

  // ALL_MINE_LOC.push(CLICK_CELL);

  for (let i = 1; ALL_MINE_LOC.length <= mine-1  ; i++ ) {
    const LINE = Math.floor(Math.random() * size) + 1;
    const CELL = Math.floor(Math.random() * size) + 1;
    let cellLocate = [LINE, CELL];
    // TODO: Не исключает из массива тех числе что уже есть
    // !ИСПРАВИТЬ

    //! если Масив Не нажатая точка
    if( !(CLICK_CELL[0] === LINE && CLICK_CELL[1] === CELL) && !checkArray(ALL_MINE_LOC, cellLocate)) {
      ALL_MINE_LOC.push(cellLocate);
    }

  }

  // console.log(ALL_MINE_LOC)
  return ALL_MINE_LOC;
};


export {getGenerateDubleArray, generateRandomNumber, changeToNumber, checkArray};