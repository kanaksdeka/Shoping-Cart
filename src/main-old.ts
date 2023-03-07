console.log("Main TS File Messge")

//Print values from 1 to 5
for(let i=1; i<=5; i++) {
  console.log(i)
}

//Print value of i
//console.log("Value afte FOR", i)

//Anonymous function
let m = function() {
  return "JPMC"
}

//Arro function
let f = () => {
  return "JPMC"
}

console.log(m())
console.log(f())

//Type annotation - Explicit Declaration
let n:number;
//n = "abc"
n = 40;

function add(a:number,b:number): number {
  return a+b;
}
console.log("Add value = ", add(4, 5))

//Type Inference - Implecit Declaration
let s = "ABC"

function display () {
  console.log("Display functon")
}

