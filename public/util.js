

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

const getZegoApprove = (number) => {
  if(number.toString().length === 1) {
    return `0${number}`;
  } else {
    return number.toString();
  }
}

// !
const generateRandomNumber = (mine, size) => {
  // const MINE_LOC = new Map();
  const ALL_MINE_LOC = [];

  for (let i = 1; i <= mine; i++ ) {
    const LINE = Math.floor(Math.random() * size) + 1;
    const CELL = Math.floor(Math.random() * size) + 1;

    // TODO: Добавить числа в массив, пройтис по нему.
    // TODO: Если есть похожие, не добавлять (попробуй массив через Set)

    if(ALL_MINE_LOC.length === 0) {
      ALL_MINE_LOC.push([LINE, CELL]);
    }

    if(ALL_MINE_LOC.length !== 0) {

      // for(const row of ALL_MINE_LOC) {
      //   const MINE_LOC_CURRENT = [LINE, CELL];

      //   if(!(row.every((value, index)=> value === MINE_LOC_CURRENT[index]))) {

      //     ALL_MINE_LOC.push([LINE, CELL]);
      //   }
      // }
    }










      // MINE_LOC.push([LINE, CELL]);





    // const LINE = Math.floor(Math.random() * size) + 1;
    // const CELL = Math.floor(Math.random() * size) + 1;

    // MINE_LOC.forEach((value) => {
    //   if(!(value.line === LINE && value.cell === CELL)) {
    //     return {'line': LINE, 'cell': CELL};
    //   }
    //   else {
    //     // console.log({'line': LINE, 'cell': CELL});
    //     // console.log(value);
    //   }
    // });

    // MINE_LOC.set(i,{'line': LINE, 'cell': CELL});



  }

  return ALL_MINE_LOC;
  // return  MINE_LOC;
};


export {getGenerateDubleArray, generateRandomNumber};