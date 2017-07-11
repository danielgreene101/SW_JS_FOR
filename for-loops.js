var j = 5;
for (i = 0; j <= 120; i++){
    j = j + 10;
    console.log(j);
}

var d = 4096;
for (i = 0; d > 1; i++){
    d = d / 2;
    console.log(d);
}

let pres = ["President #1 is George Washington", "President #2 is John Adams", "President #3 is Thomas Jefferson"];
for (let num = 0; num < 1; num++){
    console.log(pres);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies){
    console.log("antSpecies", prop);
}