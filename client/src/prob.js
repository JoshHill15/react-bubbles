function filterStateNames(arr, type) {
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("outer", arr[i] + "'s length is", arr[i].length);
    if (type === "abb" && arr[i].length < 3) {
      console.log("inner", arr[i]);
      a.push(arr[i]);
    } else if ((type = "full" && arr[i].length > 2)) {
      console.log("full", arr[i]);
      a.push(arr[i]);
    }
  }
  return a;
}

// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"))

function cars(wheels, bodies, figures) {
  let car = 0;
  let w = Math.floor(wheels / 4);
  let f = Math.floor(figures / 2);
  console.log("W", w, "f", f, "bodies", bodies);
  while (w > 0 && bodies > 0 && f > 0) {
    car++;
    w--;
    bodies--;
    f--;
  }
  return car;
}

//    console.log(cars(43, 15, 87))

function mirror(arr) {
  let a = arr.sort((a, b) => a - b);
  let arr2 = [...a];
  arr2.pop();
  arr2.reverse();
  return [...a, ...arr2];
}

// console.log(mirror([0, 2, 4, 6]) )

function sum(arr) {
  if (arr.length < 1) {
    return 0;
  }
  console.log(arr);
  return arr[0] + sum(arr.slice(1));
}

// console.log(sum([1, 2, 3, 4]));

function preventDistractions(str) {
  let a = str.split(" ");
  let b = ["anime", "meme", "vine", "vines", "roasts", "Danny DeVito"]
  console.log(a)
  if (!a.includes(b.forEach(cv => cv))) {
    return "NO!";
  } else {
    return "Safe watching!";
  }
}

// console.log(preventDistractions("vin that butter my eggroll"))

function countUnique(s1, s2) {
  const arr = [...s1.split(""), ...s2.split("")].sort()
  const a = []
	for (let i = 1; i < arr.length; i++ ){
    if (arr[i-1] !== arr[i]) a.push(arr[i])
  }
  return a.length 
}
// console.log(countUnique("apple", "play"))

function calculator(num1, operator, num2) {
	if (operator === "/" && num2 === 0) return "Can't divide by 0!"
	return eval(num1 + operator + num2)
}
// console.log(calculator(1, "+", 3))

function sumOfCubes(nums) {
	return nums.map(cv => Math.pow(cv, 3))
	.reduce((acc,cv) => acc + cv, 0)
}

// console.log(sumOfCubes([3, 4, 5]))

function maximumScore(tileHand) {
  let a = 0
	tileHand.forEach(cv => {
    a += cv.score
  })
  return a
}

// console.log(maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]))

function doubleLetters(word) {
	let a = 0
	let arr = word.split("")
	for (let i = 0; i < arr.length; i++){
		if (arr[i] === arr[i+1]) {
			a++
		}
  }
	return a > 0 ? true : false
}

// console.log(doubleLetters("loop"))

function inBox(arr) {
  let a = 0
  for (let i = 1; i < arr.length;i++){
    if (arr[i-1] && arr[i+1] === "#" && arr[i] === "*") a ++
  }
  console.log("a", a)
  return a
}

// console.log(inBox([
//   "###",
//   "#*#",
//   "###"
// ]))

function sevenBoom(arr) {
  if (arr.includes(7)) return "Boom!"
  return "there is no 7 in the array"
}

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))

function rearrangedDifference(num) {
  let min = num.toString().split("").sort((a,b) => a - b).join("")
  let max = num.toString().split("").sort((a,b) => b - a).join("")
  return max - min
}

// console.log(rearrangedDifference(972882))

function gradingStudents(grades) {
   const a = []
   grades.forEach(cv => {
      let rem = 10 - (cv % 10)
      let rem2 = 5 - (cv % 10)
      if (cv < 38) a.push(cv) 
      else if ((cv % 10) > 7 === true) a.push(cv + rem) 
      else if ((cv % 10) > 2 && (cv % 10) < 5) a.push(cv + rem2)
      else a.push(cv)
  })
  return a
}

// console.log(gradingStudents([ 73, 67, 38, 33 ]))

var rotate = function(nums, k) {
    for (let i = 0; i <= k; i++){
      let last = nums.pop()
      nums.unshift(last)
    }
    return nums
};

// console.log(rotate([1,2,3,4,5,6,7]))

function isOmnipresent(arr, val) {
  let a = 0
	 arr.forEach(cv => {
     console.log(cv)
    if (cv.includes(val)) a++
  })
  return a > 3 ? true : false
}

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], ))

function boxSeq(step) {
  let a = 1
  if (step === 0) return 0
  for (let i = 0; i <= step; i++){
    if (i % 2 !== 0) a += 3
    if (i % 2 === 0) a -= 1
  }
  return a
}

// console.log(boxSeq(3))



// function oddishOrEvenish(num) {
// 	return num.toString().split("").reduce((a,cv) => a += Number(cv),0) % 2 === 0
// 		? "Evenish"
// 	  : "Oddish"
	
// }

// console.log(oddishOrEvenish(43))

function getTotalPrice(groceries) {
	return groceries.reduce((a,cv) => a + (cv.price * cv.quantity),0)
}

// function getTotalPrice(groceries){
//   return groceries.reduce((a,cv) => {
//      a + (cv.price * cv.quantity)
//   },0)
//}
// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]))

function canConcatenate(arr, target) {
  let a = arr.reduce((a,cv) => a.concat(cv),[])
  console.log(a.toString())
  return a.sort((a,b) => a-b).toString() === target.sort((a,b) => a-b).toString()
}

// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))

// function countOnes(i) {
//   let x = i.toString(2)
//   return x.split("").filter(num => num === "1").length
// }

// function countOnes(i) {
//   return i.length
// }
// console.log(countOnes(100))

function firstVowel(str) {
	let s = str.toLowerCase().split("")
	let num = 0
	for (let i = 0; i < s.length;i++){
		if (!s[i].indexOf("a"||"o"||"i"||"e"||"u") === -1) {
      console.log(s[i])
      num += i
    }
	}
	return num
}

console.log(firstVowel("hello"))