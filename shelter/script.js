// //1. Входная точка языка

// const textArea = document.querySelector('#textarea');
// const word = document.querySelector('.word');



const body = document.querySelector('.body');
const textArea = document.createElement('textarea');


textArea.classList = 'textarea';
textArea.cols = '60';
textArea.rows = '10';
body.prepend(textArea);
textArea.focus();

const textAreaValue = localStorage.getItem('textAreaValue');
textArea.value = textAreaValue;



const info = document.createElement('div');
info.classList = 'info';
const infoBox = document.createElement('p');
infoBox.classList = 'info-box';
infoBox.textContent = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe ctrl + левый alt';
info.prepend(infoBox);
body.prepend(info);


const en = [
	{'Backquote' : ['`', '~', 'ё', 'Ё']},
	{'Digit1' : ['1', '!', '1', '!']},
	{'Digit2' : ['2', '@', '2', '"']},
	{'Digit3' : ['3', '#', '3', '№']},
	{'Digit4' : ['4', '$', '4', ';']},
	{'Digit5' : ['5', '%', '5', '%']},
	{'Digit6' : ['6', '^', '6', ':']},
	{'Digit7' : ['7', '&', '7', '?']},
	{'Digit8' : ['8', '*', '8', '*']},
	{'Digit9' : ['9', '(', '9', '(']},
	{'Digit0' : ['0', ')', '0', ')']},
	{'Minus' : ['-', '_', '-', '_']},
	{'Equal' : ['=', '+', '=', '+']},
	{'Backspace' : ['Backspace', 'Backspace', 'Backspace', 'Backspace']},

	{'Tab' : ['Tab', 'Tab', 'Tab', 'Tab']},
	{'KeyQ' : ['q', 'q', 'й', 'й']},
	{'KeyW' : ['w', 'w', 'ц', 'ц']},
	{'KeyE' : ['e', 'e', 'у', 'у']},
	{'KeyR' : ['r', 'r', 'к', 'к']},
	{'KeyT' : ['t', 't', 'е', 'е']},
	{'KeyY' : ['y', 'y', 'н', 'н']},
	{'KeyU' : ['u', 'u', 'г', 'г']},
	{'KeyI' : ['i', 'i', 'ш', 'ш']},
	{'KeyO' : ['o', 'o', 'щ', 'щ']},
	{'KeyP' : ['p', 'p', 'з', 'з']},
	{'BracketLeft' : ['[', '{', 'х', 'х']},
	{'BracketRight' : [']', '}', 'ъ', 'Ъ']},
	{'Backslash' : ['\\', '|', '\\', '/']},
	{'Delete' : ['Del', 'Del', 'Del', 'Del']},

	{'CapsLock' : ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock']},
	{'KeyA' : ['a', 'a', 'ф', 'ф']},
	{'KeyS' : ['s', 's', 'ы', 'ы']},
	{'KeyD' : ['d', 'd', 'в', 'в']},
	{'KeyF' : ['f', 'f', 'а', 'а']},
	{'KeyG' : ['g', 'g', 'п', 'п']},
	{'KeyH' : ['h', 'h', 'р', 'р']},
	{'KeyJ' : ['j', 'j', 'о', 'о']},
	{'KeyK' : ['k', 'k', 'л', 'л']},
	{'KeyL' : ['l', 'l', 'д', 'д']},
	{'Semicolon' : [';', ':', 'ж', 'ж']},
	{'Quote' : ["'", '"', 'э', 'э']},
	{'Enter' : ['Enter', 'Enter', 'Enter', 'Enter']},

	{'ShiftLeft' : ['Shift', 'Shift', 'Shift', 'Shift']},
	{'KeyZ' : ['z', 'z', 'я', 'я']},
	{'KeyX' : ['x', 'x', 'ч', 'ч']},
	{'KeyC' : ['c', 'c', 'с', 'с']},
	{'KeyV' : ['v', 'v', 'м', 'м']},
	{'KeyB' : ['b', 'b', 'и', 'и']},
	{'KeyN' : ['n', 'n', 'т', 'т']},
	{'KeyM' : ['m', 'm', 'ь', 'ь']},
	{'Comma' : [',', '<', 'б', 'б']},
	{'Period' : ['.', '>', 'ю', 'ю']},
	{'Slash' : ['/', '?', '.', ',']},
	{'ArrowUp' : ['\u25B2', '\u25B2', '\u25B2', '\u25B2']},
	{'ShiftRight' : ['Shift','Shift', 'Shift', 'Shift']},

	{'ControlLeft' : ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']},
	{'MetaLeft' : ['Win', 'Win', 'Win', 'Win']},
	{'AltLeft' : ['Alt', 'Alt', 'Alt', 'Alt']},
	{'Space' : [' ', ' ', ' ', ' ']},
	{'AltRight' : ['Alt', 'Alt', 'Alt', 'Alt']},
	{'ArrowLeft' : ['\u25C2', '\u25C2', '\u25C2', '\u25C2']},
	{'ArrowDown' : ['\u25BE', '\u25BE', '\u25BE', '\u25BE']},
	{'ArrowRight' : ['\u25B8', '\u25B8', '\u25B8', '\u25B8']},
	{'ControlRight' : ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']},

]


const getCreatKeyBoard = function(){
	const keyBoard = document.createElement('section');
	keyBoard.classList = 'key-board';

	// Разбить это на несколько функций
	for (let i = 0; i < 5; i ++) {
		const keyLine = document.createElement('div');
		keyLine.classList = 'key-line';
		keyLine.dataset.line = i;
		if(i === 0){
			for (let i = 0; i < 14; i++) {
				const keyButton = document.createElement('div');
				keyButton.classList = 'key-button';
				keyButton.dataset.buttonName = i;
				const keyName = document.createElement('span');
				keyName.classList = 'key-name';
				keyLine.append(keyButton);
				keyButton.append(keyName);
			}
		} else if (i === 1) {
			for (let i = 0; i < 15; i++) {
				const keyButton = document.createElement('div');
				keyButton.classList = 'key-button';
				keyButton.dataset.buttonName = i;
				const keyName = document.createElement('span');
				keyName.classList = 'key-name';
				keyLine.append(keyButton);
				keyButton.append(keyName);
			}
		} else if (i === 2) {
			for (let i = 0; i < 13; i++) {
				const keyButton = document.createElement('div');
				keyButton.classList = 'key-button';
				keyButton.dataset.buttonName = i;
				const keyName = document.createElement('span');
				keyName.classList = 'key-name';
				keyLine.append(keyButton);
				keyButton.append(keyName);
			}
		} else if (i === 3) {
			for (let i = 0; i < 13	; i++) {
				const keyButton = document.createElement('div');
				keyButton.classList = 'key-button';
				keyButton.dataset.buttonName = i;
				const keyName = document.createElement('span');
				keyName.classList = 'key-name';
				keyLine.append(keyButton);
				keyButton.append(keyName);
			}
		} else {
			for (let i = 0; i < 9; i++) {
				const keyButton = document.createElement('div');
				keyButton.classList = 'key-button';
				keyButton.dataset.buttonName = i;
				const keyName = document.createElement('span');
				keyName.classList = 'key-name';
				keyLine.append(keyButton);
				keyButton.append(keyName);
			}
		}
		keyBoard.append(keyLine);
	}
	return keyBoard
}

// Отрисовываем клавиатуру
textArea.insertAdjacentElement('afterend', getCreatKeyBoard());

let capsLock = 'off'
let size = 'lower';
let row = '0';

let language = 'en';
localStorage.setItem('lng', language);
const ad = localStorage.getItem('lng');

console.log(ad)

function changeToUpperCaseWord (str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 1) {
      words[i] = words[i].toUpperCase();
    }
  }
  return words.join(" ");
}

function changeToLowerCaseWord (str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 1) {
      words[i] = words[i].toLowerCase();
    }
  }
  return words.join(" ");
}

