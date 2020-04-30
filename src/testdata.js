/*testausdata joka on kiinteä ja josta luodaan näkymä ja johon käyttäjä voi myös syöttää tietoja*/
const testdata = [
 { id: "1",                   /*jokaisella oliolla täytyy olla oma id, jotta se löytyy ja antaa oikeat tulokset */
   tyyppi: 'Liikunta',          /*testidatan tiedot löytyvät Items.js komponentista Items*/
   paivat: 5,
   takaraja: '2020-04-15',
   kaudenalku: '2020-04-08',
   kaudenloppu: '2020-04-15',
   toteutunut: 5 },
 { id: "2",
   tyyppi: 'Hakemusten teko', 
   paivat: 5,
   takaraja: '2020-04-15',
   kaudenalku: '2020-04-08',
   kaudenloppu: '2020-04-15',
   toteutunut: 2 },
 { id: "3",
   tyyppi: 'Siivous', 
   paivat: 5,
   takaraja: '2020-04-15',
   kaudenalku: undefined,
   kaudenloppu: undefined,
   toteutunut: 1},
 { id: "4",
   tyyppi: 'Kirjasto', 
   paivat: 5,
   takaraja: '2020-04-15',
   kaudenalku: '2020-04-08',
   kaudenloppu: '2020-04-15',
   toteutunut: 2 }
];

export default testdata;