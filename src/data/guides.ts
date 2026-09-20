export interface Guide {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readingTime: number;
  updated: string;
  hero: string;
  /** Rezumatul în 3–4 puncte, afișat sus. Bun și pentru citările din AI / rezultate bogate. */
  takeaways: string[];
  sections: { h3: string; body: string[] }[];
  relatedProducts: string[];
}

export const guides: Guide[] = [
  {
    slug: 'cat-costa-o-bucatarie-la-comanda',
    title: 'Cât costă, de fapt, o bucătărie la comandă',
    h1: 'Cât costă o bucătărie la comandă și de ce diferă atât de mult ofertele',
    metaTitle: 'Cât costă o bucătărie la comandă',
    metaDescription:
      'Din ce se compune prețul unei bucătării la comandă: corpuri, fronturi, blat, feronerie, manoperă. Cum compari corect două oferte și unde se ascund diferențele.',
    excerpt:
      'Două oferte pentru aceeași bucătărie pot diferi cu 70%. Nu pentru că una e „scumpă", ci pentru că măsoară lucruri diferite. Iată ce să comparați.',
    category: 'Buget',
    readingTime: 7,
    updated: '2026-09-20',
    hero: 'stock/bucatarii/03',
    takeaways: [
      'Prețul unei bucătării se compune din corpuri, fronturi, blat, feronerie și manoperă — în proporții foarte diferite de la un proiect la altul.',
      'Feroneria poate reprezenta 15–25% din total și e locul unde se fac cele mai mari economii aparente.',
      'Compararea a două oferte are sens doar dacă ambele detaliază pe poziții: metri liniari, tip de front, marcă de feronerie, grosime de blat.',
      'O ofertă „la pachet", fără detaliere, e aproape întotdeauna în defavoarea dumneavoastră.',
    ],
    sections: [
      {
        h3: 'De ce nu găsiți un preț pe metru liniar',
        body: [
          'Întrebarea „cât costă metrul liniar de bucătărie" e firească, dar răspunsul nu ajută. Un metru liniar poate însemna un corp de jos cu o ușă și un raft, sau un corp cu trei sertare cu extragere totală, organizator de tacâmuri și sistem de colț rotativ. Diferența dintre cele două, la aceeași lungime, e de două-trei ori.',
          'De aceea nu afișăm prețuri pe site. O cifră scoasă din context v-ar face să comparați lucruri care nu se compară și ar transforma discuția într-o negociere pe o cifră greșită.',
        ],
      },
      {
        h3: 'Din ce se compune, concret, prețul',
        body: [
          '<strong>Corpurile</strong> — cutiile propriu-zise. Aici intră placa (PAL sau PAL hidrofug), cantul, debitarea și asamblarea. E partea cea mai previzibilă a ofertei și, de regulă, 25–35% din total.',
          '<strong>Fronturile</strong> — ușile și fețele de sertar. Partea cu cea mai mare variație: un front de PAL melaminat și unul de MDF vopsit mat pot diferi de trei ori la același metru pătrat. Uzual, 20–35% din total.',
          '<strong>Blatul</strong> — de la PAL hidrofug postformat până la piatră compozită, diferența e de cinci-șase ori. 10–25% din total.',
          '<strong>Feroneria</strong> — balamale, glisiere, sisteme de colț, ridicătoare. Aici se fac „economiile" care se simt peste trei ani. 15–25% din total.',
          '<strong>Manopera și montajul</strong> — proiectarea, producția, transportul, montajul și reglajele. 15–20% din total.',
        ],
      },
      {
        h3: 'Unde se ascund diferențele între oferte',
        body: [
          'Grosimea cantului. Un cant ABS de 0,4 mm costă puțin și se dezlipește la primul contact cu aburul de la oală. Unul de 2 mm ține ani. În ofertă, ambele scriu doar „cant ABS".',
          'Spatele corpurilor. Un spate de 3 mm bătut în cuie e mai ieftin decât unul de 8 mm încastrat în canal, dar corpul nu mai rămâne rigid și, în timp, se deformează în paralelogram.',
          'Marca feroneriei. „Balamale cu amortizare" poate însemna Blum, poate însemna un produs nemarcat cu jumătate din numărul de cicluri garantate. Cereți marca scrisă în ofertă.',
          'Ce nu e inclus. Transportul, montajul, decupajele pentru chiuvetă și plită, racordurile, demontarea mobilei vechi — toate pot lipsi dintr-o ofertă care pare mai ieftină.',
        ],
      },
      {
        h3: 'Cum cereți o ofertă pe care o puteți compara',
        body: [
          'Cereți detalierea pe poziții: fiecare corp, cu dimensiunea lui, cu tipul de front și cu feroneria montată. O ofertă serioasă are o pagină, nu un rând.',
          'Cereți marca și modelul pentru balamale și glisiere. Dacă furnizorul evită răspunsul, aveți deja o informație.',
          'Întrebați explicit ce nu e inclus. Lista de excluderi spune mai mult despre o ofertă decât suma finală.',
          'Comparați termenele. O bucătărie promisă în zece zile fie e din module de raft, fie termenul nu se va respecta.',
        ],
      },
    ],
    relatedProducts: ['bucatarii', 'mobilier-living', 'dressinguri'],
  },
  {
    slug: 'pal-mdf-sau-lemn-masiv',
    title: 'PAL, MDF sau lemn masiv — ce alegeți și unde',
    h1: 'PAL, MDF sau lemn masiv: ghidul practic pentru mobila din casă',
    metaTitle: 'PAL, MDF sau lemn masiv — ce alegi | Ghid',
    metaDescription:
      'Diferențele reale dintre PAL, MDF și lemn masiv: rezistență, preț, aspect, întreținere. Unde merită fiecare și unde e bani aruncați.',
    excerpt:
      'Nu există un material „cel mai bun". Există materialul potrivit pentru corpul de sub chiuvetă și altul, complet diferit, pentru masa din sufragerie.',
    category: 'Materiale',
    readingTime: 8,
    updated: '2026-09-20',
    hero: 'stock/texturi/03',
    takeaways: [
      'PAL melaminat e alegerea corectă pentru corpurile de bucătărie și de dressing — stabil, ieftin, ușor de curățat.',
      'MDF vopsit se folosește pentru fronturi, când vreți o culoare anume sau freze decorative.',
      'Lemnul masiv merită acolo unde piesa se atinge și se vede: mese, paturi, scaune, uși, blaturi.',
      'Cea mai bună mobilă combină toate trei — fiecare material acolo unde e cel mai bun.',
    ],
    sections: [
      {
        h3: 'PAL melaminat: calul de povară',
        body: [
          'PAL-ul e făcut din așchii de lemn presate cu rășini și acoperit cu o folie melaminată dură. E stabil dimensional — nu lucrează cu umiditatea din cameră — și de aceea e materialul potrivit pentru cutiile de mobilă, care trebuie să rămână la unghi drept zeci de ani.',
          'Versiunea <strong>hidrofugă</strong>, cu miez verde, e obligatorie la blaturi de bucătărie și la corpurile de sub chiuvetă. Nu e impermeabilă, dar rezistă mult mai bine la aburi și la stropi.',
          'Limitarea principală: nu se poate freza decorativ și, dacă se zgârie adânc, nu se poate repara. Pe de altă parte, decorurile moderne cu relief sincronizat se simt la atingere aproape ca lemnul.',
        ],
      },
      {
        h3: 'MDF: suprafața perfectă',
        body: [
          'MDF-ul e făcut din fibre de lemn, nu din așchii, deci e complet omogen. Se poate freza, se poate rotunji la muchii și se poate vopsi în orice culoare, fără ca fibra să se ridice.',
          'E materialul pentru fronturi: uși de bucătărie vopsite mat, fronturi frezate, uși de interior. Vine în două variante — vopsit sau furniruit cu lemn natural — și amândouă arată impecabil.',
          'Dezavantaje: e greu (cere balamale și glisiere dimensionate corect), e mai scump decât PAL-ul și se umflă ireversibil dacă stă în apă. Nu îl folosiți niciodată pentru corpul de sub chiuvetă.',
        ],
      },
      {
        h3: 'Lemnul masiv: singurul care se repară',
        body: [
          'Masivul are un avantaj pe care celelalte nu îl au: se poate șlefui și refinisa de multe ori. O masă de stejar zgâriată se poate readuce la nou de trei-patru ori, de-a lungul a cincizeci de ani.',
          'În schimb, lucrează. Se dilată vara și se contractă iarna, cu câțiva milimetri pe metru de lățime. O mobilă bine făcută îi lasă loc să se miște — prin prinderi elastice și prin rosturi calculate. Una prost făcută îl blochează, iar lemnul crapă.',
          'Merită acolo unde se vede și se atinge: blat de masă, tăblie de pat, șezut de scaun, foaie de ușă, blat de bucătărie. Nu merită la spatele unui corp de dulap, unde nimeni nu se uită.',
        ],
      },
      {
        h3: 'Combinația care dă cel mai bun rezultat',
        body: [
          'O bucătărie bine gândită are corpuri din PAL (hidrofug jos), fronturi din MDF vopsit sau PAL melaminat și, eventual, un blat de lemn masiv pe insulă. Nimic nu e „ieftin" sau „scump" — fiecare material e acolo unde e cel mai bun.',
          'Un dormitor bine gândit are dressing din PAL, cu fronturi vopsite, și un pat din masiv. Puneți masiv în dressing și plătiți de trei ori mai mult pentru un avantaj pe care nu îl veți simți niciodată.',
        ],
      },
    ],
    relatedProducts: ['bucatarii', 'mese-lemn-masiv', 'usi-interior'],
  },
  {
    slug: 'cum-masori-corect-pentru-mobila-la-comanda',
    title: 'Cum se măsoară corect o cameră pentru mobilă la comandă',
    h1: 'Cum se măsoară corect pentru mobila la comandă',
    metaTitle: 'Cum se măsoară pentru mobila la comandă',
    metaDescription:
      'Ce se măsoară înainte de un proiect de mobilă: lungimi, diagonale, prize, țevi, calorifere. Greșelile care costă cel mai mult la montaj.',
    excerpt:
      'Pereții nu sunt drepți, colțurile nu sunt de 90 de grade și tavanul nu e paralel cu podeaua. O mobilă bine făcută pornește de la acceptarea acestor trei adevăruri.',
    category: 'Proces',
    readingTime: 6,
    updated: '2026-09-20',
    hero: 'stock/atelier/04',
    takeaways: [
      'Măsurați fiecare perete în trei locuri: jos, la mijloc și sus. Diferențele de 2–3 cm sunt normale.',
      'Notați poziția exactă a prizelor, întrerupătoarelor, țevilor, caloriferelor și a robineților.',
      'Măsurați și traseul de acces: ușa de intrare, scara, liftul. O piesă care nu intră pe scară nu ajunge în casă.',
      'Măsurătorile profesionale sunt gratuite — dar e bine să știți ce se măsoară, ca să puteți verifica.',
    ],
    sections: [
      {
        h3: 'Trei măsurători pe fiecare perete, nu una',
        body: [
          'Un perete de trei metri poate avea 298 cm jos, 301 cm la mijloc și 299,5 cm sus. Dacă luați o singură măsurătoare și croiți pe ea, la montaj veți avea fie un rost de trei centimetri, fie o mobilă care nu intră.',
          'Regula: măsurați la 10 cm de podea, la înălțimea blatului și la 10 cm sub tavan. Se lucrează pe cea mai mică valoare, iar diferența se compensează cu baghete de racord și cu laterale ajustabile.',
          'Măsurați și înălțimea în minimum trei puncte. Tavanul se lasă spre mijloc în multe apartamente, iar o mobilă croită până în tavan pe cota din colț nu va intra în centru.',
        ],
      },
      {
        h3: 'Diagonalele spun dacă e colț drept',
        body: [
          'Ca să aflați dacă un colț e de 90 de grade, măsurați 60 cm pe un perete, 80 cm pe celălalt și apoi distanța dintre cele două puncte. Dacă e exact 100 cm, colțul e drept. Dacă e 97 sau 103, nu este.',
          'Diferența contează enorm la bucătăriile în L și la colțarele de bucătărie. Un colț de 87 de grade lasă un rost în formă de pană, de câțiva centimetri, pe care nu-l puteți ascunde după montaj.',
        ],
      },
      {
        h3: 'Tot ce nu e perete, dar e în cale',
        body: [
          'Prizele și întrerupătoarele: notați înălțimea de la podea și distanța față de cel mai apropiat colț. Cele care rămân în spatele mobilei trebuie mutate sau prelungite înainte de montaj.',
          'Țevile, caloriferele, robineții și racordurile de gaz: măsurați poziția și cât ies din perete. Un calorifer care iese 10 cm schimbă toată adâncimea unui corp.',
          'Pervazul ferestrei: lățimea, înălțimea de la podea și cât depășește peretele. Multe blaturi de bucătărie se opresc exact în pervaz.',
          'Ușile: lățimea golului, sensul de deschidere și cât spațiu ocupă ușa deschisă. Nu puteți pune un dulap cu uși batante în fața unei uși care se deschide spre interior.',
        ],
      },
      {
        h3: 'Traseul până în cameră',
        body: [
          'Măsurați ușa de la intrarea în bloc, lățimea scării, cotul scării și dimensiunile liftului. O tăblie de pat de 180 cm sau un blat de masă de 240 cm nu intră pe orice scară.',
          'Dacă traseul e imposibil, soluția e ca piesa să fie proiectată în tronsoane care se asamblează în cameră. E o decizie care se ia la proiectare, nu în ziua montajului.',
        ],
      },
    ],
    relatedProducts: ['bucatarii', 'dressinguri', 'mese-lemn-masiv'],
  },
  {
    slug: 'dressing-sau-dulap-cu-usi-glisante',
    title: 'Dressing sau dulap cu uși glisante?',
    h1: 'Dressing sau dulap cu uși glisante: cum alegeți',
    metaTitle: 'Dressing sau dulap cu uși glisante',
    metaDescription:
      'Diferențele practice dintre un dressing walk-in, un dulap cu uși glisante și unul cu uși batante: spațiu necesar, cost, acces și organizare.',
    excerpt:
      'Alegerea nu e de gust, ci de geometrie: cât spațiu liber aveți în fața dulapului și cât de adâncă poate fi camera.',
    category: 'Amenajare',
    readingTime: 6,
    updated: '2026-09-20',
    hero: 'dressinguri/03',
    takeaways: [
      'Ușile batante cer minimum 60 cm liberi în față; ușile glisante, niciun centimetru.',
      'Sistemul glisant consumă 8–10 cm din adâncimea utilă a dulapului.',
      'Un dressing walk-in are sens de la 4 metri pătrați în sus; sub această suprafață, pierdeți mai mult decât câștigați.',
      'Adâncimea minimă pentru umerașe perpendiculare pe perete e 60 cm.',
    ],
    sections: [
      {
        h3: 'Regula celor 60 de centimetri',
        body: [
          'O ușă batantă de 50 cm lățime are nevoie, ca să se deschidă complet, de o rază liberă egală cu lățimea ei. În practică, aveți nevoie de cel puțin 60 cm între dulap și pat sau între dulap și peretele opus.',
          'Dacă spațiul e mai mic, ușa se deschide parțial, iar accesul la conținut devine incomod. E momentul în care merită sistemul glisant, chiar dacă înseamnă 8–10 cm mai puțin în adâncime.',
        ],
      },
      {
        h3: 'Ce pierdeți și ce câștigați cu glisantele',
        body: [
          'Pierdeți adâncime: șinele, rulmenții și suprapunerea ușilor consumă 8–10 cm. Dintr-un corp de 60 cm rămân 50 cm utili, ceea ce înseamnă că umerașele trebuie puse pe bară laterală, nu frontală.',
          'Pierdeți și vizibilitate: oricât ați deschide, vedeți doar jumătate din dulap odată. Pentru unii oameni, asta e un inconvenient zilnic.',
          'Câștigați spațiu în cameră și un front mare, pe care îl puteți face cu oglindă, cu lamele de lemn sau cu sticlă lăcuită. Vizual, un dulap glisant arată mai curat decât patru uși batante.',
        ],
      },
      {
        h3: 'Când are sens un walk-in',
        body: [
          'Un dressing walk-in — cameră separată, cu rafturi pe pereți și fără uși pe corpuri — are sens de la circa 4 metri pătrați. Sub această suprafață, culoarul de trecere mănâncă mai mult decât câștigați din lipsa ușilor.',
          'Walk-in-ul cere și disciplină: totul e la vedere, deci dezordinea se vede. Dacă nu sunteți genul care așază lucrurile la loc în fiecare zi, un dulap cu uși e alegerea mai relaxată.',
          'Varianta de mijloc, pe care o facem cel mai des: dressing pe toată lungimea peretelui, cu uși glisante, și sertare cu fronturi în partea de jos. Arată curat, nu cere cameră separată și ascunde dezordinea.',
        ],
      },
      {
        h3: 'Adâncimea corectă, pe tipuri',
        body: [
          '<strong>60 cm</strong> — standardul pentru umerașe perpendiculare pe perete. Sub această cotă, hainele ating ușa.',
          '<strong>45–50 cm</strong> — se poate, dar doar cu bară laterală (paralelă cu peretele) sau cu bară extractibilă. Capacitatea scade cu aproape jumătate.',
          '<strong>35 cm</strong> — numai pentru rafturi de pulovere, cutii și pantofi. Nu pentru haine pe umeraș.',
        ],
      },
    ],
    relatedProducts: ['dressinguri', 'usi-interior', 'paturi-lemn-masiv'],
  },
  {
    slug: 'finisaje-pentru-lemn-lac-ulei-sau-ceara',
    title: 'Lac, ulei sau ceară — ce finisaj alegeți pentru lemn',
    h1: 'Lac, ulei sau ceară: ce finisaj alegeți pentru mobila din lemn',
    metaTitle: 'Lac, ulei sau ceară pentru lemn',
    metaDescription:
      'Comparație practică între lac, ulei natural și ceară tare: rezistență la pete, aspect, reparabilitate și întreținere pe termen lung.',
    excerpt:
      'Lacul protejează mai bine, dar se repară mai greu. Uleiul se repară oricând, dar cere întreținere. Alegerea depinde de cum folosiți piesa, nu de cum arată în magazin.',
    category: 'Materiale',
    readingTime: 6,
    updated: '2026-09-20',
    hero: 'stock/texturi/02',
    takeaways: [
      'Lacul formează peliculă și protejează cel mai bine la pete — potrivit pentru mese de bucătărie folosite zilnic.',
      'Uleiul pătrunde în lemn, se repară local și păstrează atingerea naturală — potrivit pentru mese de sufragerie și birouri.',
      'Ceara tare e la mijloc: aspect natural, protecție mai bună decât uleiul pur.',
      'Niciun finisaj nu suportă vase fierbinți puse direct pe blat.',
    ],
    sections: [
      {
        h3: 'Cum funcționează fiecare',
        body: [
          '<strong>Lacul</strong> rămâne la suprafață și formează o peliculă transparentă de câteva zecimi de milimetru. Lichidele nu ajung la lemn. Atingerea e de peliculă, nu de lemn — la variantele mate, diferența e mică, dar există.',
          '<strong>Uleiul</strong> pătrunde în fibră și polimerizează în interiorul lemnului. Nu există peliculă, deci suprafața rămâne poroasă. Lemnul se simte ca lemnul, iar fibra se vede în relief.',
          '<strong>Ceara tare</strong> e o combinație: uleiul intră în lemn, iar ceara rămâne la suprafață ca o peliculă foarte subțire. Protejează mai bine decât uleiul pur, fără să piardă aspectul natural.',
        ],
      },
      {
        h3: 'Rezistența la pete, în practică',
        body: [
          'Vin roșu vărsat pe o masă lăcuită: se șterge, nu lasă urmă. Pe o masă uleiată: dacă se șterge în câteva minute, nu lasă urmă; dacă stă o oră, lasă o pată care trebuie șlefuită.',
          'Ulei de măsline pe masă uleiată: se absoarbe și se amestecă cu finisajul, deci nu e o problemă. Pe masă lăcuită: rămâne la suprafață și se șterge.',
          'Concluzia practică: pentru o masă de bucătărie cu copii, lacul mat e alegerea rezonabilă. Pentru o masă de sufragerie folosită la ocazii, uleiul dă un aspect superior.',
        ],
      },
      {
        h3: 'Reparabilitatea — argumentul cel mai important',
        body: [
          'O zgârietură pe o suprafață uleiată se repară în cincisprezece minute: șlefuiți ușor zona, ștergeți praful, dați ulei, ștergeți surplusul. Nu se vede că a fost reparată.',
          'O zgârietură adâncă pe o suprafață lăcuită nu se repară local — peticul se vede, pentru că pelicula nouă și cea veche reflectă lumina diferit. Trebuie șlefuită și relăcuită toată suprafața.',
          'De aceea, la piesele care se vor lovi sigur — blaturi de birou, mese de lucru, bănci — uleiul e alegerea pe termen lung, chiar dacă cere întreținere.',
        ],
      },
      {
        h3: 'Întreținerea, an de an',
        body: [
          '<strong>Lac:</strong> ștergeți cu lavetă umedă. Nimic altceva. Durata de viață: 10–20 de ani, apoi refinisare completă.',
          '<strong>Ulei:</strong> reîmprospătare o dată la 1–2 ani, cu o cârpă și cu puțin ulei. Durează o jumătate de oră pentru o masă.',
          '<strong>Ceară tare:</strong> reîmprospătare o dată la 2 ani, la fel de simplu.',
          'În toate cazurile: fără vase fierbinți direct pe blat, fără detergenți agresivi și fără să lăsați apă să stea pe suprafață peste noapte.',
        ],
      },
    ],
    relatedProducts: ['mese-lemn-masiv', 'paturi-lemn-masiv', 'scaune'],
  },
];

export const guideMap = new Map(guides.map((g) => [g.slug, g]));
