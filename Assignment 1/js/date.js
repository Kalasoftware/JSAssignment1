// differce of date 
function dateDiff()
{
    var d1 = document.getElementById("date1").value;
    var d2 = document.getElementById("date2").value;

    var dt1 = new Date(d1)
    var dt2 = new Date(d2)

    dt1.setHours(0,0,0,0);
    dt2.setHours(0,0,0,0);

    var diffinminutes = dt2.getTime() - dt1.getTime();
    console.log(dt1)
    console.log(dt2);
    var diffinDays = Math.floor(diffinminutes/(1000*3600*24))
  
alert(diffinDays)
    var res = document.getElementById("diffresult")
    res.textContents = diffinDays;

}

// loop year checker 
function leapYearCheck()
{
    var inputy = document.getElementById("inputYear").value;
    if ((inputy % 4 === 0 && inputy % 100 !== 0) || inputy % 400 === 0) {
        document.getElementById("leapresult").innerHTML = `${inputy} is a leap year.`;
    } else {
        document.getElementById("leapresult").innerHTML = `${inputy} is not a leap year.`;
    }
}
//  calculate the age 
function calAge()
{
    let userdate = document.getElementById("agecal").value;
    let inputDate = new Date(userdate);
    let todayDate = new Date();
    console.log(userdate);
    console.log(todayDate);
    let timeDiff = todayDate.getTime() - inputDate.getTime();

    let yearDIff = Math.floor(timeDiff / (1000*3600*24*365) )
    console.log(yearDIff);
    document.getElementById("ageResult").innerHTML = `Your Age is ${yearDIff}`
}