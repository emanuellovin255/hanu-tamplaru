export interface Product {
  slug: string;
  /** Numele din meniu și din carduri. */
  name: string;
  /** H1-ul paginii — include localizarea, pentru SEO. */
  h1: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  /** O frază puternică, sub H1. */
  intro: string;
  lead: string;
  /** Corpul paginii: titlu + paragrafe. */
  sections: { h3: string; body: string[] }[];
  benefits: { title: string; text: string }[];
  options: { label: string; values: string[] }[];
  specs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
  /** Foldere din src/assets/photos folosite în galerie, în ordine. */
  folders: string[];
  /** Poza de hero, ex. 'stock/paturi/01'. */
  hero: string;
  related: string[];
}

export const products: Product[] = [
  {
    slug: 'bucatarii',
    name: 'Bucătării',
    h1: 'Bucătării la comandă în Bacău',
    eyebrow: 'Bucătării',
    metaTitle: 'Bucătării la comandă Bacău',
    metaDescription:
      'Bucătării la comandă în Bacău și în tot județul: corpuri pe măsura camerei, blaturi, feronerie Blum sau Hettich, montaj inclus. Măsurători și ofertă gratuite.',
    intro: 'Bucătăria e camera în care se strică cel mai repede o mobilă prost făcută. De aceea o măsurăm de două ori și o montăm o singură dată.',
    lead:
      'Facem bucătării la comandă pentru apartamente și case din Bacău, Onești, Moinești și restul județului. Pornim de la forma reală a camerei — nu de la un modul standard — și construim corpurile în jurul țevilor, al prizelor și al colțurilor care nu sunt niciodată de 90 de grade.',
    sections: [
      {
        h3: 'Corpuri croite pe camera dumneavoastră',
        body: [
          'O bucătărie de bloc are rareori pereți drepți. Dacă montați corpuri standard, rămâneți cu rosturi de doi centimetri lângă perete și cu un blat care nu se sprijină uniform. Noi croim fiecare corp la dimensiunea măsurată, iar diferențele le luăm în laterale și în baghetele de racord, unde nu se văd.',
          'Corpurile de jos le facem, de regulă, cu înălțime utilă de 72 cm plus soclu reglabil, ca blatul să vină la 90 cm — înălțimea la care nu vă doare spatele după o oră de gătit. Dacă sunteți mai înalt sau mai scund, urcăm sau coborâm linia; e unul dintre avantajele care nu se plătesc separat.',
          'Pe colțuri montăm fie sisteme rotative, fie sertare adânci care ies complet. Nu lăsăm colț mort: spațiul acela costă la fel de mult ca restul bucătăriei și merită folosit.',
        ],
      },
      {
        h3: 'Fronturi: PAL melaminat, MDF vopsit sau furnir',
        body: [
          '<strong>PAL melaminat</strong> este soluția cu cel mai bun raport calitate-preț. Rezistă bine la zgârieturi, se curăță ușor și vine într-o gamă largă de decoruri de lemn, inclusiv cele cu relief sincronizat, care se simt ca lemnul la atingere.',
          '<strong>MDF vopsit</strong> se folosește când vreți fronturi mate, fără rost vizibil, sau modele frezate. Vopseaua se aplică în mai multe straturi și se lăcuiește; rezultatul e o suprafață uniformă, pe care o puteți alege în orice culoare din paletarul RAL sau NCS.',
          '<strong>Furnirul natural</strong> îl recomandăm când bucătăria se deschide spre living și vreți continuitate cu restul mobilei. Fiecare front are fibră unică, iar la corpurile alăturate potrivim direcția fibrei, ca să curgă pe toată lungimea.',
        ],
      },
      {
        h3: 'Blaturi, backsplash și iluminare',
        body: [
          'Pentru blaturi lucrăm cu PAL hidrofug de 38 mm, cu blat de lemn masiv lăcuit sau uleiat, și cu blaturi de piatră compozită montate de partenerii noștri. La fiecare variantă etanșăm corect zona din jurul chiuvetei și al plitei — acolo cedează blaturile, nu la mijloc.',
          'Backsplash-ul îl putem face din aceeași placă ca blatul, ceea ce arată foarte curat și elimină rostul de silicon dintre faianță și blat. Sub corpurile de sus montăm bandă LED cu profil de aluminiu și difuzor mat, comandată prin senzor sau întrerupător.',
        ],
      },
      {
        h3: 'Feronerie care ține 15 ani',
        body: [
          'Folosim balamale și glisiere <strong>Blum</strong> sau <strong>Hettich</strong>, cu amortizare pe închidere. Diferența față de feroneria ieftină nu se vede în prima lună, ci în anul al treilea, când ușile încep să atârne și sertarele să se blocheze.',
          'La sertare montăm, în mod obișnuit, glisiere cu extragere totală și sarcină de 30–40 kg. Așa vedeți tot ce e în spatele sertarului și nu mai țineți oalele pe jos.',
        ],
      },
    ],
    benefits: [
      { title: 'Măsurători milimetrice', text: 'Venim, măsurăm și notăm fiecare priză, țeavă și denivelare înainte de proiect.' },
      { title: 'Proiect înainte de tăiere', text: 'Vedeți desenul cu dimensiuni, culori și feronerie și aprobați înainte să pornim producția.' },
      { title: 'Feronerie Blum / Hettich', text: 'Balamale și sertare cu amortizare, garantate, nu variante nemarcate.' },
      { title: 'Montaj și racorduri', text: 'Montăm corpurile, blatul, chiuveta și plita și reglăm toate ușile la final.' },
    ],
    options: [
      { label: 'Fronturi', values: ['PAL melaminat', 'MDF vopsit mat', 'MDF vopsit lucios', 'Furnir natural', 'Fronturi frezate', 'Lemn masiv'] },
      { label: 'Blat', values: ['PAL hidrofug 38 mm', 'Lemn masiv uleiat', 'Piatră compozită', 'Blat cu profil postformat'] },
      { label: 'Configurație', values: ['Liniară', 'În L', 'În U', 'Cu insulă', 'Cu bar / peninsulă'] },
      { label: 'Extra', values: ['Iluminare LED sub corpuri', 'Coloană cu cuptor și microunde', 'Cămară încorporată', 'Sistem de colț rotativ', 'Organizatoare de sertar'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '3 – 5 săptămâni de la avans' },
      { label: 'Înălțime blat', value: '90 cm standard, ajustabilă' },
      { label: 'Grosime corpuri', value: 'PAL 18 mm, spate 8 mm încastrat' },
      { label: 'Garanție', value: '24 de luni pentru corpuri și feronerie' },
    ],
    faq: [
      {
        q: 'Cât durează o bucătărie la comandă?',
        a: 'De regulă 3–5 săptămâni de la momentul în care aprobați proiectul și achitați avansul. Dacă alegeți fronturi vopsite sau blat de piatră, termenul poate ajunge la 6 săptămâni, pentru că se lucrează în mai multe etape.',
      },
      {
        q: 'Veniți să măsurați înainte de ofertă?',
        a: 'Da, iar măsurătorile sunt gratuite în județul Bacău. Fără ele, orice ofertă e o estimare care se schimbă la montaj.',
      },
      {
        q: 'Pot să vă dau eu electrocasnicele?',
        a: 'Sigur. Avem nevoie doar de modelele exacte înainte de proiect, ca să croim nișele la dimensiunea corectă. Dacă le cumpărați după ce am tăiat, riscați să nu intre.',
      },
      {
        q: 'Faceți și bucătării mici, de garsonieră?',
        a: 'Da. La suprafețe mici contează și mai mult croiala pe măsură: acolo fiecare centimetru pierdut lângă perete înseamnă un sertar în minus.',
      },
      {
        q: 'Ce fac dacă se strică o balama peste doi ani?',
        a: 'Ne sunați. Feroneria e în garanție 24 de luni, iar după garanție o înlocuim contra cost, dar rapid — avem pe stoc piesele pe care le montăm curent.',
      },
    ],
    folders: ['bucatarii', 'stock/bucatarii'],
    hero: 'stock/bucatarii/01',
    related: ['dressinguri', 'mobilier-living', 'mese-lemn-masiv'],
  },
  {
    slug: 'dressinguri',
    name: 'Dressinguri',
    h1: 'Dressinguri la comandă în Bacău',
    eyebrow: 'Dressinguri',
    metaTitle: 'Dressing la comandă Bacău',
    metaDescription:
      'Dressinguri la comandă în județul Bacău: uși glisante sau batante, compartimentare pe măsură, iluminare LED și montaj inclus.',
    intro: 'Un dressing bun nu se judecă după uși, ci după ce se întâmplă în spatele lor.',
    lead:
      'Construim dressinguri pe toată înălțimea camerei, din perete în perete, pentru dormitoare, holuri și mansarde. Compartimentarea o facem pornind de la ce aveți efectiv de pus în el: câte rochii lungi, câte cămăși, câte perechi de pantofi.',
    sections: [
      {
        h3: 'Din perete în perete, până în tavan',
        body: [
          'Un dulap care se oprește la doi metri lasă deasupra un raft de praf. Noi ducem dressingul până în tavan și punem sus sertarele sau cutiile pentru lucrurile de sezon. Diferența de volum util e de 20–30%, la aceeași suprafață de cameră.',
          'În mansarde sau în camere cu grinzi croim corpurile după unghiul real al pantei. E mai multă muncă de croit, dar altfel rămân zone moarte exact acolo unde e mai greu de ajuns.',
        ],
      },
      {
        h3: 'Uși glisante sau batante',
        body: [
          '<strong>Ușile glisante</strong> nu fură spațiu în cameră și arată foarte bine cu inserții de oglindă, lamele de lemn sau sticlă lăcuită. Folosim sisteme cu rulmenți și amortizare la capăt de cursă, montate pe șină de aluminiu la sol și la tavan.',
          '<strong>Ușile batante</strong> vă lasă să vedeți tot conținutul dintr-o privire și sunt mai ieftine. Le recomandăm când aveți loc să se deschidă complet — adică minimum 60 de cm liberi în fața dressingului.',
          'Există și varianta fără uși, tip walk-in, cu fronturi doar la sertare. Arată spectaculos, dar cere ordine; e potrivită când aveți o cameră separată pentru haine.',
        ],
      },
      {
        h3: 'Interiorul: bare, sertare, rafturi, pantofar',
        body: [
          'Standardul de la care pornim: 100–110 cm înălțime pentru bara de cămăși, 160–180 cm pentru rochii și paltoane, sertare de 12–20 cm pentru lenjerie și rafturi de 35 cm pentru pulovere. De aici ajustăm după ce ne spuneți.',
          'Pentru pantofi montăm rafturi înclinate sau sertare cu separatoare. Pentru genți și pălării, rafturi mai înalte, cu despărțitoare verticale, ca să nu se turtească unele peste altele.',
          'Bara cu coborâre (pantograf) se folosește când ducem dressingul până în tavan și barele de sus n-ar mai fi accesibile. Se trage în jos cu o tijă și revine singură.',
        ],
      },
      {
        h3: 'Lumină în dressing, nu doar în cameră',
        body: [
          'Montăm bandă LED în profil de aluminiu pe fiecare nivel, cu senzor de ușă sau de mișcare. Se aprinde când deschideți și se stinge singură. Temperatura de culoare recomandată e 4000 K — la lumină prea caldă nu distingeți bine culorile hainelor.',
        ],
      },
    ],
    benefits: [
      { title: 'Compartimentare pe hainele dumneavoastră', text: 'Numărăm împreună barele, sertarele și rafturile de care aveți nevoie, apoi desenăm.' },
      { title: 'Până în tavan', text: 'Folosim și ultimii 40 de centimetri, cu sertare sau cutii pentru sezon.' },
      { title: 'Sisteme glisante cu amortizare', text: 'Șine de aluminiu, rulmenți și oprire lină, nu role de plastic.' },
      { title: 'Iluminare cu senzor', text: 'Bandă LED pe fiecare nivel, aprinsă automat la deschiderea ușii.' },
    ],
    options: [
      { label: 'Uși', values: ['Glisante cu oglindă', 'Glisante cu lamele de lemn', 'Glisante cu sticlă lăcuită', 'Batante', 'Fără uși (walk-in)'] },
      { label: 'Fronturi', values: ['PAL melaminat', 'MDF vopsit mat', 'Furnir natural', 'Profile de aluminiu'] },
      { label: 'Interior', values: ['Bare de haine', 'Sertare cu amortizare', 'Rafturi reglabile', 'Pantofar înclinat', 'Bară cu coborâre', 'Suport pentru cravate și curele'] },
      { label: 'Amplasare', values: ['Dormitor', 'Hol de intrare', 'Mansardă cu pantă', 'Cameră dedicată (walk-in)'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '3 – 4 săptămâni de la avans' },
      { label: 'Adâncime uzuală', value: '60 cm cu uși glisante, 55 cm cu batante' },
      { label: 'Înălțime', value: 'Până în tavan, croit pe cotele reale' },
      { label: 'Garanție', value: '24 de luni pentru corpuri și sisteme glisante' },
    ],
    faq: [
      {
        q: 'Ce adâncime trebuie să aibă un dressing?',
        a: 'Minimum 60 cm dacă vreți să puneți umerașele perpendicular pe perete. Sub 50 cm hainele ating ușa, așa că în spații înguste montăm bare laterale, paralele cu peretele.',
      },
      {
        q: 'Glisant sau batant — ce e mai bine?',
        a: 'Glisant, dacă aveți cameră mică sau pat aproape de dulap. Batant, dacă aveți loc de deschidere și vreți acces la tot conținutul simultan. Glisantul pierde 8–10 cm de adâncime pe sistemul de șine.',
      },
      {
        q: 'Se poate face dressing în mansardă?',
        a: 'Da, și e una dintre cele mai bune folosiri ale mansardei. Croim corpurile pe unghiul pantei și punem sertare acolo unde nu se poate sta în picioare.',
      },
      {
        q: 'Puneți și oglindă pe interior?',
        a: 'Da, oglindă pe interiorul unei uși batante sau pe un panou lateral, cu folie de siguranță pe spate, ca să nu se spargă în cioburi dacă e lovită.',
      },
    ],
    folders: ['dressinguri'],
    hero: 'dressinguri/01',
    related: ['usi-interior', 'mobilier-living', 'birouri'],
  },
  {
    slug: 'mobilier-living',
    name: 'Mobilier living',
    h1: 'Mobilier de living la comandă în Bacău',
    eyebrow: 'Living',
    metaTitle: 'Mobilier living la comandă Bacău',
    metaDescription:
      'Unit TV, biblioteci, comode și pereți decorativi cu riflaj, făcute la comandă în județul Bacău. Proiect, producție și montaj de la Hanu Tâmplaru\'.',
    intro: 'Livingul e camera pe care o vede toată lumea. Merită mai mult decât o comodă cumpărată în grabă.',
    lead:
      'Facem unit-uri TV, biblioteci, comode și pereți decorativi pentru livinguri din tot județul Bacău. Lucrăm pe toată lățimea peretelui, cu corpuri suspendate și cu panouri care ascund cablurile, prizele și centrala de internet.',
    sections: [
      {
        h3: 'Unit TV pe toată lățimea peretelui',
        body: [
          'Un unit făcut la comandă pornește de la poziția reală a prizelor, a cablului de antenă și a suportului de televizor. Lăsăm trecerile de cabluri în spate, cu grile de aerisire pentru receiver și consolă, și montăm corpul suspendat, ca să se poată aspira pe dedesubt.',
          'Blatul unit-ului îl facem, de obicei, într-o culoare contrastantă față de fronturi — nuc pe alb, antracit pe bej — ca să dea un orizont clar în cameră.',
        ],
      },
      {
        h3: 'Pereți cu riflaj și iluminare ascunsă',
        body: [
          'Riflajul — panoul cu lamele verticale — e cea mai simplă cale de a face un living să arate scump. Lamelele le facem din MDF vopsit sau furniruit, montate pe un panou de fond, cu pas constant. În spate lăsăm loc pentru bandă LED, care le pune în relief seara.',
          'Panoul poate integra televizorul, un șemineu electric cu flacără și o vitrină cu sticlă și lumină. Toate se montează pe aceeași structură, așa că rămân pe aceeași linie, fără decalaje.',
        ],
      },
      {
        h3: 'Biblioteci, comode și vitrine',
        body: [
          'Pentru biblioteci folosim polițe de 25–32 mm la deschideri mari, ca să nu se lase în timp. Peste 90 cm lungime, orice poliță subțire se curbează; se vede după un an de cărți.',
          'Comodele și bufetele le facem asortate cu unit-ul TV sau cu masa din sufragerie, în aceeași esență și cu același tip de mâner. E felul cel mai simplu de a face o cameră să arate gândită, nu adunată.',
        ],
      },
    ],
    benefits: [
      { title: 'Cabluri ascunse din proiect', text: 'Trecerile, prizele și aerisirile sunt gândite înainte de producție, nu găurite la montaj.' },
      { title: 'Corpuri suspendate', text: 'Se aspiră pe dedesubt și camera pare mai mare.' },
      { title: 'Riflaj și LED', text: 'Panouri cu lamele și iluminare indirectă, montate pe aceeași structură.' },
      { title: 'Asortat cu restul casei', text: 'Aceeași esență și aceeași feronerie ca bucătăria sau dressingul.' },
    ],
    options: [
      { label: 'Componente', values: ['Unit TV suspendat', 'Bibliotecă', 'Comodă / bufet', 'Vitrină cu sticlă', 'Panou decorativ cu riflaj', 'Nișă pentru șemineu electric'] },
      { label: 'Finisaje', values: ['MDF vopsit mat', 'PAL melaminat', 'Furnir natural', 'Lamele de lemn masiv', 'Sticlă lăcuită'] },
      { label: 'Iluminare', values: ['Bandă LED în spatele riflajului', 'Spoturi în vitrină', 'LED sub blat', 'Fără iluminare'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '3 – 4 săptămâni de la avans' },
      { label: 'Grosime polițe', value: '25 – 32 mm la deschideri peste 90 cm' },
      { label: 'Montaj', value: 'Suspendat pe structură metalică ascunsă' },
      { label: 'Garanție', value: '24 de luni' },
    ],
    faq: [
      {
        q: 'Se poate monta televizorul direct pe panou?',
        a: 'Da. Punem în spatele panoului o structură metalică sau un panou dublat, dimensionat pentru greutatea televizorului, și lăsăm ieșirile de cablu exact în spatele lui.',
      },
      {
        q: 'Riflajul se curăță greu?',
        a: 'Se șterge cu o lavetă uscată sau cu peria moale a aspiratorului, o dată la câteva săptămâni. Cu pas de lamelă de 3–4 cm, praful nu se adună atât cât v-ați aștepta.',
      },
      {
        q: 'Puteți integra un șemineu electric?',
        a: 'Da. Avem nevoie de modelul exact, ca să croim nișa și să lăsăm aerisirile și priza în poziția corectă.',
      },
    ],
    folders: ['living'],
    hero: 'living/02',
    related: ['bucatarii', 'birouri', 'scaune'],
  },
  {
    slug: 'paturi-lemn-masiv',
    name: 'Paturi din lemn masiv',
    h1: 'Paturi din lemn masiv, făcute la comandă',
    eyebrow: 'Dormitor',
    metaTitle: 'Paturi din lemn masiv la comandă | Bacău',
    metaDescription:
      'Paturi din lemn masiv — stejar, frasin, nuc — făcute la comandă în județul Bacău. Tăblie pe măsură, ladă de depozitare, noptiere asortate.',
    intro: 'Un pat din lemn masiv nu scârțâie, nu se clatină și rămâne în casă mai mult decât salteaua pe care o susține.',
    lead:
      'Facem paturi din stejar, frasin, nuc și cireș, la dimensiunea saltelei pe care o aveți sau pe care o veți cumpăra. Tăblia, înălțimea și finisajul le alegeți dumneavoastră; îmbinările le facem noi, cu cepuri și cu șuruburi de pat care se pot strânge la nevoie.',
    sections: [
      {
        h3: 'De ce lemn masiv și nu PAL',
        body: [
          'Un pat de PAL cedează, de regulă, în îmbinări: găurile se lărgesc, șuruburile se rotesc în gol și patul începe să scârțâie la fiecare mișcare. Lemnul masiv se comportă altfel — se strânge și rămâne strâns, iar dacă totuși se slăbește, se poate restrânge de zeci de ori.',
          'Masivul se și repară. O zgârietură adâncă se șlefuiește local și se reface finisajul. Pe PAL melaminat, o zgârietură rămâne acolo pentru totdeauna.',
        ],
      },
      {
        h3: 'Tăblia — partea care schimbă camera',
        body: [
          'Tăblia din lame verticale sau orizontale de masiv e varianta care se potrivește cel mai bine cu un dormitor modern. Poate urca până la 120–140 cm de la podea și poate continua pe lateral, ca un panou de perete.',
          'Alternativ, facem tăblii tapițate cu spumă și stofă sau piele ecologică, cu rama din masiv. E varianta pe care o alegeți dacă citiți în pat și vreți sprijin moale la spate.',
          'Pentru camerele mici, tăblia joasă, de 50–70 cm, cu o linie curată și fără ornamente, face camera să pară mai înaltă.',
        ],
      },
      {
        h3: 'Ladă de depozitare și somieră',
        body: [
          'Patul cu ladă e cea mai ieftină cameră de depozitare pe care o puteți avea. Montăm mecanism cu pistoane pe gaz, dimensionat pentru greutatea saltelei, ca să ridicați somiera cu o mână.',
          'Somiera cu lamele curbate din lemn stratificat ventilează salteaua și îi prelungește viața. Lamelele stau în suporturi de cauciuc, care absorb șocul și nu scârțâie ca cele fixate direct în lemn.',
        ],
      },
      {
        h3: 'Noptiere și restul camerei',
        body: [
          'Facem noptiere asortate — suspendate sau pe picioare — din aceeași esență și cu același finisaj ca patul. Suspendate arată mai ușor și lasă loc să se aspire dedesubt.',
          'Dacă vreți camera completă, adăugăm dressing sau dulap în aceeași cheie, ca să nu combinați trei nuanțe de lemn în aceeași încăpere.',
        ],
      },
    ],
    benefits: [
      { title: 'Îmbinări care se pot restrânge', text: 'Cepuri și șuruburi de pat, nu dibluri de plastic care se lărgesc.' },
      { title: 'Dimensiune pe salteaua dumneavoastră', text: 'Croim rama pe cotele reale ale saltelei, cu joc controlat de 1–2 cm.' },
      { title: 'Finisaj care se poate repara', text: 'Ulei sau lac mat, ambele reparabile local dacă se zgârie.' },
      { title: 'Noptiere asortate', text: 'Aceeași esență, același finisaj, aceeași fibră.' },
    ],
    options: [
      { label: 'Esență', values: ['Stejar', 'Frasin', 'Nuc', 'Cireș', 'Pin (variantă economică)'] },
      { label: 'Dimensiuni saltea', values: ['140 × 200 cm', '160 × 200 cm', '180 × 200 cm', '200 × 200 cm', 'Dimensiune specială'] },
      { label: 'Tăblie', values: ['Lame verticale din masiv', 'Panou continuu', 'Tapițată cu stofă', 'Tapițată cu piele ecologică', 'Tăblie joasă'] },
      { label: 'Extra', values: ['Ladă cu pistoane pe gaz', 'Somieră cu lamele curbate', 'Noptiere suspendate', 'Bandă LED sub ramă', 'Picioare metalice'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '4 – 6 săptămâni (masivul cere uscare și finisare)' },
      { label: 'Grosime ramă', value: '30 – 40 mm masiv' },
      { label: 'Finisaj', value: 'Ulei natural sau lac pe bază de apă' },
      { label: 'Garanție', value: '24 de luni pentru structură' },
    ],
    faq: [
      {
        q: 'Ce lemn e cel mai bun pentru un pat?',
        a: 'Stejarul, dacă vreți rezistență maximă și fibră vizibilă. Frasinul, dacă vreți ceva deschis la culoare și mai ieftin. Nucul, dacă vreți o cameră închisă la culoare și elegantă. Pinul e cea mai ieftină variantă de masiv, dar se zgârie ușor.',
      },
      {
        q: 'Patul din masiv scârțâie?',
        a: 'Nu, dacă îmbinările sunt făcute corect și dacă strângeți șuruburile o dată pe an, în primii doi ani. Lemnul lucrează cu umiditatea din casă; o strângere ocazională e normală pentru orice mobilă de masiv.',
      },
      {
        q: 'Pot pune saltea cu arcuri pe somiera cu lamele?',
        a: 'Da. Pentru saltele cu arcuri, recomandăm lamele mai dese, la maximum 6–7 cm distanță, ca să nu se simtă golurile prin saltea.',
      },
      {
        q: 'Cât de mult se închide la culoare lemnul în timp?',
        a: 'Nucul și cireșul se închid vizibil în primii doi ani, mai ales la lumină directă. Stejarul și frasinul se îngălbenesc ușor. Finisajul cu filtru UV încetinește procesul, dar nu îl oprește — e o caracteristică a lemnului, nu un defect.',
      },
    ],
    folders: ['stock/paturi'],
    hero: 'stock/paturi/02',
    related: ['dressinguri', 'mese-lemn-masiv', 'mobilier-living'],
  },
  {
    slug: 'usi-exterior',
    name: 'Uși de exterior',
    h1: 'Uși de exterior din lemn masiv, pe comandă',
    eyebrow: 'Uși de exterior',
    metaTitle: 'Uși de exterior din lemn masiv | Bacău',
    metaDescription:
      'Uși de intrare din lemn masiv stratificat, făcute la comandă în județul Bacău: toc izolat, garnituri duble, feronerie de siguranță, tratament pentru exterior.',
    intro: 'Ușa de la intrare ține afară frigul, apa și pe cine nu e invitat. Toate trei depind de cum e făcut tocul, nu doar foaia.',
    lead:
      'Facem uși de exterior din lemn masiv stratificat — stejar sau meranti — cu toc izolat, garnituri duble și feronerie de siguranță. Fiecare ușă se croiește pe golul real din zid, măsurat pe diagonală, nu pe cotele din proiectul casei.',
    sections: [
      {
        h3: 'De ce lemn stratificat, nu masiv dintr-o bucată',
        body: [
          'O foaie de ușă făcută dintr-o singură bucată de lemn se curbează. Diferența de umiditate dintre interior și exterior — uneori 30% iarna — trage scândura într-o parte, iar ușa începe să frece sau să nu mai închidă.',
          'Lemnul stratificat se face din trei straturi lipite cu fibra alternată. Straturile se blochează reciproc, iar foaia rămâne dreaptă. Aspectul rămâne de lemn masiv, pentru că stratul de la suprafață chiar este lemn masiv.',
        ],
      },
      {
        h3: 'Toc, garnituri și prag',
        body: [
          'Tocul îl facem tot din stratificat, cu canal pentru două rânduri de garnituri de cauciuc — una pe toc, una pe foaie. Două garnituri înseamnă două bariere pentru aer și pentru zgomot.',
          'Pragul e locul unde intră apa în 90% din cazuri. Montăm prag de aluminiu cu rupere de punte termică și pantă spre exterior, plus o garnitură de măturare pe partea de jos a foii.',
          'Între toc și zid punem spumă poliuretanică și bandă de etanșare, iar la exterior bandă expandabilă care lasă peretele să respire, dar nu lasă apa să intre.',
        ],
      },
      {
        h3: 'Feronerie și siguranță',
        body: [
          'Montăm, în mod obișnuit, broască multipunct cu trei sau cinci puncte de zăvorâre, cilindru de siguranță și balamale reglabile pe trei axe, dimensionate pentru greutatea foii.',
          'Ușa se poate echipa cu vizor, cu yală electromagnetică sau cu o broască smart, dacă vreți acces fără cheie. Alegerea se face înainte de producție, pentru că frezările se fac în atelier.',
        ],
      },
      {
        h3: 'Finisaj pentru exterior',
        body: [
          'Pentru fața dinspre stradă folosim lazură cu filtru UV sau lac pentru exterior, aplicat în minimum trei straturi, cu șlefuire între ele. Fața dinspre interior poate fi finisată diferit, ca să se potrivească cu ușile de interior.',
          'Un finisaj bun cere reîmprospătare o dată la 4–6 ani, în funcție de cât de expusă e ușa. Dacă ușa are copertină deasupra, intervalul se dublează — e cea mai ieftină investiție pe care o puteți face pentru ea.',
        ],
      },
    ],
    benefits: [
      { title: 'Lemn stratificat pe trei straturi', text: 'Foaia rămâne dreaptă și iarna, și vara, indiferent de diferența de umiditate.' },
      { title: 'Două rânduri de garnituri', text: 'Mai puțin curent, mai puțin zgomot, factură mai mică la încălzire.' },
      { title: 'Prag cu rupere de punte termică', text: 'Apa nu intră, iar pe prag nu se formează condens iarna.' },
      { title: 'Broască multipunct', text: 'Trei sau cinci puncte de zăvorâre și cilindru de siguranță, din standard.' },
    ],
    options: [
      { label: 'Esență', values: ['Stejar stratificat', 'Meranti', 'Frasin', 'Pin tratat'] },
      { label: 'Model', values: ['Panou plin', 'Cu casete frezate', 'Cu geam termopan', 'Cu lumini laterale', 'Ușă dublă'] },
      { label: 'Feronerie', values: ['Broască multipunct 3 puncte', 'Broască multipunct 5 puncte', 'Yală electromagnetică', 'Broască smart', 'Vizor panoramic'] },
      { label: 'Finisaj', values: ['Lazură transparentă', 'Lazură colorată', 'Vopsea pentru exterior', 'Nuanță interioară diferită'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '5 – 7 săptămâni' },
      { label: 'Grosime foaie', value: '68 mm standard, 78 mm pentru izolare sporită' },
      { label: 'Geam', value: 'Termopan tripan, cu sticlă securizată' },
      { label: 'Garanție', value: '24 de luni pentru foaie, toc și feronerie' },
    ],
    faq: [
      {
        q: 'O ușă de lemn nu se umflă iarna?',
        a: 'Foaia din stratificat nu, pentru că straturile lipite cu fibra alternată se blochează reciproc. Se umflă ușile făcute dintr-o singură scândură sau cele cu finisaj neîntreținut, care absorb apă pe cant.',
      },
      {
        q: 'Cât de des trebuie întreținută?',
        a: 'Reîmprospătarea finisajului o dată la 4–6 ani, mai des dacă ușa e expusă direct la soare și la ploaie. O copertină deasupra ușii dublează intervalul.',
      },
      {
        q: 'Se poate monta pe un toc existent?',
        a: 'Nu recomandăm. Tocul vechi are, de obicei, geometria deformată și un singur canal de garnitură, așa că pierdeți exact avantajele pentru care faceți ușa nouă. Înlocuim ansamblul complet.',
      },
      {
        q: 'Ce grosime de foaie îmi trebuie?',
        a: '68 mm e suficient pentru majoritatea caselor. 78 mm merită dacă intrarea dă direct în exterior, fără hol tampon, sau dacă locuiți într-o zonă cu vânt și cu ierni lungi.',
      },
    ],
    folders: ['stock/usi-exterior'],
    hero: 'stock/usi-exterior/01',
    related: ['usi-interior', 'mese-lemn-masiv', 'paturi-lemn-masiv'],
  },
  {
    slug: 'usi-interior',
    name: 'Uși de interior',
    h1: 'Uși de interior la comandă în Bacău',
    eyebrow: 'Uși de interior',
    metaTitle: 'Uși de interior la comandă Bacău',
    metaDescription:
      'Uși de interior la comandă în județul Bacău: MDF vopsit, furnir sau lemn masiv, toc reglabil, variante batante, glisante și culisante în perete. Montaj inclus.',
    intro: 'O ușă de interior se atinge de câteva zeci de ori pe zi. Se vede imediat dacă e ieftină.',
    lead:
      'Facem uși de interior pe dimensiunea reală a golului, cu toc reglabil care acoperă grosimi de perete între 8 și 30 de cm. Variante: batante clasice, glisante pe perete, culisante în perete sau uși înalte, până în tavan.',
    sections: [
      {
        h3: 'Materiale: MDF vopsit, furnir sau masiv',
        body: [
          '<strong>MDF vopsit</strong> e cea mai curată variantă pentru un interior modern: suprafață perfect plană, fără fibră, în orice culoare RAL. Se poate face cu freze decorative sau complet neted, fără nicio linie.',
          '<strong>Furnirul natural</strong> arată ca lemnul masiv și costă considerabil mai puțin. La comenzi de mai multe uși, potrivim furnirul ca fibra să curgă la fel pe toate, ceea ce nu se întâmplă niciodată la ușile de raft.',
          '<strong>Lemnul masiv</strong> îl folosim când vreți uși cu casete frezate, într-o casă cu caracter, sau când ușile trebuie să se potrivească cu tâmplăria existentă.',
        ],
      },
      {
        h3: 'Toc reglabil și montaj fără crăpături',
        body: [
          'Tocul reglabil se compune din două jumătăți care culisează una în alta și strâng peretele între ele. Acoperă diferențele de grosime dintre pereți și elimină nevoia de a mai da cu gletul după montaj.',
          'Pe golul de zid măsurăm și diagonalele. Dacă golul e trapezoidal — ceea ce se întâmplă des în construcțiile vechi — compensăm din spume și din poziția tocului, nu din tăierea foii.',
        ],
      },
      {
        h3: 'Batantă, glisantă sau culisantă în perete',
        body: [
          '<strong>Batantă</strong> e varianta standard: cea mai bună izolare fonică și cel mai simplu montaj. Are nevoie de o rază liberă de deschidere.',
          '<strong>Glisantă pe perete</strong> nu fură spațiu în cameră și se montează pe o șină aparentă, deasupra golului. Se vede mecanismul, ceea ce poate fi chiar un element de design.',
          '<strong>Culisantă în perete</strong>, cu casetă îngropată, dispare complet când e deschisă. Cere ca peretele să fie pregătit din construcție sau refăcut, deci e o decizie de luat devreme.',
        ],
      },
      {
        h3: 'Detalii care se simt zilnic',
        body: [
          'Balamalele ascunse, cu reglaj pe trei axe, lasă cantul curat când ușa e închisă și permit alinierea perfectă după ce zidăria se așază.',
          'Garnitura pe tot conturul tocului reduce zgomotul și oprește curentul dintre camere. La băi și la bucătării, garnitura contează și pentru mirosuri.',
          'Pe uși înalte, până în tavan, montăm trei balamale și folosim foi mai groase, ca să nu se lase în timp sub propria greutate.',
        ],
      },
    ],
    benefits: [
      { title: 'Toc reglabil 8 – 30 cm', text: 'Se strânge pe peretele existent, fără glet și fără crăpături după montaj.' },
      { title: 'Fibră potrivită între uși', text: 'La comenzi de mai multe uși, furnirul curge la fel pe toate.' },
      { title: 'Balamale ascunse cu reglaj', text: 'Cant curat, aliniere perfectă și după ce casa se așază.' },
      { title: 'Variantă pentru orice perete', text: 'Batantă, glisantă aparentă sau culisantă în casetă.' },
    ],
    options: [
      { label: 'Material', values: ['MDF vopsit mat', 'MDF vopsit lucios', 'Furnir natural', 'Lemn masiv', 'Cu inserție de sticlă'] },
      { label: 'Tip deschidere', values: ['Batantă', 'Glisantă pe perete', 'Culisantă în casetă', 'Dublă (două canate)', 'Pivotantă'] },
      { label: 'Toc', values: ['Reglabil 8–15 cm', 'Reglabil 15–30 cm', 'Toc ascuns (fără pervaz)', 'Toc de aluminiu'] },
      { label: 'Extra', values: ['Garnitură perimetrală', 'Grilă de ventilație', 'Prag cu perie', 'Mânere asortate', 'Înălțime până în tavan'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '3 – 5 săptămâni' },
      { label: 'Grosime foaie', value: '40 mm standard' },
      { label: 'Dimensiuni uzuale', value: '60, 70, 80, 90 cm — sau pe cotă specială' },
      { label: 'Garanție', value: '24 de luni' },
    ],
    faq: [
      {
        q: 'Cât costă mai mult o ușă pe cotă specială?',
        a: 'La MDF vopsit, aproape deloc — se croiește oricum pe dimensiune. La ușile cu furnir, diferența apare doar dacă foaia depășește lățimea standard a foii de furnir.',
      },
      {
        q: 'Ce fac dacă golul din perete e strâmb?',
        a: 'E cazul obișnuit în blocurile vechi. Compensăm din poziționarea tocului și din spumă, iar pervazul acoperă diferența. Nu tăiem foaia în unghi — s-ar vedea la închidere.',
      },
      {
        q: 'Ușa glisantă izolează fonic?',
        a: 'Mai slab decât o ușă batantă, pentru că nu se poate etanșa pe tot conturul. Pentru dormitoare și birouri recomandăm batantă; glisanta e potrivită între living și bucătărie sau la debarale.',
      },
      {
        q: 'Montați și pervazul?',
        a: 'Da, pervazul intră în preț și îl montăm pe ambele fețe ale peretelui, cu îmbinare la 45 de grade în colțuri.',
      },
    ],
    folders: ['usi-interior', 'stock/usi-interior'],
    hero: 'stock/usi-interior/01',
    related: ['usi-exterior', 'dressinguri', 'mobilier-living'],
  },
  {
    slug: 'mese-lemn-masiv',
    name: 'Mese din lemn masiv',
    h1: 'Mese din lemn masiv, făcute pe comandă',
    eyebrow: 'Mese',
    metaTitle: 'Mese din lemn masiv la comandă | Bacău',
    metaDescription:
      'Mese din lemn masiv la comandă în județul Bacău: blat din stejar, frasin sau nuc, variante extensibile și cu muchie naturală. Finisaj cu ulei sau lac.',
    intro: 'O masă din lemn masiv adună familia timp de treizeci de ani și arată mai bine la final decât la început.',
    lead:
      'Facem mese de bucătărie, de sufragerie și de cafea din lemn masiv — stejar, frasin, nuc, cireș. Blatul poate fi lamelar, din scânduri late sau cu muchie naturală, iar picioarele din lemn sau metal, după cum vreți să arate camera.',
    sections: [
      {
        h3: 'Blatul: lamelar, scândură lată sau muchie naturală',
        body: [
          '<strong>Blatul lamelar</strong> se face din lamele înguste lipite cap la cap. E cea mai stabilă variantă — tensiunile din lemn se anulează reciproc — și cea mai accesibilă ca preț. Fibra e uniformă, fără surprize.',
          '<strong>Scândurile late</strong>, de 20–30 cm, dau un blat cu caracter, cu noduri și cu desen mare. Cer lemn bine uscat și o structură dedesubt care să permită lemnului să lucreze.',
          '<strong>Muchia naturală</strong> (live edge) păstrează conturul buștenului pe laterale. Fiecare masă e unică, iar crăpăturile se umplu cu rășină epoxidică, transparentă sau colorată.',
        ],
      },
      {
        h3: 'Uscarea lemnului — pasul pe care nu-l puteți vedea',
        body: [
          'Lemnul pentru mobilă de interior trebuie adus la 8–10% umiditate. Peste această valoare, blatul se va curba sau va crăpa în primul sezon de încălzire, indiferent cât de bine e lucrat.',
          'Verificăm umiditatea cu umidometrul înainte de croire, nu după. E diferența dintre o masă care ține treizeci de ani și una care crapă în ianuarie.',
        ],
      },
      {
        h3: 'Mese extensibile',
        body: [
          'Pentru bucătării mici facem mese extensibile, cu mecanism sincronizat: trageți de blat și cele două jumătăți se depărtează egal, iar extensia se ridică singură din interior.',
          'O masă de 140 cm se poate transforma în 200 cm, adică din patru locuri în opt. Mecanismul suportă greutatea blatului de masiv, care e considerabil mai mare decât a unuia de PAL.',
        ],
      },
      {
        h3: 'Finisaj: ulei sau lac',
        body: [
          '<strong>Uleiul natural</strong> pătrunde în lemn și lasă suprafața la atingere ca lemnul. Se repară local: șlefuiți ușor zona afectată și dați ulei peste. Cere reîmprospătare o dată la unu-doi ani.',
          '<strong>Lacul pe bază de apă</strong> formează o peliculă și e mai rezistent la pete de vin, de ulei și de suc. În schimb, dacă se zgârie adânc, reparația se vede — trebuie refăcută toată suprafața.',
          'Pentru mese de bucătărie folosite zilnic, cu copii, recomandăm lac mat. Pentru mese de sufragerie, folosite mai rar, uleiul dă un aspect mai cald și mai natural.',
        ],
      },
    ],
    benefits: [
      { title: 'Lemn uscat la 8 – 10%', text: 'Verificat cu umidometrul înainte de croire, nu doar promis.' },
      { title: 'Dimensiune pe camera dumneavoastră', text: 'Croim lungimea și lățimea după spațiul rămas în jurul mesei, nu după un catalog.' },
      { title: 'Structură care lasă lemnul să lucreze', text: 'Prinderi elastice pe traversă, ca blatul să se dilate fără să crape.' },
      { title: 'Finisaj reparabil', text: 'Ulei sau lac mat, amândouă reîmprospătabile fără să schimbați masa.' },
    ],
    options: [
      { label: 'Esență', values: ['Stejar', 'Frasin', 'Nuc', 'Cireș', 'Salcâm'] },
      { label: 'Tip blat', values: ['Lamelar', 'Scânduri late', 'Muchie naturală (live edge)', 'Cu inserție de rășină'] },
      { label: 'Picioare', values: ['Din lemn masiv', 'Metal negru mat', 'Metal tip X sau U', 'Picior central'] },
      { label: 'Funcții', values: ['Fixă', 'Extensibilă cu mecanism sincronizat', 'Cu sertar', 'Cu bancă asortată'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '4 – 6 săptămâni' },
      { label: 'Grosime blat', value: '30 – 50 mm, după model' },
      { label: 'Umiditate lemn', value: '8 – 10%, verificată la croire' },
      { label: 'Garanție', value: '24 de luni' },
    ],
    faq: [
      {
        q: 'Ce dimensiune de masă îmi trebuie?',
        a: 'Socotiți 60 cm de lățime pentru fiecare persoană și lăsați minimum 90 cm liberi în jurul mesei, ca să se poată trage scaunul. Pentru șase persoane, 160–180 × 90 cm e dimensiunea confortabilă.',
      },
      {
        q: 'Se pot pune vase fierbinți direct pe blat?',
        a: 'Nu, nici pe lac, nici pe ulei. Peste 70 °C, finisajul se albește, iar lemnul poate crăpa din cauza șocului termic. Un suport de plută rezolvă problema.',
      },
      {
        q: 'Blatul de masiv crapă?',
        a: 'Dacă lemnul e uscat corect și structura îi permite să se dilate, nu. Fisurile apar la blaturi prinse rigid pe toată suprafața sau la lemn insuficient uscat.',
      },
      {
        q: 'Faceți și bănci sau colțare asortate?',
        a: 'Da, facem bănci simple, bănci cu spătar și colțare de bucătărie, în aceeași esență și cu același finisaj ca masa.',
      },
    ],
    folders: ['mese'],
    hero: 'mese/01',
    related: ['scaune', 'bucatarii', 'paturi-lemn-masiv'],
  },
  {
    slug: 'birouri',
    name: 'Birouri',
    h1: 'Birouri la comandă pentru casă și firmă',
    eyebrow: 'Birouri',
    metaTitle: 'Birouri la comandă Bacău | Home office',
    metaDescription:
      'Birouri la comandă în județul Bacău: birou încastrat cu bibliotecă, home office pe măsura camerei, management de cabluri și iluminare. Ofertă gratuită.',
    intro: 'Cel mai bun birou e cel care intră exact în nișa pe care o aveți deja și care nu vă lasă cabluri pe jos.',
    lead:
      'Facem birouri pentru acasă și pentru firme: blat pe toată lățimea camerei, corpuri cu sertare, bibliotecă deasupra și trasee de cablu ascunse. Lucrăm mult cu nișe, cu pervazuri de fereastră transformate în blat și cu mansarde.',
    sections: [
      {
        h3: 'Blatul, înălțimea și lumina',
        body: [
          'Înălțimea standard a blatului e 74–76 cm, dar dacă sunteți mai înalt de 1,85 m sau mai scund de 1,60 m, merită ajustată. Cotul trebuie să stea la 90 de grade când mâna e pe tastatură; altfel ajungeți la umăr, în câteva luni.',
          'Cel mai bun loc pentru birou e cu fereastra în lateral, nu în față și nici în spate. În față, vă orbește; în spate, se reflectă în ecran. Când poziția e impusă, compensăm cu o bandă LED sub raftul de deasupra.',
          'Adâncimea minimă utilă pentru un birou cu monitor e 60 cm. Sub 55 cm, monitorul e prea aproape de ochi și nu mai aveți loc de tastatură și de caiet în același timp.',
        ],
      },
      {
        h3: 'Cablurile — ce separă un birou frumos de unul folosibil',
        body: [
          'În proiect prevedem o canalizație în spatele blatului, o pasare de cablu pe blat și o cutie de prize montată sub blat sau într-un sertar dedicat. Prelungitorul nu mai atârnă, iar sub birou se poate aspira.',
          'Pentru setup-urile cu mai multe monitoare, montăm și suportul pe blat sau pe panoul din spate, dimensionat pentru greutate, ca să eliberăm complet suprafața de lucru.',
        ],
      },
      {
        h3: 'Birou încastrat, cu bibliotecă',
        body: [
          'Cea mai eficientă variantă într-o cameră mică: blatul intră din perete în perete, iar deasupra urcă rafturi și corpuri închise, până în tavan. Câștigați depozitare fără să adăugați mobilă separată în cameră.',
          'În mansarde, biroul se poate așeza sub panta acoperișului: blatul merge pe partea joasă, iar rafturile urcă pe partea înaltă. E singurul mod de a folosi bine zona în care nu se poate sta în picioare.',
        ],
      },
    ],
    benefits: [
      { title: 'Înălțime pe statura dumneavoastră', text: 'Blatul se croiește la cota la care cotul stă la 90 de grade.' },
      { title: 'Cabluri ascunse din proiect', text: 'Canalizație, pasare pe blat și cutie de prize incluse, nu improvizate.' },
      { title: 'Intră exact în nișă', text: 'Croit pe cotele reale ale camerei, inclusiv pe pantă de mansardă.' },
      { title: 'Bibliotecă asortată', text: 'Rafturi și corpuri închise deasupra, pe aceeași structură.' },
    ],
    options: [
      { label: 'Configurație', values: ['Birou liniar', 'Birou în L', 'Birou încastrat în nișă', 'Birou sub pervaz', 'Birou dublu (două posturi)'] },
      { label: 'Blat', values: ['PAL melaminat 25 mm', 'MDF vopsit', 'Lemn masiv', 'Blat cu cant frezat'] },
      { label: 'Depozitare', values: ['Corp cu sertare', 'Casetieră mobilă', 'Bibliotecă deasupra', 'Corpuri închise', 'Dulap pentru dosare'] },
      { label: 'Extra', values: ['Pasare de cablu', 'Cutie de prize sub blat', 'Bandă LED sub raft', 'Suport de monitor integrat', 'Panou din plută sau magnetic'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '2 – 4 săptămâni' },
      { label: 'Înălțime blat', value: '74 – 76 cm standard, ajustabilă' },
      { label: 'Adâncime recomandată', value: 'minimum 60 cm' },
      { label: 'Garanție', value: '24 de luni' },
    ],
    faq: [
      {
        q: 'Puteți face birou pe toată lungimea peretelui?',
        a: 'Da, e chiar varianta pe care o recomandăm în camere mici. Peste 160 cm de deschidere liberă, punem un picior sau un corp intermediar, ca blatul să nu se lase.',
      },
      {
        q: 'Faceți și birouri reglabile pe înălțime?',
        a: 'Da, montăm blatul nostru pe cadru electric reglabil. Blatul de masiv e greu, așa că folosim cadre cu motoare duble, dimensionate pentru sarcina reală.',
      },
      {
        q: 'Se poate face birou pentru două persoane în aceeași cameră?',
        a: 'Da, față în față sau în L, pe doi pereți. Important e să rămână 90 cm liberi în spatele fiecărui scaun, ca să vă puteți ridica fără să vă ciocniți.',
      },
    ],
    folders: ['birouri', 'stock/birouri'],
    hero: 'birouri/01',
    related: ['mobilier-living', 'dressinguri', 'scaune'],
  },
  {
    slug: 'scaune',
    name: 'Scaune și bănci',
    h1: 'Scaune și bănci din lemn masiv',
    eyebrow: 'Scaune',
    metaTitle: 'Scaune din lemn masiv la comandă | Bacău',
    metaDescription:
      'Scaune, bănci și colțare din lemn masiv, făcute la comandă în județul Bacău. Asortate cu masa, cu șezut din lemn sau tapițat. Ofertă gratuită.',
    intro: 'Un scaun prost se simte în primele zece minute. Unul bun nu se simte deloc.',
    lead:
      'Facem scaune, taburete de bar, bănci și colțare de bucătărie din lemn masiv, asortate cu masa. Îmbinările le facem cu cep și scobitură — sistemul care ține un scaun întreg după ani de tras și împins pe podea.',
    sections: [
      {
        h3: 'Îmbinări: de ce cep și scobitură',
        body: [
          'Un scaun primește forțe în toate direcțiile: vă lăsați pe spate, îl trageți lateral, îl răsuciți când vă ridicați. Diblurile și șuruburile cedează la torsiune, iar picioarele încep să se miște în câțiva ani.',
          'Îmbinarea cu cep și scobitură lucrează pe suprafață mare de lipire și blochează piesa în două direcții. E metoda folosită de sute de ani, pentru că nu s-a inventat ceva mai bun la acest tip de solicitare.',
        ],
      },
      {
        h3: 'Șezut din lemn sau tapițat',
        body: [
          'Șezutul din lemn, scobit anatomic, e ușor de curățat și rezistă oricât. Pentru mese la care se stă ore întregi, adăugăm o pernă detașabilă.',
          'Șezutul tapițat, cu spumă de 5–6 cm și stofă sau piele ecologică, e mai confortabil din prima. Folosim materiale cu rezistență la frecare de minimum 30.000 de cicluri Martindale — sub această valoare, stofa se uzează vizibil în doi ani.',
        ],
      },
      {
        h3: 'Bănci și colțare de bucătărie',
        body: [
          'Banca economisește spațiu: intră sub masă și lasă trecerea liberă. Pe aceeași lungime intră mai multe persoane decât pe scaune separate.',
          'Colțarul de bucătărie, cu ladă de depozitare sub șezut, e soluția pentru bucătăriile mici. Se croiește pe colțul real al camerei, inclusiv pe unghiuri care nu sunt de 90 de grade.',
        ],
      },
      {
        h3: 'Taburete de bar',
        body: [
          'Pentru un blat de bar la 105–110 cm, înălțimea corectă a șezutului e 75–80 cm. Pentru un blat de bucătărie la 90 cm, șezutul trebuie să fie la 60–65 cm. Diferența de 25–30 cm între blat și șezut e regula de la care nu ne abatem.',
          'Pe taburete montăm întotdeauna o bară de sprijin pentru picioare. Fără ea, picioarele atârnă și, după douăzeci de minute, nu mai stă nimeni pe scaun.',
        ],
      },
    ],
    benefits: [
      { title: 'Îmbinări cu cep și scobitură', text: 'Rezistă la torsiune, nu se slăbesc ca diblurile.' },
      { title: 'Asortate cu masa', text: 'Aceeași esență și același finisaj, executate în aceeași serie.' },
      { title: 'Tapițerie testată', text: 'Stofe de minimum 30.000 de cicluri Martindale, cu husă detașabilă la cerere.' },
      { title: 'Colțare croite pe camera dumneavoastră', text: 'Inclusiv pe colțuri care nu sunt drepte, cu ladă de depozitare dedesubt.' },
    ],
    options: [
      { label: 'Tip', values: ['Scaun cu spătar', 'Scaun fără spătar', 'Taburet de bar', 'Bancă simplă', 'Bancă cu spătar', 'Colțar de bucătărie'] },
      { label: 'Esență', values: ['Stejar', 'Frasin', 'Nuc', 'Fag'] },
      { label: 'Șezut', values: ['Lemn scobit anatomic', 'Tapițat cu stofă', 'Tapițat cu piele ecologică', 'Cu pernă detașabilă', 'Împletit'] },
      { label: 'Extra', values: ['Ladă de depozitare sub bancă', 'Bară de sprijin pentru picioare', 'Talpă de pâslă', 'Finisaj diferit pe picioare'] },
    ],
    specs: [
      { label: 'Termen de execuție', value: '4 – 6 săptămâni' },
      { label: 'Înălțime șezut', value: '45 – 47 cm la scaun, 60 – 80 cm la taburet' },
      { label: 'Tapițerie', value: 'minimum 30.000 cicluri Martindale' },
      { label: 'Garanție', value: '24 de luni pentru structură' },
    ],
    faq: [
      {
        q: 'Câte scaune încap la o masă de 180 cm?',
        a: 'Șase confortabil — două pe fiecare latură lungă și câte unul la capete. Socotiți 60 cm de lățime pentru fiecare persoană.',
      },
      {
        q: 'Faceți scaune după un model pe care îl am?',
        a: 'Da. Trimiteți-ne câteva poze și dimensiunile principale și vă spunem dacă îl putem reproduce exact sau doar ca inspirație.',
      },
      {
        q: 'Scaunele zgârie parchetul?',
        a: 'Montăm din start talpă de pâslă pe fiecare picior. Se schimbă o dată la unu-doi ani și costă câțiva lei, iar parchetul rămâne întreg.',
      },
    ],
    folders: ['scaune', 'stock/scaune'],
    hero: 'stock/scaune/01',
    related: ['mese-lemn-masiv', 'bucatarii', 'mobilier-living'],
  },
];

export const productMap = new Map(products.map((p) => [p.slug, p]));

export function related(slugs: string[]): Product[] {
  return slugs.map((s) => productMap.get(s)).filter((p): p is Product => !!p);
}
