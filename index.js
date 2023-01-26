// Creating Variable & Targetting different class using DOM
var input_text = document.querySelector(".text_field");
var translated_text = document.querySelector(".output-result");
var btn = document.querySelector("button");


// Api Url configuration
 var url = "https://api.funtranslations.com/translate/minion.json";
function translator(texturl){
 return url + "?" + "text=" + texturl;
}

function errorhandle(error){
    console.log("Error : " + error);
}



// Click Event
btn.addEventListener("click",function(){
    var input = input_text.value;
    
    // translated_text.innerHTML= input;
    
      fetch(translator(input))
      .then(response=>response.json())
     .then(json => translated_text.innerHTML= json.contents.translated)
     .catch(errorhandle);
})