function getRenderWords(lang = 0) {
	const keyName = document.querySelectorAll('.key-name');
  for (let i = 0; i < en.length; i++) {
    const word = Object.values(en[i])[0][lang];


    if (capsLock === 'off' && size === 'lower' && row === '0') {
      keyName[i].textContent = changeToLowerCaseWord(word);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    }
    else if (capsLock === 'on' && size === 'upper' && row === '1') {
      keyName[i].textContent = changeToUpperCaseWord(word);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    }
    else if (capsLock === 'off' && size === 'upper' && row === '1') {
      keyName[i].textContent = changeToUpperCaseWord(word);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    }
    else if (capsLock === 'on' && size === 'lower' && row === '0') {
      keyName[i].textContent = changeToLowerCaseWord(word);
      keyName[i].dataset.name = Object.keys(en[i])[0];
    }
	}
}

getRenderWords()



const getChangeCapsLock = () => {
  if(language === 'en') {
    if (capsLock === 'off' && size === 'lower' && row === '0') {
      capsLock = 'on';
      size = 'upper'
      row = '1';
      getRenderWords(0)

    } else if (capsLock === 'on' && size === 'upper' && row === '1') {
      capsLock = 'off';
      size = 'lower';
      row = '0';
      getRenderWords(0)
    }
  }
  else if(language === 'ru') {
    if (capsLock === 'off' && size === 'lower' && row === '0') {
      capsLock = 'on';
      size = 'upper'
      row = '1';
      getRenderWords(2)

    } else if (capsLock === 'on' && size === 'upper' && row === '1') {
      capsLock = 'off';
      size = 'lower';
      row = '0';
      getRenderWords(2)
    }
  }
}

