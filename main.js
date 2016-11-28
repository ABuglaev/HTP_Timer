var minsLeft, timeLeft, h, m, s, k;

var start = function() {
  var f;
  clearInterval(k);

  minsLeft =  parseInt( document.getElementById('setTimer').value );

  h = Math.floor(minsLeft/60);
  m = minsLeft % 60;
  s = 59;
  
  if (m === 0) {
    h--;
    m = 59;
    } else if (m > 0) {
      m--;
  };

  document.getElementById('display').innerHTML = h +': ' + m + ': ' + s;

          f = function() {

            if (s == 0) {
              s = 60;   
              if (m == 0) { 
                m = 60;
                h--;
              };
              m--;
            };
            s--;

            if ( +s < 10 ) {s = '0' + s};
            if ( +m < 10 ) {m = '0' + m};

            document.getElementById('display').innerHTML = h + ' : ' + m + ' : ' + s;

            s = parseInt(s);
            m = parseInt(m);

          };

  k = setInterval(f, 1000);

};

document.getElementById('start').addEventListener('click', start);