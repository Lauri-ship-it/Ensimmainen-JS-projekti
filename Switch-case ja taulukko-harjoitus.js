function pisteittenlasku() //teht 1
{
  var pisteet = 0;
  var textsana = document.getElementById('scrabbel').value;
  for(var i = 0; i < textsana.length; i++)
  {
    switch (textsana[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
        break;
      case 'o':
      case 'ä':
      case 'k':
      case 'l':
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
        pisteet+=2;
        break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
        pisteet+=3;
        break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
        pisteet+=4;
        break;
      case 'ö':
      case 'd':
      case 'Ö':
      case 'D':
        pisteet+=7;
        break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
        pisteet+=8;
        break;
      case 'c':
      case 'C':
        pisteet+=10;
        break;
      default:
        pisteet+=12;
    }
    document.getElementById('scrabul').innerHTML = "<p>Sanan" + " " + textsana + " " + "pisteet ovat:" + pisteet + "</p>";
  }
}

function Lotto() //teht 2
{
  var lotonro = [];
  var temp;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    temp = Math.floor(Math.random()*40)+1;
    lotonro[lotto] = temp;
  }
  document.getElementById('lotot').innerHTML = '<p>'+lotonro+'</p>';
}

function Mtaulukko() //teht 3
{
  var jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('tauluk').innerHTML = taulu;
}

function Annakortit() //teht 4
{
    var kasi = [''];
    var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
    var nrot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    laskuri = 0;
    for(var K = 0; K < maat.length; K++) {
        for(var L = 0; L < nrot.length; L++){
            if(K == maat.length-1 && L == nrot.length-1){
                kasi[laskuri] = maat[K] + nrot[L];
            }
            else{
                kasi[laskuri] = maat[K]+nrot[L];
                laskuri++;
            }
        }
    }
    var kortit = [''];
    for(var m = 0; m < 5; m++){
        temp = Math.floor(Math.random()*52);
        kortit[m] = kasi[temp];
    }
    document.getElementById('kasi').innerHTML = kortit;
}
