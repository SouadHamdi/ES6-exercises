var drinkAbout = function(old) {

    if(old < 14){
      return ("drink toddy");
      }
      
      else if((old < 18) && (old >= 14)){
      return ("drink coke");
      }
      
      else if((old < 21) && (old >= 18)){
      return ("drink beer");
      }
      
      else if(old >= 21){
      return ("drink whisky");
      }
    }