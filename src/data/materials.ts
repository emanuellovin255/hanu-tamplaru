export interface Species {
  name: string;
  latin: string;
  hardness: string;
  tone: string;
  text: string;
  bestFor: string[];
}

export const species: Species[] = [
  {
    name: 'Stejar',
    latin: 'Quercus robur',
    hardness: '1290 N (Janka)',
    tone: 'Miere deschis, se îngălbenește ușor în timp',
    text: 'Cel mai rezistent lemn pe care îl folosim curent. Fibra mare, cu razele medulare vizibile la tăiere radială, îl face recognoscibil de la distanță. Suportă bine umiditatea, motiv pentru care îl alegem și pentru uși de exterior.',
    bestFor: ['Mese', 'Uși de exterior', 'Paturi', 'Scări', 'Blaturi de bucătărie'],
  },
  {
    name: 'Frasin',
    latin: 'Fraxinus excelsior',
    hardness: '1320 N (Janka)',
    tone: 'Foarte deschis, aproape crem, cu fibră pronunțată',
    text: 'La fel de dur ca stejarul, dar mai deschis la culoare și mai elastic. Se îndoaie bine la abur, așa că îl folosim la spătare curbate și la piese care trebuie să cedeze puțin fără să crape.',
    bestFor: ['Scaune', 'Paturi', 'Mese', 'Rafturi lungi'],
  },
  {
    name: 'Nuc',
    latin: 'Juglans regia',
    hardness: '1010 N (Janka)',
    tone: 'Brun-ciocolatiu, cu vine mai închise',
    text: 'Cel mai elegant lemn din atelier și cel mai scump. Are desen bogat, cu treceri de la brun deschis la aproape negru. Se închide vizibil la culoare în primii ani, mai ales la lumină directă.',
    bestFor: ['Mese de sufragerie', 'Birouri', 'Fronturi furniruite', 'Tăblii de pat'],
  },
  {
    name: 'Cireș',
    latin: 'Prunus avium',
    hardness: '995 N (Janka)',
    tone: 'Roșiatic-cald, se patinează frumos',
    text: 'Lemn cu fibră fină și uniformă, care capătă în timp o patină roșcată foarte căutată. Se lucrează ușor și se finisează impecabil, dar e mai moale decât stejarul, deci se zgârie mai ușor.',
    bestFor: ['Mobilier de living', 'Noptiere', 'Vitrine', 'Detalii decorative'],
  },
  {
    name: 'Fag',
    latin: 'Fagus sylvatica',
    hardness: '1300 N (Janka)',
    tone: 'Roz-gălbui, uniform, fără desen puternic',
    text: 'Dur, dens și ieftin, dar sensibil la variațiile de umiditate: lucrează mai mult decât stejarul. Îl folosim pentru structuri și pentru piese care rămân în interior, la umiditate constantă.',
    bestFor: ['Structuri de scaun', 'Somiere', 'Piese interioare'],
  },
  {
    name: 'Pin',
    latin: 'Pinus sylvestris',
    hardness: '380 N (Janka)',
    tone: 'Galben-deschis, cu noduri vizibile',
    text: 'Cea mai accesibilă variantă de lemn masiv. Are noduri și se zgârie ușor, dar dă un aspect rustic autentic și se vopsește foarte bine. Potrivit când vreți masiv fără buget de stejar.',
    bestFor: ['Mobilier rustic', 'Bănci', 'Rafturi', 'Piese vopsite'],
  },
];

export interface Board {
  name: string;
  text: string;
  pros: string[];
  cons: string[];
}

