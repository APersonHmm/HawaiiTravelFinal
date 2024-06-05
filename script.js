var airplane = false;
var days = 0;
var islands = 0;
const selectText = document.getElementById("SelectTopText");



document.getElementById("home").addEventListener("click", function (e) {
  window.location.href='../index.html';
});

function hover(){
  document.getElementById("home").style.cursor = "pointer";
}

function del(name, num){
  switch(name){
    case "airplane":
      airplane = true;
      selectText.innerHTML = "Choose how many days you want your vacation to be:";
      document.getElementById("selectDay").style.display = 'grid';
      document.getElementById("travel").style.display = 'none';
      var pricesPerson = document.getElementsByClassName("pricePerson");
      pricesPerson[0].innerHTML = pricesPer(1, 4);
      pricesPerson[1].innerHTML = pricesPer(1, 7) + "-" + pricesPer(3, 7);
      pricesPerson[2].innerHTML = pricesPer(1, 10) + "-" + pricesPer(4, 10);
      break;
    case "boat":
      selectText.innerHTML = "Choose how many days you want your vacation to be:";
      document.getElementById("selectDay").style.display = 'grid';
      document.getElementById("travel").style.display = 'none';
      var pricesPerson = document.getElementsByClassName("pricePerson");
      pricesPerson[0].innerHTML = pricesPer(1, 4);
      pricesPerson[1].innerHTML = pricesPer(1, 7) + "-" + pricesPer(3, 7);
      pricesPerson[2].innerHTML = pricesPer(1, 10) + "-" + pricesPer(4, 10);
      break;
    case "hotel":
      selectText.innerHTML = "We offer hotels at cheap prices on our partner website:";
      document.getElementById("hotelText").style.display = 'flex';
      document.getElementById("travel").style.display = 'none';
      break;
    case "days":
      days = num;
      selectText.innerHTML = "Now choose how many islands you wish to go to:"
      document.getElementById("selectDay").style.display = 'none';
      document.getElementById("choiceIslands").style.display = 'grid';
      if(days==4){
        var is = document.getElementsByClassName("choiceIsland");
        for(var i = 1; i < is.length; i++){
          is[i].style.filter = 'grayscale(70%)';
        }
        setIsland(1);
      }
      else if(days == 7){
        var is = document.getElementsByClassName("choiceIsland");
        setIsland(1);
        setIsland(2);
        setIsland(3);
        is[is.length-1].style.filter = 'grayscale(70%)';
      }
      else{
        setIsland(1);
        setIsland(2);
        setIsland(3);
        setIsland(4);
      }
      break;
    case "choiceIsland":
      if(days == 4 && num != 1){
        return;
      }
      else if(days == 7 && num == 4){
        return;
      }
      islands = num;
      selectText.innerHTML = "Your package description:"
      document.getElementById('choiceIslands').style.display = 'none';
      document.getElementById('resultText').style.display = 'block';
      
      document.getElementById('days').innerHTML = days;
      if(islands == 1){
        document.getElementById('countIsland').innerHTML = islands + " island of your choice";
      }
      else{
        document.getElementById('countIsland').innerHTML = islands + " islands of your choice";
      }
      document.getElementById('price').innerHTML = price();

      if(airplane){
        document.getElementsByClassName('air')[0].innerHTML = "air";
        document.getElementsByClassName('air')[1].innerHTML = "air package will be from Orange County, LAX, San Francisco to the island of your choice";
      }
      else{
        document.getElementsByClassName('air')[0].innerHTML = "boat";
        document.getElementsByClassName('air')[1].innerHTML = "boat package will be from LA to to the island of your choice";
      }

  }
}

function setIsland(island){
  document.getElementsByClassName("resultIslandText")[island-1].innerHTML = "Price: " + prices(island);
}

function pricesPer(island, day) {
  if(airplane){
    if(day == 4){
      return "$850";
    }
    else{
      if(day == 7){
        if(island == 1){
          return "$1350";
        }
        else{
          return "$" + (1425 + 225*island);
        }
      }
      else{
        if(island < 3){
          return "$" + (1300 + 300*island);
        }
        else{
          return "$" + (1300 + 300*island -100);
        }
      }
    }
  }
  else{
    if(day == 4){
      return "$1575";
    }
    else{
      if(day == 7){
        if(island == 1){
          return "$1850";
        }
        else{
          return "$" + (1425 + 225*island + 700);
        }
      }
      else{
        if(island < 3){
          return "$" + (1300 + 300*island + 750);
        }
        else{
          return "$" + (1300 + 300*island + 650);
        }
      }
    }
  }
}

function prices(island) {
  if(airplane){
    if(days == 4){
      return "$850";
    }
    else{
      if(days == 7){
        if(island == 1){
          return "$1350";
        }
        else{
          return "$" + (1425 + 225*island);
        }
      }
      else{
        if(island < 3){
          return "$" + (1300 + 300*island);
        }
        else{
          return "$" + (1300 + 300*island -100);
        }
      }
    }
  }
  else{
    if(days == 4){
      return "$1575";
    }
    else{
      if(days == 7){
        if(island == 1){
          return "$1850";
        }
        else{
          return "$" + (1425 + 225*island + 700);
        }
      }
      else{
        if(island < 3){
          return "$" + (1300 + 300*island + 750);
        }
        else{
          return "$" + (1300 + 300*island + 650);
        }
      }
    }
  }
}

function price() {
  if(airplane){
    if(days == 4){
      return "$850";
    }
    else{
      if(days == 7){
        if(islands == 1){
          return "$1350";
        }
        else{
          return "$" + (1425 + 225*islands);
        }
      }
      else{
        if(islands < 3){
          return "$" + (1300 + 300*islands);
        }
        else{
          return "$" + (1300 + 300*islands -100);
        }
      }
    }
  }
  else{
    if(days == 4){
      return "$1575";
    }
    else{
      if(days == 7){
        if(islands == 1){
          return "$1850";
        }
        else{
          return "$" + (1425 + 225*islands + 700);
        }
      }
      else{
        if(islands < 3){
          return "$" + (1300 + 300*islands + 750);
        }
        else{
          return "$" + (1300 + 300*islands + 650);
        }
      }
    }
  }
}