function runningLogger(){
  console.log("I am Running")
}

function multiplyByTen(num){
  return (num*10)
}

console.log(multiplyByTen(5))

function strOne(){
  return "First String"
}

function strTwo(){
  return "Second String"
}

console.log(strTwo())

function caller(param){
  if (typeof(param) == "function"){
    runningLogger()
    return param()
  }
}

console.log(caller(strOne))

function myDoubleLog(func1, func2){
  if (typeof(func1) == "function"){
    runningLogger()
    return func1()
  }
  if (typeof(func2) == "function"){
    runningLogger()
    return func2()
  }
}

function caller2(param){
  console.log("Thinking");
  if (typeof(param) == "function"){
    var myVar = setTimeout(param, 3000)
    console.log(myVar)

    console.log("Ending");

  }
}

caller2(strTwo);
console.log("testing the pause")
