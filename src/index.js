import 'bootstrap/dist/css/bootstrap.css';
import jokes from "./jokes";
document.getElementById('getAll').addEventListener('click', function (event) {
  var t;
  console.log(event);
fetch('http://localhost:8080/CA-2/api/phone/all').then
  ((response) => {
    return response.json();
  } )
.then 
  ((data) => {
    console.log(data);
    t = "<table class=\"table table-striped\">";
    t = t + "<thead>";
    t = t + "  <tr>";
    t = t + "    <th>ID</th>";
    t = t + "    <th>Number</th>";
    t = t + "    <th>Description</th>";
    t = t + "    <th></th>";
    t = t + "  </tr>";
    t = t + "</thead>";
    t = t + "<tbody>";
    data.forEach(element => {
      console.log(element);
      t = t + "<tr><td><button onclick=\"getPhoneByID(" + element.id + ");\">" + element.id + 
      "</button></td><td>" + element.number + "</td><td>" + element.description + 
      "</td><td><button onclick=\"phoneDelete(" + element.id + ");\">Del</button></td></tr>"; 
    });
    t = t + "</tbody></table>";

    document.getElementById("phone").innerHTML = t; 


  } );

}, false);


