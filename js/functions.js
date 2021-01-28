var slider_img = document.querySelector('.slider-img');
var images = ['1.png', '2.png', '3.png', '4.png', '5.png'];
var i = 0;
var activeBox = true;

function prev(){
  if (activeBox) {
    return;
  } else { 
    if(initial <= 0) initial = images.length;
  console.log(initial);	
  $('#dialog').text('');
  initial -= 1;
  individual = dialogs[initial].split('');
  createDiag( individual );
  activeBox = true;
  return setImg();
}		
}

function next(){
  console.log(activeBox);
  if (activeBox) {
    return;
  } else { 
    if(initial >= images.length-1) initial = -1;
  $('#dialog').text('');
  initial += 1;
  console.log(initial);
  individual = dialogs[initial].split('');
  createDiag( individual );
  activeBox = true;
  return setImg();
}
}


function clearDialogue() {
  $("#dialog").text("")
}

	

function setImg(){
	return slider_img.setAttribute('src', "./img/"+images[initial]);
	
}

 // RPG


 var dialogs = [" Step 1: Go to the quizlet you want to print.",
  " Step 2: Press circled button.",
   " Step 3: Click 'Export'.", 
   " Step 4: The export window will show up. Now select custom inputs for both Input the codes 222 on the left and 777 on the right.",
   " Step 5: Click the “Copy text” button circled in red. Paste the text into the text box below.", ],
    initial = 0;
    individual = dialogs[initial].split('');

    function createDiag ( dialog ) {
      console.log("activated");
      setTimeout(function() {
        activeBox = false;
      }, 3000);
      for(i = 0; i < dialog.length; i++) {
        (function(i){
            
          setTimeout(function(){
            $('#dialog').text($('#dialog').text() +   dialog[i]);
            if (i == dialog.length-1 ) {
              $('#dialog').prepend('<div id="arrow"></div>');
                
            }
          }, 50*i);  
        }(i));
        
      }
      
    
    }

createDiag( individual );