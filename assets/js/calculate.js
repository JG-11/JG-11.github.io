function calculate(){
  var score = 0

  if(document.getElementById("formCheck-1").checked){
    score += 1
  }

  if(document.getElementById("formCheck-4").checked){
    score += 1
  }

  if(document.getElementById("formCheck-5").checked){
    score += 1
  }

  if(document.getElementById("formCheck-7").checked){
    score += 1
  }

  if(document.getElementById("formCheck-10").checked){
    score += 1
  }

  document.getElementById("result-text").innerHTML = score * 20 + "%"
  $('.progress-bar').css('width', score * 20 + '%').attr('aria-valuenow', score);
}
