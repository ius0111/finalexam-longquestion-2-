function validate(){
    if(document.form1.present.value.length < 1){
        alert("Please fill the present !!!");
        return false;
    }
    return true;
}