export interface Area {
  slug: string;
  name: string;
  /** Genitiv/locativ pentru titluri: „în Bacău", „în Onești". */
  inName: string;
  population: string;
  distance: string;
  metaDescription: string;
  intro: string;
  /** Context local real, scris diferit pentru fiecare localitate. */
  context: string[];
  neighbourhoods: string[];
  /** Ce se cere cel mai des în localitatea respectivă. */
  demand: string;
}

export const areas: Area[] = [
  {
    slug: 'bacau',
    name: 'Bacău',
    inName: 'Bacău',
    population: '≈ 136.000 locuitori',
    distance: '45 km de atelier',
    metaDescription:
      'Mobilă la comandă în Bacău: bucătării, dressinguri, mobilier de living și piese din lemn masiv. Măsurători gratuite, proiect și montaj incluse.',
    intro: 'Cei mai mulți clienți ai noștri sunt din Bacău — și cele mai multe proiecte sunt de apartament.',
    context: [
      'În Bacău lucrăm mai ales în blocurile din Cornișa, Mioriței, Bistrița Lac și Ștefan cel Mare, unde bucătăriile au între 6 și 9 metri pătrați și fiecare centimetru contează. La suprafețe mici, mobila la comandă nu e un moft: corpurile de raft lasă rosturi de câțiva centimetri lângă perete, iar într-o bucătărie de 7 metri pătrați asta înseamnă un sertar întreg pierdut.',
      'În zonele de case — Șerbănești, Gherăiești, CFR — cererea se mută spre dressinguri mari, mobilier de living pe toată lungimea peretelui și uși de interior pe cotă specială, pentru că golurile din construcțiile mai vechi rareori respectă dimensiunile standard.',
      'Ne deplasăm în Bacău pentru măsurători fără cost și fără condiție de comandă. De obicei, între prima discuție la telefon și vizita de măsurare trec una-două zile.',
    ],
    neighbourhoods: ['Centru', 'Cornișa', 'Mioriței', 'Bistrița Lac', 'Ștefan cel Mare', 'Șerbănești', 'Gherăiești', 'CFR', 'Izvoare', 'Aviatori'],
    demand: 'Bucătării de apartament, dressinguri și mobilier de living',
  },
  {
    slug: 'onesti',
    name: 'Onești',
    inName: 'Onești',
    population: '≈ 33.000 locuitori',
    distance: '60 km de atelier',
    metaDescription:
      'Mobilă la comandă în Onești: bucătării, dressinguri, uși de interior și mobilier din lemn masiv. Măsurători gratuite și montaj inclus.',
    intro: 'La Onești lucrăm mult în blocurile ridicate în anii ’70 și ’80 — cu pereți care nu sunt drepți nicăieri.',
    context: [
      'Fondul locativ din Onești e dominat de blocuri construite între 1965 și 1985. Au tavane de 2,50 m, bucătării înguste și pereți care se abat cu doi-trei centimetri pe o lungime de trei metri. E exact situația în care mobila de raft nu se potrivește și în care croiala pe măsură își arată valoarea.',
      'O altă cerere frecventă aici sunt ușile de interior. Golurile din blocurile vechi au dimensiuni care nu mai există în comerț, iar tocurile reglabile pe care le montăm acoperă grosimi de perete între 8 și 30 de cm, fără să mai fie nevoie de reparat zidăria după montaj.',
      'Pentru casele din Onești și din satele apropiate — Slănic-Moldova, Târgu Trotuș — facem și uși de exterior din lemn stratificat, cu toc izolat și prag cu rupere de punte termică.',
    ],
    neighbourhoods: ['Centru', 'Aleea Parcului', 'Cartier CFR', 'Zona Belvedere', 'Borzești'],
    demand: 'Bucătării de bloc, uși de interior pe cotă specială',
  },
  {
    slug: 'moinesti',
    name: 'Moinești',
    inName: 'Moinești',
    population: '≈ 20.000 locuitori',
    distance: '25 km de atelier',
    metaDescription:
      'Mobilă la comandă în Moinești: bucătării, dressinguri, paturi și mese din lemn masiv. Atelier la 25 km, măsurători gratuite.',
    intro: 'Moinești e la 25 de kilometri de atelier — cea mai scurtă distanță dintre toate orașele din județ.',
    context: [
      'Fiind aproape, putem veni la măsurători în aceeași zi în care ne sunați și putem reveni ușor pentru reglaje sau pentru o completare. E un avantaj practic pe care îl simțiți mai ales dacă lucrarea are mai multe etape.',
      'La Moinești cererea e împărțită aproape egal între apartamente și case. În case se caută mult mobilier din lemn masiv — mese de sufragerie, paturi, bănci — pentru că gustul local înclină spre lemn vizibil, nu spre fronturi lucioase.',
      'Zona are și multe mansarde amenajate. Dressingul sub pantă și biroul sub panta acoperișului sunt două dintre lucrările pe care le facem cel mai des aici.',
    ],
    neighbourhoods: ['Centru', 'Lucăcești', 'Gazărie', 'Cartier Vermești'],
    demand: 'Mobilier din lemn masiv, dressinguri în mansardă',
  },
  {
    slug: 'comanesti',
    name: 'Comănești',
    inName: 'Comănești',
    population: '≈ 19.000 locuitori',
    distance: '35 km de atelier',
    metaDescription:
      'Mobilă la comandă în Comănești: bucătării, mobilier de living, paturi și mese din lemn masiv. Măsurători gratuite în Valea Trotușului.',
    intro: 'Pe Valea Trotușului, lemnul e acasă. Se vede în ce ne cer oamenii din Comănești.',
    context: [
      'Comănești e o zonă cu tradiție de prelucrare a lemnului, iar clienții de aici știu să recunoască o îmbinare bine făcută. Cererea înclină clar spre lemn masiv: mese, bănci, colțare de bucătărie, paturi cu tăblie din scânduri late.',
      'Pentru casele de pe vale facem frecvent uși de exterior din stejar stratificat. Umiditatea din zonă e mai ridicată decât în restul județului, iar o ușă făcută dintr-o singură bucată de lemn se curbează în primul an — motiv pentru care nu lucrăm așa.',
      'Facem și mobilier pentru pensiunile din zonă: recepții, mobilier de cameră, mese și bănci pentru terase. Pentru firme emitem factură și putem lucra pe etape, cu termene contractate.',
    ],
    neighbourhoods: ['Centru', 'Podei', 'Vermești', 'Lăloaia'],
    demand: 'Lemn masiv, uși de exterior, mobilier de pensiune',
  },
  {
    slug: 'buhusi',
    name: 'Buhuși',
    inName: 'Buhuși',
    population: '≈ 14.000 locuitori',
    distance: '55 km de atelier',
    metaDescription:
      'Mobilă la comandă în Buhuși: bucătării, dressinguri, mobilier de living și uși de interior. Măsurători gratuite și montaj inclus.',
    intro: 'La Buhuși venim de obicei cu o singură deplasare pentru măsurători și una pentru montaj.',
    context: [
      'Buhușiul are un fond locativ mixt: blocuri din perioada industrială a orașului și case în zonele mărginașe. În blocuri, cele mai multe lucrări sunt bucătării și dressinguri; în case, mobilier de living pe toată lungimea peretelui și uși de interior.',
      'Pentru că distanța e mai mare, organizăm lucrările astfel încât montajul să se facă într-o singură zi, cu toate piesele pregătite și verificate în atelier. Reglajele fine le facem pe loc, la final.',
      'Dacă sunteți din Buhuși și vreți doar o estimare, ne puteți trimite pe WhatsApp pozele camerei și dimensiunile aproximative. Vă dăm o încadrare de buget înainte să programăm deplasarea.',
    ],
    neighbourhoods: ['Centru', 'Bradu', 'Marginea', 'Cartier Textila'],
    demand: 'Bucătării și dressinguri de apartament',
  },
  {
    slug: 'targu-ocna',
    name: 'Târgu Ocna',
    inName: 'Târgu Ocna',
    population: '≈ 11.000 locuitori',
    distance: '55 km de atelier',
    metaDescription:
      'Mobilă la comandă în Târgu Ocna: bucătării, mobilier de living, mese și paturi din lemn masiv. Lucrăm și pentru pensiuni.',
    intro: 'Târgu Ocna e oraș de turism, așa că lucrăm aici și pentru locuințe, și pentru pensiuni.',
    context: [
      'Stațiunea atrage turism tot anul, iar pensiunile din zonă ne cer mobilier de cameră, recepții și mese pentru sala de mic dejun. Pentru spații comerciale lucrăm cu contract, cu etape și termene clare, ca să nu blocăm activitatea pensiunii mai mult decât e nevoie.',
      'Pentru locuințe, cele mai frecvente comenzi sunt bucătăriile și mobilierul de living. În casele mai vechi din centru, ușile de interior pe cotă specială și tocurile reglabile rezolvă goluri care nu mai există în dimensiuni standard.',
      'Pentru mobilierul destinat camerelor de cazare recomandăm PAL melaminat cu cant ABS de 2 mm — rezistă la uzura intensă mult mai bine decât variantele cu cant subțire.',
    ],
    neighbourhoods: ['Centru', 'Vâlcele', 'Poieni', 'Salina'],
    demand: 'Mobilier de pensiune, bucătării, uși de interior',
  },
  {
    slug: 'darmanesti',
    name: 'Dărmănești',
    inName: 'Dărmănești',
    population: '≈ 12.000 locuitori',
    distance: '45 km de atelier',
    metaDescription:
      'Mobilă la comandă în Dărmănești: bucătării, paturi, mese din lemn masiv și uși de exterior. Măsurători gratuite în Valea Uzului.',
    intro: 'La Dărmănești, cele mai multe lucrări sunt în case — iar în case se cere lemn.',
    context: [
      'Zona e formată în bună parte din locuințe individuale, cu camere mai mari decât într-un apartament și cu tavane mai înalte. Asta schimbă proiectul: dressingurile urcă până la 2,70 m, iar bucătăriile au loc pentru insulă sau pentru peninsulă.',
      'Cererea de lemn masiv e ridicată: mese de sufragerie pentru opt-zece persoane, bănci, paturi cu tăblie înaltă. Lucrăm cu stejar și frasin, uscate la 8–10% umiditate înainte de croire.',
      'Pentru casele expuse la vânt și la umezeala de pe vale facem uși de exterior din stratificat, cu două rânduri de garnituri și prag cu rupere de punte termică.',
    ],
    neighbourhoods: ['Centru', 'Dărmăneasca', 'Sălătruc', 'Păgubeni'],
    demand: 'Lemn masiv, uși de exterior, bucătării de casă',
  },
  {
    slug: 'parjol',
    name: 'Pârjol',
    inName: 'Pârjol',
    population: '≈ 4.000 locuitori',
    distance: 'aici e atelierul',
    metaDescription:
      'Tâmplărie și mobilă la comandă în Pârjol, județul Bacău. Atelierul Hanu Tâmplaru\' e aici — veniți să vedeți lucrările în producție.',
    intro: 'Aici e atelierul. Dacă sunteți din Pârjol sau din comunele vecine, puteți trece să vedeți cu ochii dumneavoastră cum se lucrează.',
    context: [
      'Atelierul nostru e în Pârjol, iar pentru localnici asta înseamnă cel mai scurt drum posibil de la idee la mobilă montată. Veniți, vedeți lemnul pe bancul de lucru, atingeți finisajele și alegeți în fața plăcilor reale, nu după o poză de pe telefon.',
      'Lucrăm pentru toate satele comunei și pentru comunele din jur — Ardeoani, Măgirești, Solonț, Blăgești, Bârsănești. Deplasarea pentru măsurători se face, de regulă, în ziua în care ne sunați.',
      'Tot aici se poate face și reparația sau recondiționarea unei piese vechi de familie: o masă care a crăpat, un scaun care s-a slăbit în îmbinări, o ușă care nu mai închide. Uneori are mai mult sens să reparăm decât să facem din nou.',
    ],
    neighbourhoods: ['Pârjol', 'Bărnești', 'Câmpeni', 'Hăineala', 'Pustiana', 'Tărâța'],
    demand: 'Tot ce iese din atelier, plus recondiționări',
  },
];

/** Localități în care ne deplasăm, fără pagină dedicată. */
export const otherLocalities = [
  'Slănic-Moldova', 'Târgu Trotuș', 'Sascut', 'Podu Turcului', 'Răcăciuni', 'Mărgineni',
  'Letea Veche', 'Hemeiuș', 'Blăgești', 'Ardeoani', 'Măgirești', 'Solonț', 'Bârsănești',
  'Berești-Tazlău', 'Zemeș', 'Agăș', 'Palanca', 'Asău', 'Oituz', 'Cașin', 'Filipești',
  'Nicolae Bălcescu', 'Traian', 'Faraoani', 'Luizi-Călugăra', 'Itești', 'Gârleni',
];
