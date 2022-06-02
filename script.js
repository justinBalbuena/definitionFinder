// get an input variable for both the word as well as the type of classification, adj verb etc
let baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

$("#theButton").click(function () {
  let wordInput = $("#wordInput").val().toLowerCase();
  let partInput = $("#partOfSpeech").val().toLowerCase();
  let defNum = $("#number").val();
  let customApiUrl = baseUrl + wordInput;

  if(wordInput === "" || partInput === "") {
     alert("You didn't type anything");
     return;
  }
  if(defNum === "") {
    defNum = 0;
  }
  
  //$("#test").append("Got Here");
  
  fetch(customApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //$("#test").append(data[0].meanings[0].definitions[0].definition); //[0].meanings[0].definitions[0].defintion);
      
      for(let i = 0; i < data[0].meanings.length; i++) {
          if(data[0].meanings[i].partOfSpeech == partInput) {
            $("#test").append(`<br>` + data[0].meanings[i].definitions[defNum].definition);
          }
      }
      
    
  });
});
