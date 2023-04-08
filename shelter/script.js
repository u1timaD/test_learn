


// function dubleArr (mass) {
// 	let mix = []
// 	let first = mix.push([...mass.slice(0,3)]);
// 	let second = mix.push([...mass.slice(3,6)]);
// 	let point = mass.slice(0,3).sort(() => Math.random() - 0.5)[0]
// 	let third = mix.push([...mass.slice(6), point])
// 	mainArr.length = 0;
//  return mix;
// }

// console.log(dubleArr(mainArr)) 
// console.log(mainArr)
//        ----------0  -------1
let mainArr = [0,1,2,3,4,5,6,7]

let mainArr48 = []


for ( let i = 0; i < 3; i++) {
	mainArr48.push(...mainArr)
}

let generateArray = () => {
	let mainArrShake = []
	for(let i=0; i<3;i++) {
		mainArr48.slice(0,6).sort(() => Math.random() - 0.5).push(mainArrShake);
		console.log(mainArr48)
	}
	return mainArrShake;
}
console.log(generateArray())

// console.log(mainArr48)


let MassMass = [];
let safe = [];
const SIZE = 8;


let arr = mainArr.sort(() => Math.random() - 0.5);

for (let i = 0; i < arr.length; i += SIZE ) {
	MassMass.push(arr.slice(i, i + SIZE));
}
MassMass.splice(2)

let next = (mas) => { 
	safe = [...mas[1]]
	MassMass[0] = MassMass[1]
	MassMass[1] = mainArr.filter(num => !safe.includes(num)).sort(() => Math.random() - 0.5).slice(0,SIZE);
	return;
}

let prev = (mas) => {
	MassMass[1] = MassMass[0];
	MassMass[0] = mainArr.filter(num => !MassMass[1].includes(num)).sort(() => Math.random() - 0.5).slice(0,SIZE);
	return;
}

// console.log(`${MassMass} - ВХОЖДЕНИЕ`)
// next (MassMass)
// console.log(MassMass)
// next (MassMass)
// console.log(`${MassMass} - ВПЕРЁД`)
// next(MassMass)
// console.log(`${MassMass} - ВПЕРЁД`)
// prev(MassMass)
// console.log(`${MassMass} - НАЗАД`)
// prev(MassMass)
// console.log(`${MassMass} - НАЗАД`)
// next (MassMass)
// console.log(`${MassMass} - ВПЕРЁД`)
// next(MassMass)
// console.log(`${MassMass} - ВПЕРЁД`)
