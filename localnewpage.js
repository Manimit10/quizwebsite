var currentuser = localStorage.getItem('Current User');
   
    function start(){
    var headerTitle = document.getElementById('user');
    headerTitle.innerHTML =  JSON.parse(currentuser) + ' welcome to the test';
    }

    // document.addEventListener('DOMContentLoad', function(){
    //     IntersectionObserver();
    // });