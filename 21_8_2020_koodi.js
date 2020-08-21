function neponu()
{
  var tarkastettava = document.getElementById('negposnum').value;
  if(tarkastettava >= 0)
  {
    document.getElementById('tulosta1').innerHTML = "Luku on positiivinen";
  }
  else {
    document.getElementById('tulosta1').innerHTML = "Luku on negatiivinen";
  }
}

function pylykaka()
{
  var viikol = document.getElementById('viikol').value;
  if(viikol == 1)
  {
    document.getElementById('tulosta2').innerHTML = "Maanantai";
  }
  else if(viikol == 2)
  {
    document.getElementById('tulosta2').innerHTML = "Tiistai";
  }
  else if(viikol == 3)
  {
    document.getElementById('tulosta2').innerHTML = "Keskiviikko";
  }
  else if(viikol == 4)
  {
    document.getElementById('tulosta2').innerHTML = "Torstai";
  }
  else if(viikol == 5)
  {
    document.getElementById('tulosta2').innerHTML = "Perjantai";
  }
  else if(viikol == 6)
  {
    document.getElementById('tulosta2').innerHTML = "Lauantai";
  }
  else if(viikol == 7)
  {
    document.getElementById('tulosta2').innerHTML = "Sunnuntai";
  }
  else {
      document.getElementById('tulosta2').innerHTML = "Luku ei kuulu viikonpäivälle";
  }
}
