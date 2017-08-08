<!DOCTYPE html>
<html>
  <head>
    <title>Bathroom Accessibility</title>
    <style>
       #map {
        height: 400px;
        width: 100%;
       }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="filter_functions.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <link rel="stylesheet" type="text/CSS" href="mission_style.css">
  <script src="bathroomList.js"></script>
  <script src="bathroom_map.js"></script>
  <script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMwYbU5tgheDwzUtKQEUz_TBz-DU2GlTg&callback=initMap">
  </script>
  </head>


  <body onload = "getInitialLocation()">

    <!--navigation bar-->
    <ul>
      <li><a href="bathroom_final_project.html">Map</a></li>
      <li><a href="list_of_filtered_bathrooms.html">Bathroom Database</a></li>
      <li><a href="mission_page.html">Our Mission</a></li>
      <li><a href="resources_page.html">Resources Used</a></li>
    </ul>
    <script type="text/javascript">
    var bathroomList = [];
    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
              if(document.getElementById("unisex").checked == true && document.getElementById("accessible").checked == true && document.getElementById("changing_table").checked == true) {
                        bathroomList = showBathroomWithAll(bathrooms);
                  }
              else if(document.getElementById("unisex").checked == true && document.getElementById("accessible").checked == true) {
                        bathroomList = showUnisex_Accessible(bathrooms);
                  }
              else if(document.getElementById("accessible").checked == true && document.getElementById("changing_table").checked == true ) {
                        bathroomList = showAccessible_ChangingTable(bathrooms);
                  }
              else if(document.getElementById("unisex").checked == true && document.getElementById("changing_table").checked == true) {
                        bathroomList = showUnisex_ChangingTable(bathrooms);
                      }
              else if(document.getElementById("unisex").checked == true) {
                  bathroomList = showUnisex(bathrooms);
              }
              else if(document.getElementById("accessible").checked == true) {
                   bathroomList = showAccessible(bathrooms);
                 }
              else if(document.getElementById("changing_table").checked == true) {
                    bathroomList = showChangingTable(bathrooms);
                  }
              }

              else if($(this).is(":not(:checked)")){
              if (document.getElementById("accessible").checked == true &&
              document.getElementById("changing_table").checked == true){
                bathroomList = showAccessible_ChangingTable(bathrooms);
              }
              else if (document.getElementById("accessible").checked == true &&
              document.getElementById("unisex").checked == true){
                bathroomList = showUnisex_Accessible(bathrooms);
              }
              else if (document.getElementById("unisex").checked == true &&
              document.getElementById("changing_table").checked == true){
                bathroomList = showUnisex_ChangingTable(bathrooms);
              }
              else if (document.getElementById("accessible").checked == true){
                bathroomList = showAccessible(bathrooms);
              }
              else if (document.getElementById("unisex").checked == true){
                bathroomList = showUnisex(bathrooms);
              }
              else if (document.getElementById("changing_table").checked == true){
                bathroomList = showChangingTable(bathrooms);
              }
              else {
                bathroomList = listout(bathrooms);
              }
           }
           printTest(bathroomList);
           initMap(bathroomList);
        });
    });

    function printTest(arr1) {
        var str = "Original length: " + bathrooms.length + "<br>New length: " + arr1.length + "<br>";
        for(var i = 0; i < arr1.length; i ++) {
              str += i + ") Name: " + arr1[i].name + "Id: " + arr1[i].id + "<br>";
        }
        document.getElementById("id01").innerHTML = str;
    }
    </script>
    <h3>Bathroom List</h3>
        <!--search bar at top-->
        <div class="container">
          <h2 id="text-center"> Enter Location: </h2>
          <form  id="location-form">
            <input type="text" id="location-input" class="form-control form-control-lg">
            <br>
            <button type="submit" class="btn btn-primary btn-block" onclick="initMap(bathrooms)">Submit</button> //use getLat() and getLong() to use latitude and longitude
          </form>
          <div class= "card-block" id="formatted-address"></div>
          <!--<div class= "card-block" id="address-components"></div>-->
          <div class= "card-block" id="geometry"></div>
        </div>

        <!--checkboxes-->
        <div class="container">
          <h2>Filter your bathrooms</h2>
          <p>Check any of the options below to make your search more specific.</p>
          <form>
            <div  class="checkbox">
              <label ><input type="checkbox" value="" id = "unisex">unisex</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" id = "accessible">accessible</label>
            </div>
            <div class="checkbox">
              <label><input type="checkbox" value="" id = "changing_table">changing table</label>
            </div>
          </form>
        </div>


    <script type="text/javascript">
    </script>
    <p id="demo"></p>
    <div id="map" ></div>
    <div id="id01">Hello</div>
  </body>
</html>
