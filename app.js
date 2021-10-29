//create the constructor
function User(email,password,first,last,age,address,phone,payment,color){
    this.email=email;
    this.password=password;
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.address=address,
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

function registerUser(){
    //get and store the values from the input
    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let firstName=$("#txtFirst").val();
    let lastName=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    console.log(email,password,firstName,lastName,age,address,phone,payment,color);
    //create a user
    let user=new User(email,password,firstName,lastName,age,address,phone,payment,color,);
    
    saveUser(user);
    clear();
}
function clear(){
    $("#txtEmail").val("");//clear an input
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#txtColor").val("");







}








function init(){
    console.log("User Register System");
    $("#btn-register").click(registerUser);
}

window.onload=init;