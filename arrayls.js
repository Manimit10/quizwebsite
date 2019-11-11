
var userNames = new Array();


function setName() {
    var newname = document.getElementById('input_id').value;
    //document.getElementById('alert').innerHTML =  'Hey ' + newname  + ' welcome to the test';
    
    localStorage.setItem("Current User", JSON.stringify(newname));
    setArr();
    
    //document.write(arry);
}
function setArr() {
    var newname = document.getElementById('input_id').value;
    userNames.push(newname);
    localStorage.setItem("All Users", JSON.stringify(userNames));
    var box = document.getElementById("box");
    //window.location.href = "user2.html";
    box.innerHTML = userNames.join ('<br/ >');
}

// let welcome = documehnt.getElementById('welcome').value;
// window.welcome.innerHTML('Welcome ' + );

    

    
    //badan ezafe shode
    //let itemsArray = localStorage.getItem('input_id') ? JSON.parse(localStorage.getItem('input_id')) : []
    //localStorage.setItem('input_id', JSON.stringify(itemsArray))

    //itemsArray.push(input.value)
    //localStorage.setItem('inpu_id', JSON.stringify(itemsArray))
  
// var student = {
//     set name(firstval) {
//         this.localStorage.setItem("name", JSON.stringify(this.firstval));
//     },
//     set summark(mark){
//         this.localStorage.setItem("mark", JSON.stringify(this.mark + this.mark));
//     }
// };
// student.firstval = document.getElementById(input_id).value;

  //var a = {
   //   alias : "mike_navarro",
  //    realAlias: "Mike Navarro"
  //}
  //var localStorage = [a, b, c, d]