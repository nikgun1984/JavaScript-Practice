'use strict';
//AJAX asynchronous JS and XML

const inputRub = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');
//'change' when is not focused in the textbox 
inputRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');//collect settings for future request
    //           method, url, async, login, password GET/POST, www, true/false
    request.setRequestHeader('Content-type','application/json; charset=utf-8');// we need to know what exactly we send
                                                            // standard kodirovka
    request.send();// for GET there are no arguments, for POST we need to specify what we are sending
    //This action is asynchronous and we dont know how long to get info or post info from/to server

    /*'status' -- attribute status of our request 2xx - success, 3xx - redirection, 4xx - client error()
    ex: u entered a wrong url, 5xx - server errors
      'statusText' -- text description of the response from the server -- OK! Not Found... etc
      'response' -- response from the server -- the answer that was made by backend engineer
      'readyState' -- current state of our request:
             0 -- UNSENT --- object was created but method open() has not been called
             1 -- OPENED --- method open() was called
             2 -- HEADERS_RECEIVED --- method send() was called headers and status are accessible
             3 -- LOADING --- Loading; responseText contains partial data 
             4 -- DONE --- operation complete
        
    */

   //'readystatechange' is used not so often
//    request.addEventListener('readystatechange', () => {
//        if(request.readyState === 4 && request.status == 200){
//            console.log(request.response);
//            const data = JSON.parse(request.response);
//            inputUSD.value = (+inputRub.value/data.current.usd).toFixed(2); // round to 2 significant
//        } else { // we need to show something if server is not working
//            inputUSD.value = 'Something went wrong';
//        }
//    });
    request.addEventListener('load', () => {
        if(request.status == 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRub.value/data.current.usd).toFixed(2); // round to 2 significant
        } else { // we need to show something if server is not working
            inputUSD.value = 'Something went wrong';
        }
});

})