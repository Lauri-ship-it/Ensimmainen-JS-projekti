function LaskeYhteen()
{
  var luku1, luku2;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  document.write("lukujen summa on: " + (luku1 + luku2));
}

function vertaile()
{
  var luku1, luku2;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
if(luku1 == luku2)
  {
    document.write("Luvut ovat yhtä suuret ");
  }
else if(luku1 < luku2)
  {
    document.write("Luku 2 on suurempi ");
  }
else
  {
    document.write("Luku 1 on suurempi ");
  }
}

function kerro()
{
var  luku1, luku2;
luku1 = parseInt(document.getElementById('eka').value);
luku2 = parseInt(document.getElementById('toka').value);
document.write("Kerrottuna luku on: " + (luku1 * luku2));
}

function jaa()
{
  var  luku1, luku2;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  document.write("Jaettuna luku on: " + (luku1 / luku2));
  }
