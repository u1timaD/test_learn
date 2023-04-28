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
	{'KeyQ' : 'q'},
	{'KeyW' : 'w'},
	{'KeyE' : 'e'},
	{'KeyR' : 'r'},
	{'KeyT' : 't'},
	{'KeyY' : 'y'},
	{'KeyU' : 'u'},
	{'KeyI' : 'i'},
	{'KeyO' : 'o'},
	{'KeyP' : 'p'},
	{'BracketLeft' : '['},
	{'BracketRight' : ']'},
	{'Backslash' : '\\'}
]


// console.log(Object.values(en[1])[0])


document.addEventListener('keydown', (evt) => {
	console.log(evt)
})

const getCreatKeyBoard = function(){
	const keyBoard = document.createElement('section');
	keyBoard.classList = 'key-board';

	for (let i = 0; i < 5; i ++) {
		const keyLine = document.createElement('div');
		keyLine.classList = 'key-line'

		for (let i = 0; i < 14; i++) {
			const keyButton = document.createElement('div');
			keyButton.classList = 'key-button';
			const keyName = document.createElement('span');
			keyName.classList = 'key-name';
			keyLine.append(keyButton);
			keyButton.append(keyName);
		}
		
		keyBoard.append(keyLine);
	}
	
	return keyBoard
}

textArea.insertAdjacentElement('afterend', getCreatKeyBoard());


const keyName = document.querySelectorAll('.key-name');

for (let i = 0; i < en.length; i++) {
	keyName[i].textContent = Object.values(en[i])[0];
}

const keyBoard = document.querySelector('.key-board');
keyBoard.addEventListener('click', (evt) => {
	textArea.value += evt.target.textContent;
	
})


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