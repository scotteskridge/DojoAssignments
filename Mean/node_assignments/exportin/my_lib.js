
module.exports = function export_me(text = "nope"){
  console.log("you succeeded", text)
  return{
    test: function(text){
      return `your interpolated some ${text}`
    }
  }
}

// export_me("yeah!")







class MathOpps{
  constructor(a,b){
    console.log("your useing math")
    this.a = a;
    this.b = b;
  }

  multiply(a,b){
    return a*b
  }
}

var someMath = new MathOpps
console.log(someMath.multiply(2,3))
// export {export_me, MathOpps};


function newObject(){

}
