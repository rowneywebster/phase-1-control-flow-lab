function scuberGreetingForFeet(ride){

  if (ride <= 400){
    return "This one is on me!";
  }
  else if (ride > 400 && ride < 2000){
    return "That will be twenty bucks."

  }
  else if (ride > 2000 && ride < 2500){
    return "I will gladly take your thirty bucks."
  }
  else 
  return 'No can do.'
}

scuberGreetingForFeet(199)
scuberGreetingForFeet(1500)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)

function ternaryCheckCity(city){
if (city == "NYC"){
return "Ok, sounds good."
}
else
return "No go."
}

ternaryCheckCity(Washington)

function switchOnCharmFromTip(tip){
  if (tip == "generous"){
    return "Thank you so much."
  }
  else if (tip == 'not as generous'){
    return 'Thank you.'
  }
  else
  return "Bye."
}

