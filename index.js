'use strict';

const studentuMasyvas = [];
const date = new Date();
const klase = {
    studentuMasyvas,
    vidurkis: function() {
        let sum = 0;
        for(let i in this.studentuMasyvas) {
            sum += this.studentuMasyvas[i].pazymys;
        };
        return sum/this.studentuMasyvas.length;
    },
};

function Studentas (id, vardas, pavarde, pazymys, lankomumas, data) {
    this.id = id;
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.pazymys = pazymys;
    this.lankomumas = lankomumas;
    this.data = data;
}

function lankomumas() {
    let lankomumas = [];
    for (let i=0; i<20; i++) {
        let random = Math.floor(Math.random() * 4);
        lankomumas.push(random == 3 ? "n" : "x");
    }
    return lankomumas;
}

for (let i=1; i<=20; i++) {
    studentuMasyvas.push(new Studentas(i, 'Tomas'+i, 'Tomaitis'+i, Math.round(10-0.2*i), lankomumas(), date));
}

console.log(klase);
console.log(`Vidurkis(${klase.studentuMasyvas.length}-ies studentų): ${klase.vidurkis()}`);

let main = document.createElement('main');
main.id = "main";
main.style.width = "86%";
main.style.display = "inline-block";
main.style.marginLeft = "7%";
document.body.appendChild(main);

main = document.getElementById('main');

let h = document.createElement('h1');
h.textContent = "Elektroninis dienynas";
main.appendChild(h);

let btn = document.createElement('button');
btn.id = "egzaminuok";
btn.innerHTML = "Pravesk paskaitas!";
main.appendChild(btn);

let btn2 = document.createElement('button');
btn2.id = "egzaminuok2";
btn2.innerHTML = "Egzaminuok!";
btn2.style.margin = "0 60% 0 20px";
main.appendChild(btn2);

let table = document.createElement('table');
table.id = "table";
table.style.display = "none";
main.appendChild(table);

function egzaminuok() {
    const fragment1 = document.createDocumentFragment();
    let tr = document.createElement('tr');
    for (let j=0; j<klase.studentuMasyvas[0].lankomumas.length + 2; j++) {
        let th = document.createElement('th');
        if (j==0) {
            th.innerText = "Vardas / Pavardė";
        } else if (j+7 < 11 && j+7 < 13) {
            th.innerText = "06/0" +(j+6);
        } else if (j+7 < 13) {
            th.innerText = "06/" + (j+6);
        } else if (j+7 == 13 || j+7 == 14) {
            th.innerText = "06/" + (j+8);
        } else if (j+9 < 20) {
            th.innerText = "06/" + (j+8);
        } else if (j+9 == 20 || j+9 == 21) {
            th.innerText = "06/" + (j+10); 
        } else if (j+11 < 27) {
            th.innerText = "06/" + (j+10);
        } else if (j+11 == 27 || j+11 == 28) {
            th.innerText = "06/" + (j+12);
        } else if (j+13 < 32) {
            th.innerText = "06/" + (j+12);
        } else if (j < 21) {
            th.innerText = "07/0" + (j-18);
        } else {
            th.innerText = "Pažymys";
        }
        th.style.padding = "5px";
        tr.appendChild(th);
    }
    fragment1.appendChild(tr);
    document.getElementById('table').appendChild(fragment1);

    const fragment = document.createDocumentFragment();
    for (let i=0; i<klase.studentuMasyvas.length; i++) {
        let tr = document.createElement('tr');
        for (let j=0; j<klase.studentuMasyvas[i].lankomumas.length+2; j++) {
            let td = document.createElement('td');
            if (j == 0) {
                td.innerText = klase.studentuMasyvas[i].vardas + ' ' + klase.studentuMasyvas[i].pavarde;
                td.style.height = "40px";
                tr.appendChild(td);
            } else if (j<21) {
            td.innerText = klase.studentuMasyvas[i].lankomumas[j-1];
            tr.appendChild(td);
            } else {
                td.innerText = klase.studentuMasyvas[i].pazymys;
                td.className = "pazymys";
                td.style.display = "none";
                tr.appendChild(td);
            }
        }
        fragment.appendChild(tr);
    }
    document.getElementById('table').appendChild(fragment);
    document.getElementById('table').style.display = "inline-block";
    document.getElementById('table').style.marginTop = "30px";
}

function egzaminuok2() {
    for(let i=0; i<20; i++) {
    document.getElementsByClassName('pazymys')[i].style.display = "table";
    document.getElementsByClassName('pazymys')[i].style.width = "94%";
    document.getElementsByClassName('pazymys')[i].style.lineHeight = "39px";
    }
}

btn.addEventListener("click", egzaminuok);
btn2.addEventListener("click", egzaminuok2);











// const dataToFill = [[1,2,3], [4,5,6], [7,8,9]]
// const fragment = document.createDocumentFragment()
// for (const row of dataToFill){
//   const tr = document.createElement('tr')
//   for (const column of row) {
//     const td = document.createElement('td')
//     td.textContent = column
//     tr.appendChild(td)
//   }
//   fragment.appendChild(tr)
// }
// document.getElementById('table').appendChild(fragment)

