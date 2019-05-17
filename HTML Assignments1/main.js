function Register(){
    document.getElementById("showDetails").style.display = "block";
    document.getElementById("registerDetails").style.display = "none";
    var name = document.getElementById("txtName").value;
    var email = document.getElementById("txtEmail").value;
    var pass = document.getElementById("txtPwd").value;
    var male = document.getElementById("genMal");
    var female = document.getElementById("genFe");

    if(male.checked){
        check = male.value;
    } 
    if(female.checked) {
        check = female.value;
    }
    var course = document.getElementById("lstCourse").value;
    var comments = document.getElementById("txtComnt").value;

    document.getElementById("lblName").innerText = name;
    document.getElementById("lblEmail").innerText = email;
    document.getElementById("lblPwd").innerText = pass;
    document.getElementById("lblGen").innerText = check;
    document.getElementById("lblCourse").innerText = course;
    document.getElementById("lblCom").innerText = comments;
}
function Reset(){
    document.getElementById("myForm").reset();
}