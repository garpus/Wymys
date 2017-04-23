function loadDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
xhttp.open("GET", "files/tab.xml", true);
xhttp.send();
}
function myFunction(xml) {
var i;
var xmlDoc = xml.responseXML;
var table="<thead><tr><th>Imie</th><th>Nazwisko</th><th>Tytul</th><th>Cena</th><th id='data'>Data</th><th>Opis</th></tr></thead><tbody>";
var x = xmlDoc.getElementsByTagName("book");
for (i = 0; i <x.length; i++) {
  table += "<tr><td data-label='Imie'>" +
  x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
  "</td><td data-label='Nazwisko'>" +
  x[i].getElementsByTagName("surname")[0].childNodes[0].nodeValue +
  "</td><td data-label='Tytul'>" +
  x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
  "</td><td data-label='Cena'>" +
  x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
 "</td><td id='data' data-label='Data'>" +
  x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
  "</td><td data-label='Opis'>" +
  x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
  "</td></tr>";
}
  table +="</tbody>";
  table +="<tfoot><tr><td colspan='6'>Dane Wypisane</td></tr></tfoot>";
document.getElementById("tab").innerHTML = table;
}
