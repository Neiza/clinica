
function PatientData (name,lastname,age,gender,city,country){
  this.name=name;
  this.lastname=lastname;
  this.age=age;
  this.gender=gender;
  this.city=city;
  this.country=country;
  this.file    = function(){
  record.innerHTML= "Nombre: " + this.name +"\n" + this.lastname + "<br>"+
                    "Edad: " + this.age + "<br>"+
                    "País: " + this.country;

  }
}

var inputName     = document.getElementsByTagName("input")[0];
var inputLastName = document.getElementsByTagName("input")[1];
var inputAge      = document.getElementsByTagName("input")[2];
var inputGender   = document.getElementsByTagName("input")[3];
var inputCity     = document.getElementsByTagName("input")[4];
var inputCountry  = document.getElementsByTagName("input")[5];

var addButton = document.getElementById("add");

var record = document.getElementById("record");

var all=[];

window.addEventListener("load", function(){
    addButton.addEventListener("click", function(event){
    event.preventDefault();
    var allPatient = document.createElement("div")
    var pData     = document.createElement("p")

    allPatient.appendChild(pData);
    record.appendChild(allPatient);

    var patient = new PatientData(inputName.value, inputLastName.value, inputAge.value, inputGender.value, inputCity.value, inputCountry.value);
    patient.file();

    all.push(patient);
    });
});
