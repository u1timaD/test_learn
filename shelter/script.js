// //1. Входная точка языка

// const textArea = document.querySelector('#textarea');
// const word = document.querySelector('.word');



const body = document.querySelector('.body');
const textArea = document.createElement('textarea');
textArea.classList = 'textarea';
textArea.cols = '40';
textArea.rows = '10';
body.prepend(textArea);


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
	{'KeyQ' : ['q', 'Q', 'й', 'Й']},
	{'KeyW' : ['w', 'W', 'ц', 'Ц']},
	{'KeyE' : ['e', 'E', 'у', 'У']},
	{'KeyR' : ['r', 'R', 'к', 'К']},
	{'KeyT' : ['t', 'T', 'е', 'Е']},
	{'KeyY' : ['y', 'Y', 'н', 'Н']},
	{'KeyU' : ['u', 'U', 'г', 'Г']},
	{'KeyI' : ['i', 'I', 'ш', 'Ш']},
	{'KeyO' : ['o', 'O', 'щ', 'Щ']},
	{'KeyP' : ['p', 'P', 'з', 'З']},
	{'BracketLeft' : ['[', '{', 'х', 'Х']},
	{'BracketRight' : [']', '}', 'ъ', 'Ъ']},
	{'Backslash' : ['\\', '|', '\\', '/']},
	{'Delete' : ['Del', 'Del', 'Del', 'Del']},

	{'CapsLock' : ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock']},
	{'KeyA' : ['a', 'A', 'ф', 'Ф']},
	{'KeyS' : ['s', 'S', 'ы', 'Ы']},
	{'KeyD' : ['d', 'D', 'в', 'В']},
	{'KeyF' : ['f', 'F', 'а', 'А']},
	{'KeyG' : ['g', 'G', 'п', 'П']},
	{'KeyH' : ['h', 'H', 'р', 'Р']},
	{'KeyJ' : ['j', 'J', 'о', 'О']},
	{'KeyK' : ['k', 'K', 'л', 'Л']},
	{'KeyL' : ['l', 'L', 'д', 'Д']},
	{'Semicolon' : [';', ':', 'ж', 'Ж']},
	{'Quote' : ["'", '"', 'э', 'Э']},
	{'Enter' : ['Enter', 'Enter', 'Enter', 'Enter']},

	{'ShiftLeft' : ['Shift', 'Shift', 'Shift', 'Shift']},
	{'KeyZ' : ['z', 'Z', 'я', 'Я']},
	{'KeyX' : ['x', 'X', 'ч', 'Ч']},
	{'KeyC' : ['c', 'C', 'с', 'С']},
	{'KeyV' : ['v', 'V', 'м', 'М']},
	{'KeyB' : ['b', 'B', 'и', 'и']},
	{'KeyN' : ['n', 'N', 'т', 'Т']},
	{'KeyM' : ['m', 'M', 'ь', 'ь']},
	{'Comma' : [',', '<', 'б', 'Б']},
	{'Period' : ['.', '>', 'ю', 'Ю']},
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

let capsLock = 'small';
let language = 'en'


// отрисосвываем буквы на клавиатуру
// Создать кнопку через Class и добавить ей те или иные свойства
function getRenderWords(lang = 0){
	const keyName = document.querySelectorAll('.key-name');
		for (let i = 0; i < en.length; i++) {
      const word = Object.values(en[i])[0][lang];

      if(capsLock === 'small') {
        keyName[i].textContent = word;
        keyName[i].dataset.name = Object.keys(en[i])[0];
      } else {
        keyName[i].textContent = word.charAt(0).toUpperCase() + word.slice(1)
      }
		}
}
getRenderWords()



function getChangeForCapsLock() {
  if (capsLock === 'small' && language === 'en') {
    capsLock = 'big';
    getRenderWords();
  } else if (capsLock === 'big' && language === 'en') {
    capsLock = 'small';
    getRenderWords();
  } else if (capsLock === 'small' && language === 'ru') {
    capsLock = 'big';
    getRenderWords(2);
  } else if (capsLock === 'big' && language === 'ru') {
    capsLock = 'small';
    getRenderWords();
  }

}

function getChangeCase() {
  if (capsLock === 'small' && language === 'en') {
    getRenderWords(1)
    capsLock = 'big';
  } else if (capsLock === 'big' && language === 'en') {
    getRenderWords(0)
    capsLock = 'small';
  } else if (capsLock === 'small' && language === 'ru') {
    getRenderWords(3)
    capsLock = 'big';
  } else if (capsLock === 'big' && language === 'ru') {
    getRenderWords(2)
    capsLock = 'small';
  }
}

function getChangeLanguage() {
  if (language === 'en' && capsLock === 'small') {
    getRenderWords(2)
    language = 'ru';
  } else if (language === 'en' && capsLock === 'big') {
    getRenderWords(3)
    language = 'ru';
  } else if (language = 'ru' && capsLock === 'small') {
    getRenderWords(0)
    language = 'en';
  } else if (language = 'ru' && capsLock === 'big') {
    getRenderWords(1)
    language = 'en';
  }
}

function buttonClick (evt) {
	const point = evt.target.textContent;
	const start = textArea.selectionStart;
	const end = textArea.selectionEnd;

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
    getChangeCase()
  }

	else {
    evt.target.style.backgroundColor = 'green';
		textArea.setRangeText(point, start, end, "end");
    textArea.focus();
	}
}

function buttonOnClick (evt) {
  const point = evt.target.textContent;

  if (['Backspace', 'Tab', 'Del', 'Enter', 'Shift', 'Alt', 'Ctrl', ' ', 'Win'].includes(point)) {
    textArea.focus();
  }
  else {
    evt.target.style.backgroundColor = 'rebeccapurple';
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
    getChangeCase()
  } else if (key === 'CapsLock') {
    getChangeForCapsLock()
  } else {
    textArea.setRangeText(button, start, end, "end");
    textArea.focus();
  }
}

function pressOffButton (evt) {
  const key = evt.code;
  if (key === 'ShiftLeft' || key === 'ShiftRight') {
    getChangeCase()
  }
}

textArea.addEventListener('keydown', pressOnButton)
textArea.addEventListener('keyup', pressOffButton)







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


function runOnKeys(func, ...codes) {
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
    // func(language);
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

runOnKeys(
  getRenderWords,
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