export const boards: Board[] = [
  {
    name: 'PAL melaminat',
    text: 'Placă de așchii de lemn presate, acoperită cu folie melaminată. Materialul de bază pentru corpuri de bucătărie, dressinguri și mobilier de living.',
    pros: ['Cel mai bun raport preț – rezistență', 'Zeci de decoruri, inclusiv cu relief sincronizat', 'Se curăță ușor', 'Stabil dimensional'],
    cons: ['Nu se poate freza decorativ', 'Cantul se vede la muchii', 'Nu se poate repara dacă se zgârie adânc'],
  },
  {
    name: 'PAL hidrofug',
    text: 'Același PAL, dar cu rășini rezistente la umiditate — se recunoaște după miezul verde. Obligatoriu pentru blaturi de bucătărie și pentru corpurile de sub chiuvetă.',
    pros: ['Rezistă la umezeală și la aburi', 'Nu se umflă la stropi accidentali', 'Aceeași gamă de decoruri'],
    cons: ['Mai scump decât PAL-ul obișnuit', 'Nu e impermeabil — tot trebuie etanșat la chiuvetă'],
  },
  {
    name: 'MDF vopsit',
    text: 'Placă de fibre de lemn presate, cu suprafață perfect omogenă. Se frezează și se vopsește în orice culoare, mat sau lucios.',
    pros: ['Orice culoare RAL sau NCS', 'Se frezează decorativ', 'Suprafață fără fibră, perfect plană', 'Se poate revopsi peste ani'],
    cons: ['Mai scump decât PAL-ul', 'Termen de execuție mai lung', 'Greu — cere feronerie dimensionată corect'],
  },
  {
    name: 'MDF furniruit',
    text: 'MDF acoperit cu un strat subțire de lemn natural. Arată ca masivul, dar rămâne stabil dimensional și costă considerabil mai puțin.',
    pros: ['Aspect de lemn masiv', 'Stabil, nu lucrează', 'Fibra se poate potrivi între piese', 'Se poate lăcui în orice nuanță'],
    cons: ['Nu se poate șlefui de multe ori', 'Cantul cere tratament atent'],
  },
  {
    name: 'Lemn masiv',
    text: 'Lemn întreg, lamelat sau din scânduri late. Îl folosim pentru mese, paturi, scaune, uși și blaturi — acolo unde piesa se vede și se atinge zilnic.',
    pros: ['Se repară și se refinisează oricând', 'Îmbătrânește frumos', 'Rezistență mecanică maximă', 'Fiecare piesă e unică'],
    cons: ['Lucrează cu umiditatea', 'Cel mai scump material', 'Termen de execuție mai lung'],
  },
];

export interface Finish {
  name: string;
  text: string;
  care: string;
}

export const finishes: Finish[] = [
  {
    name: 'Ulei natural',
    text: 'Pătrunde în lemn și îl hrănește, fără să formeze peliculă. Lemnul rămâne la atingere exact ca lemnul, iar fibra se vede și se simte.',
    care: 'Reîmprospătare o dată la 1 – 2 ani, cu o cârpă. Zgârieturile se repară local.',
  },
  {
    name: 'Ceară tare',
    text: 'Combinație de ulei și ceară. Dă o peliculă subțire, cu protecție mai bună la lichide decât uleiul pur, dar cu același aspect natural.',
    care: 'Reîmprospătare o dată la 2 ani. Se repară local, prin șlefuire ușoară.',
  },
  {
    name: 'Lac pe bază de apă',
    text: 'Formează o peliculă transparentă, disponibilă în mat, satinat sau lucios. Cea mai bună protecție la pete și la lichide.',
    care: 'Nu cere întreținere. Dacă se zgârie adânc, reparația cere refacerea întregii suprafețe.',
  },
  {
    name: 'Vopsea acoperitoare',
    text: 'Aplicată pe MDF sau pe masiv, în orice culoare din paletar. Se lăcuiește deasupra pentru rezistență la frecare.',
    care: 'Se șterge cu lavetă umedă. Se poate revopsi peste ani, fără să schimbați mobila.',
  },
  {
    name: 'Lazură pentru exterior',
    text: 'Pentru uși de exterior și tâmplărie expusă. Conține filtru UV, care încetinește decolorarea lemnului la soare.',
    care: 'Reîmprospătare o dată la 4 – 6 ani, în funcție de expunere.',
  },
];

export const hardware = [
  { name: 'Balamale cu amortizare', text: 'Blum sau Hettich, cu reglaj pe trei axe. Ușa se oprește lin, indiferent cât de tare o închideți.' },
  { name: 'Glisiere cu extragere totală', text: 'Sertarul iese complet din corp, așa că vedeți și ce e în spate. Sarcină 30 – 40 kg.' },
  { name: 'Sisteme de colț', text: 'Rotative sau cu extragere laterală, pentru colțurile de bucătărie care altfel rămân moarte.' },
  { name: 'Ridicătoare pe gaz', text: 'Pentru uși care se deschid în sus și pentru lăzile de pat. Se opresc în orice poziție.' },
  { name: 'Sisteme glisante', text: 'Șine de aluminiu cu rulmenți și amortizare la capăt de cursă, pentru dressinguri și uși.' },
  { name: 'Push-to-open', text: 'Pentru fronturi fără mâner. Apăsați ușa și se deschide singură — util la bucătării minimaliste.' },
];
