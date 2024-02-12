function nvalid() {
    var nme = document.forms["regForm"]["namin"].value;
    nmeerr.innerHTML = "";
    if (nme.length < 4) {
        nmeerr.innerHTML = "Please Enter valid length";
        return false;
    }
    else {
        nmeerr.style.color = "green"
        nmeerr.innerHTML = "Valid length";
        return true;
    }
}

function evalid() {
    var ein = document.forms["regForm"]["emailin"].value;
    nerr.innerHTML = "";
    if (ein.length < 4) {
        nerr.innerHTML = "Please Enter valid length";

        return false;
    }
    else {
        nerr.style.color = "green"
        nerr.innerHTML = "Valid length";
        return true;
    }
}

function gvalid() {
    var gen = document.forms["regForm"]["gender"];
    if (gen[0].checked || gen[1].checked) {
        if (gen[0].checked) {
            genderdata.innerHTML = "Gender : " + gen[0].value
        }
        else {
            genderdata.innerHTML = "Gender : " + gen[1].value
        }
        return true;
    }
    else {
        alert("Please Choose Your  Gender ")
        return false;
    }
}

function chvalid() {
    var hobdata = "";
    var hobb = document.forms["regForm"]["hobby[]"];
    for (var i = 0; i < hobb.length; i++) {
        if (hobb[i].checked) {
            hobdata += " " + hobb[i].value;
        }
    }

    if (hobdata == "") {

        alert("please Make sure to check atleast one box");
        return false;
    }
    else {
        checkdata.innerHTML = "checked : " + hobdata;
        return true;
    }
}

function validform() {
    if (nvalid() && evalid() && gvalid() && chvalid()) {
        namedata.innerHTML = "Name : " + document.forms["regForm"][0].value;

        emaildata.innerHTML = "Email :" + document.forms["regForm"][1].value;

        return false;
    }
    else {
        return false;
    }
}
