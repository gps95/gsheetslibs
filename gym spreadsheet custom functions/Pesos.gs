function roundnearest(num,x=2.5){
  return Math.round(num/x)*x;
}

function pesolado(num,percent=1) {
  var aux = ((num*percent)-20)/2;
  return roundnearest(aux,2.5);
}

function pesos(num,percent=1){
  return String(roundnearest(num*percent,2.5))+"kg ("+ String(pesolado(num,percent)) + ")";
}

function calentar(num){
  return "5*"+pesos(num,0.3)+" ; 4*"+pesos(num,0.5)+" ; 3*"+pesos(num,0.65)+" ; 1-2*"+pesos(num,0.75);
}

function rangopesos(num,perc1,perc2){
  return pesos(num,perc1)+" - "+pesos(num,perc2);
}