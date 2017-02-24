//1
function Print1to255(){
    for (var i = 1;1<=255;i++ ){
      console.log(i);
    }
  }

  //2
  function PrintOdds1to255(){
      for (var i = 1;1<=255;i +=2 ){
        console.log(i);
      }
    }

//3
function PrintIntsAndSum0to255(){
  var sum = 0;
    for (var i = 1; i<=255;i++ ){
      console.log(i);
      sum += i;
      console.log(sum);
    }
  }

  //4
funtion PrintArrayValls(arr){
  for (var i=0;i<array.length;i++){
    console.log(i);
  }
}
//5
funtion PrintMaxOfArray(arr){
  var max = 0;
  for (var i =0;i<array.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }
  }
  console.log(max);
}
//6
function PrintAverageOfArray(arr){
  var sum = 0;
  for (var i =0;i<array.length; i++){
    sum += arr[i];
  }
  console.log(sum/array.length);
}

//7
function ReturnOddsArray1to255(arr){
  var odds = [];
    for (var i = 1;1<=255;i +=2 ){
      odds.push(arr[i]);
    }
    return odds;
  }

  //8

function SquareArrayVals(arr){
  for (var i =0;i<array.length; i++){
    arr[i] *= arr[i];
  }
}

//9

funtion ReturnArrayCountGreaterThanY(arr,y){
  var count = 0;
  for (var i =0;i<array.length; i++){
    if (arr[i] < y){
      count++;
    }
  }
  retun (count);
}

//10
function ZeroOutArrayNegatuveVals(arr) {
  for (var i =0;i<array.length; i++){
    if (arr[i] < 0){
      arr[i]=0;
    }
}

//11
function PrintMaxMinAverageArrayValls(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0;
  for (var i =0;i<array.length; i++){
    if (max < arr[i]){
      max =arr[i];
      }
    if (min > arr[i]){
      min = arr[i];
    }
    sum += arr[i];
    }
  Console.log(max,min,sum/arr.length);
}

//12

function ShiftArrayValsLeft (arr){
for (var i =1;i<array.length; i++){
      arr[i-1] = arr[i];
}

}


//13

function SwapStringFarArrayNegativeVals(arr){
  for (var i =0;i<array.length; i++){
}