const getChangeCase = () => {
  if(language === 'en') {
    if(capsLock === 'off') {
      if (size === 'lower' && row === '0') {
       size = 'upper';
       row = '1';
       getRenderWords(1);
      }
      else if  (size === 'upper' && row === '1') {
       size = 'lower';
       row = '0';
       getRenderWords(0);
      }
     }
   else if(capsLock === 'on') {
     if(size === 'upper' && row === '1') {
       size = 'lower';
       row = '0';
       getRenderWords(1);
     }
     else if (size === 'lower' && row === '0') {
       size = 'upper';
       row = '1';
       getRenderWords(0);
     }
   }
  }
  else if(language === 'ru') {
    if(capsLock === 'off') {
      if (size === 'lower' && row === '0') {
       size = 'upper';
       row = '1';
       getRenderWords(3);
      }
      else if  (size === 'upper' && row === '1') {
       size = 'lower';
       row = '0';
       getRenderWords(2);
      }
     }
   else if(capsLock === 'on') {
     if(size === 'upper' && row === '1') {
       size = 'lower';
       row = '0';
       getRenderWords(3);
     }
     else if (size === 'lower' && row === '0') {
       size = 'upper';
       row = '1';
       getRenderWords(2);
     }
   }
  }
}


const getChangeLanguage = () => {
  if (capsLock === 'off' && language === 'en') {
    getRenderWords(2);
    language = 'ru';
  } else if (capsLock === 'off' && language === 'ru') {
      getRenderWords();
      language = 'en';
  } if (capsLock === 'on' && language === 'en') {
    getRenderWords(2);
    language = 'ru';
  } else if (capsLock === 'on' && language === 'ru') {
      getRenderWords();
      language = 'en';
  }
}





function ColorOfButtonOn (evt) {
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`);
  button.style.backgroundColor = 'white';
}

function ColorOfButtonOff (evt) {
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`);
  button.style.backgroundColor = '';
}


window.addEventListener('keydown', (evt) => {
  textArea.focus()
  ColorOfButtonOn(evt);
})

window.addEventListener('keyup', (evt) => {
  textArea.focus()
  ColorOfButtonOff(evt);
})


// ВВОД С КЛАВИАТУРЫ
function pressOnButton (evt) {
  evt.preventDefault()
  const start = textArea.selectionStart;
	const end = textArea.selectionEnd;
  const key = evt.code;
  const button = document.querySelector(`[data-name="${key}"]`).textContent;


  if (key === 'Backspace') {
		if (start === end) {
			textArea.setRangeText('', start-1, end, "end");
		} else {
			textArea.setRangeText('', start, end, "select");
		}
	} else if (key === 'Tab') {
    textArea.setRangeText('   ', start, end, "end");
	} else if (key === 'Delete') {
    textArea.setRangeText('', start, end+1, "end");
	} else if (key === 'Enter') {
    textArea.setRangeText('\n', start, end, "end");
	} else if (['AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft'].includes((key))) {
	} else if (key === 'ShiftLeft' || key === 'ShiftRight') {
    console.log('Сработало Нажатие');
    getChangeCase()
  } else if (key === 'CapsLock') {
      getChangeCapsLock()
  } else {
    textArea.setRangeText(button, start, end, "end");
    textArea.focus();
  }

  localStorage.setItem('textAreaValue', textArea.value);
}

function pressOffButton (evt) {
  const key = evt.code;
  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    console.log('Сработало отжатие');
    getChangeCase();
  }
}

textArea.addEventListener('keydown', pressOnButton)
textArea.addEventListener('keyup', pressOffButton)


