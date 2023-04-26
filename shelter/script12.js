


// // function dubleArr (mass) {
// // 	let mix = []
// // 	let first = mix.push([...mass.slice(0,3)]);
// // 	let second = mix.push([...mass.slice(3,6)]);
// // 	let point = mass.slice(0,3).sort(() => Math.random() - 0.5)[0]
// // 	let third = mix.push([...mass.slice(6), point])
// // 	mainArr.length = 0;
// //  return mix;
// // }

// // console.log(dubleArr(mainArr)) 
// // console.log(mainArr)
// //        ----------0  -------1
let mainArr = [0,1,2,3,4,5,6,7]

// let mainArr48 = []


// for ( let i = 0; i < 8; i++) {
// 	mainArr48.push(...mainArr)
// }

// let generateArray = () => {
// 	let mainArrShake = []
// 	for(let i=0; i<6;i++) {
// 		// mainArr48.slice(0,6).sort(() => Math.random() - 0.5).push(mainArrShake);
// 		// НЕ ЗАБУДЬ ПЕРЕМЕШАТЬ МАССИВ
// 		mainArrShake.push(mainArr48.splice(0,6));
		
// 	}
// 	return mainArrShake;
// }
// // console.log(generateArray())

// // console.log(mainArr48)


// let MassMass = [];
// let safe = [];
// const SIZE = 8;


// let arr = mainArr.sort(() => Math.random() - 0.5);

// for (let i = 0; i < arr.length; i += SIZE ) {
// 	MassMass.push(arr.slice(i, i + SIZE));
// }
// MassMass.splice(2)

// let next = (mas) => { 
// 	safe = [...mas[1]]
// 	MassMass[0] = MassMass[1]
// 	MassMass[1] = mainArr.filter(num => !safe.includes(num)).sort(() => Math.random() - 0.5).slice(0,SIZE);
// 	return;
// }

// let prev = (mas) => {
// 	MassMass[1] = MassMass[0];
// 	MassMass[0] = mainArr.filter(num => !MassMass[1].includes(num)).sort(() => Math.random() - 0.5).slice(0,SIZE);
// 	return;
// }

// // console.log(`${MassMass} - ВХОЖДЕНИЕ`)
// // next (MassMass)
// // console.log(MassMass)
// // next (MassMass)
// // console.log(`${MassMass} - ВПЕРЁД`)
// // next(MassMass)
// // console.log(`${MassMass} - ВПЕРЁД`)
// // prev(MassMass)
// // console.log(`${MassMass} - НАЗАД`)
// // prev(MassMass)
// // console.log(`${MassMass} - НАЗАД`)
// // next (MassMass)
// // console.log(`${MassMass} - ВПЕРЁД`)
// // next(MassMass)
// // console.log(`${MassMass} - ВПЕРЁД`)


// const MEDIA_DESKTOP = window.matchMedia('(min-width: 580px)');

// let point = 8;
// let number = 6;



// let catalogArray = []



//   for ( let i = 0; i < 6; i++) {
//     catalogArray.push(...mainArr)
//   }

//   console.log(catalogArray)



// let getCreat = function () {
// 	let mainArrShake = []

// 	for(let i=0; i<point; i++) {
// 		mainArrShake.push(catalogArray.slice(0, number));
//     // .sort(() => Math.random() - 0.5)
// 	}
	
// 	return  mainArrShake;
// }
// console.log(getCreat())

// 	function handleTabletChange(e) {
// 		if (e.matches) {
// 			point = 6;
// 			number = 8;
// 			console.log(getCreat())
// 		}
// 	console.log(catalogArray)
// 	  }
// 	  MEDIA_DESKTOP.addListener(handleTabletChange)
// 	  handleTabletChange(MEDIA_DESKTOP)
	


// 1. Проверяем массив на массивы
// 2. Если массивы если смотрим его длинн

