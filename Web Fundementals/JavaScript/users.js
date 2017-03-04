/* Javascript file for Users Exercise
2 Mar 2017
Scott
*/

//Call Backs

var data =   "<tr><td>Jill</td><td>Smith</td><td>50</td><td>50</td></tr>"

$(document).ready(function(){

  $("button").click(function(){
    $("table").append(data);
  });



  });
