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
    for (let i=0; i<15; i++) {
        lankomumas.push('x');
        if ((i)%3 == 0) {
            lankomumas.push('n');
        }
    }
    return lankomumas;
}

for (let i=1; i<=20; i++) {
    studentuMasyvas.push(new Studentas(i, 'Tomas'+i, 'Tomaitis'+i, Math.round(10-0.2*i), lankomumas(), date));
}

console.log(klase);
console.log(`Vidurkis(${klase.studentuMasyvas.length}-ies studentų): ${klase.vidurkis()}`);
