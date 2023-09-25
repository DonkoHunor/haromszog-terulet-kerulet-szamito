import './style.css'
document.addEventListener('DOMContentLoaded',init);
document.getElementById('btn_szamit').addEventListener('click',szamit);

function init() {}

function szamit() {
  let a = parseFloat(document.getElementById('a-oldal').value);
  let b = parseFloat(document.getElementById('b-oldal').value);
  let c = parseFloat(document.getElementById('c-oldal').value);
  if (a + b <= c || a + c <= b || b + c <= a){
    document.getElementById('eredmeny').textContent = 'Hibás adatok! A háromszög nem szerkeszthető';
  }
  else {
    const haromszog = {
      a: a,
      b: b,
      c: c,
      kerulet: function() {
        return this.a+this.b+this.c;
      },
      terulet: function() {
        const s  = this.kerulet() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
      },
      keruletEsTerulet() {
        return `Terület: ${this.terulet()} - Kerület: ${this.kerulet()}`;
      }
    };
    console.log(haromszog);
    document.getElementById('eredmeny').textContent = haromszog.keruletEsTerulet();
  }
}