//1. Входная точка языка

const textArea = document.querySelector('#textarea');
const word = document.querySelector('.word');


const keyCodes = { 
	'KeyF' : ['f', 'а']

}

// console.log(keyCodes.KeyF[0])
// const codeValue =  Object.values(keyCodes);
// console.log(codeValue)
document.addEventListener('keydown',(evt) => {
	// for(let key in keyCodes) {
	// 	if(evt.keyCode == key) {
	// 		console.log(`Нажата ${key}`)
	// 	}
	// 	else {
	// 		console.log('Нихуя не нажато')
	// 	}
	// }

	
// console.log(typeof evt.code)
// console.log(typeof evt.code)
})

function hendleClikc (evt) {
	const code = evt.target.innerText;
	textArea.value += code;
	// word.removeEventListener();
}


word.addEventListener('click', hendleClikc )




const codeKeys = {}

document.addEventListener('keydown', (evt) => {
	let code = evt.code;
	let lastWordCode = [...code].slice(-1).join().toLowerCase();
	let keyRun = evt.key;
	codeKeys[code] = [lastWordCode, keyRun];
	console.log(codeKeys)
})