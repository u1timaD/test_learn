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
	{'Digit1' : ['2', '@', '2', '"']},
	{'Digit1' : ['3', '#', '3', '№']},
	{'Digit1' : ['4', '$', '4', ';']},
	{'Digit1' : ['5', '%', '5', '%']},
	{'Digit1' : ['6', '^', '6', ':']},
	{'Digit1' : ['7', '&', '7', '?']},
	{'Digit1' : ['8', '*', '8', '*']},
	{'Digit1' : ['9', '(', '9', '(']},
	{'Digit1' : ['0', ')', '0', ')']},
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

	{'Shift' : ['Shift', 'Shift', 'Shift', 'Shift']},
	{'KeyA' : ['z', 'Z', 'я', 'Я']},
	{'KeyS' : ['x', 'X', 'ч', 'Ч']},
	{'KeyD' : ['c', 'C', 'с', 'С']},
	{'KeyF' : ['v', 'V', 'м', 'М']},
	{'KeyG' : ['b', 'B', 'и', 'и']},
	{'KeyH' : ['n', 'N', 'т', 'Т']},
	{'KeyJ' : ['m', 'M', 'ь', 'ь']},
	{'KeyK' : [',', '<', 'б', 'Б']},
	{'KeyK' : ['.', '>', 'ю', 'Ю']},
	{'Semicolon' : ['/', '?', '.', ',']},
	{'ArrowUp' : 'Up'},
	{'Shift' : ['Shift','Shift', 'Shift', 'Shift']},

	{'Control' : ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']},
	{'Meta' : ['Win', 'Win', 'Win', 'Win']},
	{'Alt' : ['Alt', 'Alt', 'Alt', 'Alt']},
	{'Space' : [' ', ' ', ' ', ' ']},
	{'Alt' : ['Alt', 'Alt', 'Alt', 'Alt']},
	{'ArrowLeft' : 'Left'},
	{'ArrowDown' : 'Down'},
	{'ArrowRight' : 'Right'},
	{'Control' : ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']},

]


// console.log(Object.values(en[1])[0])


document.addEventListener('keydown', (evt) => {
	console.log(evt)
})

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




// отрисосвываем буквы на клавиатуру
function getRenderWords(lang = 0){
	const keyName = document.querySelectorAll('.key-name');
		for (let i = 0; i < en.length; i++) {
      const word = Object.values(en[i])[0][lang];
      keyName[i].textContent = word;

      // if(capsLock) {
      // keyName[i].textContent = word.charAt(0).toUpperCase() + word.slice(1)
      // } else {

      // }
		}
}
getRenderWords()
const name = window.localStorage.getItem('lang');
window.localStorage.setItem('lang', language);

// Это вообще надо ??
let textAreaValues = []

// Индикатор изменения регистра


let capsLock = 'small';
let language = 'en'




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
  if (language === 'en' && capsLock) {
    getRenderWords(2)
    language = 'ru';
  } else if (language === 'en' && !capsLock) {
    getRenderWords(3)
    language = 'ru';
  } else if (language = 'ru' && capsLock) {
    getRenderWords(0)
    language = 'en';
  } else if (language = 'ru' && !capsLock) {
    getRenderWords(1)
    language = 'en';
  }
}

function buttonClick (evt) {
	const point = evt.target.textContent;
	const start = textArea.selectionStart;
	const end = textArea.selectionEnd;

	if (point === 'Backspace') {
		// вынести в util
		if (start === end) {
			textArea.setRangeText('', start-1, end, "end");
			textArea.focus();
		} else {
			textArea.setRangeText('', start, end, "select");
			textArea.focus();
		}
	} else if (point === 'Tab') {
    textArea.setRangeText('   ', start, end, "end");
		textArea.focus();
	} else if (point === 'Shift') {

	} else if (point === 'CapsLock') {

    // Создать отдельный объект для Капслока
    getChangeCase()
      // evt.target.addEventListener('click', ()=>{
      //   if (capsLock = 'small') {
      //     const dataLines = document.querySelector('[data-line="1"]');
      //     const dataButtons = dataLines.querySelectorAll('.key-button');

      //     for (let i=1; i<=10; i++) {
      //     dataButtons[i].classList.add('upperCase');
      //   }
      //   capsLock = 'big';

      // } else if (capsLock = 'big'){
      //   const dataLines = document.querySelector('[data-line="1"]');
      //   const dataButtons = dataLines.querySelectorAll('.key-button');
      //   console.log(dataButtons)
      //   for (let i=1; i<=10; i++) {
      //     dataButtons[i].classList.remove('upperCase');
      //   }
      //   capsLock = 'small'
      //   }
      // })
  }

	else {
		// вынести в util
		textArea.setRangeText(point, start, end, "end");
    textArea.focus();
	}
}





textArea.addEventListener('keydown', (evt) => {
  const start = textArea.selectionStart;
	const end = textArea.selectionEnd;
  const key = evt.key;


  if (key === 'Tab') {
    textArea.setRangeText('   ', start, end, "end");
    textArea.focus();
  } else if (key === 'CapsLock') {
    getChangeCase()
  } else if (key === 'Shift') {
    key.repeat = true;
    getChangeCase()
  } else if (key === 'Control' || key === 'Alt') {
    console.log("Привет")
  }

})

textArea.addEventListener('keyup', (evt) => {
  const start = textArea.selectionStart;
	const end = textArea.selectionEnd;
  const key = evt.key;

  if(key === 'Tab') {
      textArea.focus();
  } else if (key === 'Shift') {
    getChangeCase()
  }

})

const keyBoard = document.querySelector('.key-board');
keyBoard.addEventListener('click', buttonClick)

const keyLine = document.querySelector('[data-line="3"]');
const shiftButton = keyLine.querySelector('[data-button-name="0"]');
shiftButton.addEventListener('mousedown', () => {
  getChangeCase()

})

shiftButton.addEventListener('mouseup', () => {
  getChangeCase()
})


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