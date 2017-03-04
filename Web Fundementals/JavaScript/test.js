var data =   "<tr><td>Jill</td><td>Smith</td><td>50</td><td>50</td></tr>"

$(document).ready(function(){

  $("button").click(function(){
    $("table, p").append(data);
  });



  });
