function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayByMusicians = [];
  
  for(var i = 0; i < musicians.length; i++) {
    instrumentsPlayByMusicians.push(`${musicians[i]} plays ${instruments[i]}`);     
  }
  return instrumentsPlayByMusicians;
}

function johnLennonFacts(facts) {
  var strings = [],
      counter = 0;
      
  while ( counter < facts.length ) {
    strings.push(`${facts[counter]}!!!`);   
  }
  
  return strings;
}


function iLoveTheBeatles(number) {
  var array = [];
  
  var i = 0;

  do {
    i = i + 1;
    result = result + i;
  } while (i < 5);
  
}