function buttonClick (evt) {
  const parentClass = evt.target.className;
  if (parentClass === 'key-line' || parentClass === 'key-board') {
    textArea.focus();
  } else {
	const point = evt.target.textContent;
	const start = textArea.selectionStart;
	const end = textArea.selectionEnd;
  const buttonColor = evt.target.style;
  buttonColor.backgroundColor = 'green';


	if (point === 'Backspace') {
		if (start === end) {
			textArea.setRangeText('', start-1, end, "end");
		} else {
			textArea.setRangeText('', start, end, "select");
		}
	} else if (point === 'Tab') {
    textArea.setRangeText('   ', start, end, "end");
	} else if (point === 'Del') {
    textArea.setRangeText('', start, end+1, "end");
	} else if (point === 'Enter') {
    textArea.setRangeText('\n', start, end, "end");
	} else if (['Shift', 'Alt', 'Ctrl', 'Win'].includes((point))) {
	} else if (point === 'CapsLock') {
    getChangeCapsLock();
  }

	else {
		textArea.setRangeText(point, start, end, "end");
    textArea.focus();
	}
  localStorage.setItem('textAreaValue', textArea.value);
  }
}

function buttonOnClick (evt) {
  const parentClass = evt.target.className;
  if (parentClass === 'key-line' || parentClass === 'key-board') {
    textArea.focus();
  } else {
  const point = evt.target.textContent;
  const buttonColorDefault = evt.target.style;
  buttonColorDefault.backgroundColor = 'rebeccapurple';

  if (['Backspace', 'Tab', 'Del', 'Enter', 'Shift', 'Alt', 'Ctrl', ' ', 'Win'].includes(point)) {
    textArea.focus();
  }
  else {
    textArea.focus();
  }
}
}

const keyBoard = document.querySelector('.key-board');
keyBoard.addEventListener('mousedown', buttonClick)
keyBoard.addEventListener('mouseup', buttonOnClick);

// Хуйня для шифта
function getShiftClick(){
  getChangeCase()
}

const keyLine = document.querySelector('[data-line="3"]');
const shiftButtonFirst = keyLine.querySelector('[data-button-name="0"]');
const shiftButtonLast = keyLine.querySelector('[data-button-name="12"]');

shiftButtonFirst.addEventListener('mousedown', getShiftClick)
shiftButtonFirst.addEventListener('mouseup', getShiftClick);
shiftButtonLast.addEventListener('mousedown', getShiftClick)
shiftButtonLast.addEventListener('mouseup', getShiftClick);


function runOnKeys(...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    getChangeLanguage()
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

runOnKeys(
  "ControlLeft",
  "AltLeft"
);




// // Shift
// document.addEventListener('keydown', (evt) => {
//
// })

// document.addEventListener('keyup', (evt) => {
//
// })

// document.addEventListener('keydown', (evt) => {
//   if(evt.key === 'CapsLock') {
//     getRenderWords(1)
//   }
// })




// Способ через отмену Клавиатуры

// function textAreaClick (evt) {
// 	evt.preventDefault();
// 	const point = evt.key;

// 	if(point === 'Backspace') {
// 		// вынести в util
// 		textAreaValues.pop(point)
// 		textArea.value = textAreaValues.join('');
// 	}

//  	else {
// 		textAreaValues.push(point)
// 		textArea.value += textAreaValues.slice(-1);
//  }
// }


// textArea.addEventListener('keydown', textAreaClick)



// const keyCodes = {
// 	'KeyF' : ['f', 'а']

// }

// // console.log(keyCodes.KeyF[0])
// // const codeValue =  Object.values(keyCodes);
// // console.log(codeValue)
// document.addEventListener('keydown',(evt) => {
// 	// for(let key in keyCodes) {
// 	// 	if(evt.keyCode == key) {
// 	// 		console.log(`Нажата ${key}`)
// 	// 	}
// 	// 	else {
// 	// 		console.log('Нихуя не нажато')
// 	// 	}
// 	// }


// // console.log(typeof evt.code)
// // console.log(typeof evt.code)
// })

// function hendleClikc (evt) {
// 	const code = evt.target.innerText;
// 	textArea.value += code;
// 	// word.removeEventListener();
// }


// word.addEventListener('click', hendleClikc )




// const codeKeys = {}

// document.addEventListener('keydown', (evt) => {
// 	let code = evt.code;
// 	let lastWordCode = [...code].slice(-1).join().toLowerCase();
// 	let keyRun = evt.key;
// 	codeKeys[code] = [lastWordCode, keyRun];
// 	console.log(codeKeys)
// })



// class CreatGame {
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;

// 	}
// }