var slider_img = document.querySelector('.slider-img');
var images = ['1.png', '2.png', '3.png', '4.png', '5.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
  i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
  i++;
	return setImg();			 
}

function prevDialog(){
  clearDialogue();
  dialog = dialogList[i],
  initial = 0;
  individual = dialogs[initial].split('');
  createDiag(dialog);				 
}

function nextDialog(){
  clearDialogue();
	dialog = dialogList[i],
  initial = 0;
  individual = dialogs[initial].split('');
  createDiag(dialog);				 
}

function clearDialogue() {
  $("#dialog").text("")
}
	

function setImg(){
	return slider_img.setAttribute('src', "./img/"+images[i]);
	
}

 // RPG

 var dialogList = [
  ["Step 1: Go to the quizlet you want to print."],
  ["Step 2: Go to the quizlet you want to print."],
  ["Step 3: Go to the quizlet you want to print."],
  ["Step 4: Go to the quizlet you want to print."],
  ["Step 5: Go to the quizlet you want to print."],
 ]

 var dialogs = ["Step 1: Go to the quizlet you want to print."],
    initial = 0;
    individual = dialogs[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){
        
      setTimeout(function(){
        $('#dialog').text($('#dialog').text() +   dialog[i]);
        if (i == dialog.length-1 ) {
          $('#dialog').prepend('<div id="arrow"></div>');
          Mousetrap.bind('enter', function() {
            if (dialogs[initial+1]) {
              $('#dialog').text('');
              initial += 1;
              individual = dialogs[initial].split('');
              createDiag( individual );
            }
          });
        }
      }, 50*i);  
    
    }(i));
    
  }

}

createDiag( individual );