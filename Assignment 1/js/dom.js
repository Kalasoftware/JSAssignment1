// populate combo box 
function adinc() {
    var nmes = addcinput.value.split(",")
    
    if (addcinput.value == "") {
        alert("blank name ");
    }
    addincountry.options[0] = new Option("Select Country", "")

    for (var i = 0; i < nmes.length; i++) {
        addincountry.options[i + 1] = new Option(nmes[i], nmes[i]);
    }

}
// count all h1 tags  and show its value 

function ch1()
{
    let allh1 = document.querySelectorAll("h1");
    let h1count = allh1.length;

    for(var i =0; i<allh1.length ; i++)
    {
        h1result.innerHTML = "</br>"+allh1[i].textContent + "<br>";
    }
    h1result.innerHTML += `Total H1 Tags: ${h1count}`
}
// change color of paragraph

function changeParaColor()
{
    var colov = document.getElementById("colorinput").value;
    var paraele = document.getElementById("paracolor");
    paraele.style.color = colov.toLowerCase();
    
}
// add row to table 
function addNewrow()
{
    var mtable = document.getElementById("myTable");
    var newRow =  document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.textContent="cellR"
    var cell2 = document.createElement("td");
    cell2.textContent="cellRR"
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    mtable.appendChild(newRow);
}
// resize the image 
function imgResize()
{
    var userWidth = document.getElementById("imgWidth").value;
    var userHeight = document.getElementById("imgHeight").value;
    var imageobj = document.getElementById("imgre");

    imageobj.style.width = userWidth + "px";
    imageobj.style.heigth = userHeight + "px";

}

function cdropitem()
{
    var dropw = document.getElementById("dropwala")
    var count = dropw.options.length;
    alert(`There are ${count} options `)
    for(var i=0 ; i<count; i++)
    {
        alert(dropw.options[i].value);
    }
}

window.addEventListener("resize",function(){
    var windowcon = document.getElementById("resizeWindow");
    windowcon.textContent = `Width : ${window.innerWidth} and Height : ${window.innerHeight}`
})