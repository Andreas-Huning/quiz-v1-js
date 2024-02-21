let fragenContainer = document.getElementById("fragen-container");
let antwortenContainer = document.getElementById("antworten-container");
let punkteContainer = document.getElementById("punkteergebnis");
let nextButton = document.getElementById("next-button");
let anzahlFragenContainer = document.getElementById("anzahl-Fragen");

let kategorie = 0;
let aktuellerStand = 0;
let punktezahl = 0;
let fragenkatalog;
let katKinder;
let katHauptstadt;
let anzahlFragen = document.getElementById("fragen-auswahl").value;
let zufallsZahl = 0;


katHauptstadt = [
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Deutschland",
    antworten: ["Bonn", "Düsseldorf", "Berlin", "München"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Frankreich",
    antworten: ["Paris", "Marseille", "Lyon", "Toulouse"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Griechenland",
    antworten: ["Athen", "Thessaloniki", "Patras", "Iraklio"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Belgien",
    antworten: ["Brüssel", "Antwerpen", "Gent", "Lüttich"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Dänemark",
    antworten: ["Kopenhagen", "Ribe", "Aarhus", "Christiansfeld"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Italien",
    antworten: ["Mailand", "Neapel", "Rom", "Turin"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt der Niederlande",
    antworten: ["Amsterdam", "Rotterdam", "Maastrich", "Venlo"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Österreich",
    antworten: ["Wien", "Salzburg", "Innsbruck", "Linz"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Polen",
    antworten: ["Krakau", "Bresslau", "Warschau", "Stettin"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Russland",
    antworten: ["Sankt Petersburg", "Moskau", "Nowosibirsk", "Jekaterinburg"],
    richtigeAntwort: 1,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt der Schweiz",
    antworten: ["Basel", "Bern", "Genf", "Montreux"],
    richtigeAntwort: 1,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Schweden",
    antworten: ["Stockholm", "Göteborg", "Visby", "Malmö"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Spanien",
    antworten: ["Barcelona", "Malaga", "Madrid", "Toledo"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Tschechien",
    antworten: ["Prag", "Karlsbad", "Budweis", "Brünn"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt der Türkei",
    antworten: ["Istanbul", "Izmir", "Ankara", "Bursa"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt der Ukraine",
    antworten: ["Donezk", "Dnipro", "Odessa", "Kiew"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt der Slowakei",
    antworten: ["Bratislava", "Košice", "Bardejov", "Nitra"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Bulgarien",
    antworten: ["Burgas", "Radjana Beach", "Welingrad", "Sofia"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Irland",
    antworten: ["Cork", "Dublin", "Galway", "Limeric"],
    richtigeAntwort: 1,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Luxemburg",
    antworten: ["Sanem", "Dudelange", "Echternach", "Luxemburg"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Monaco",
    antworten: [
      "La Rousse",
      "Monaco",
      "Les Moneghetti",
      "Ravin de Sainte-Dévote",
    ],
    richtigeAntwort: 1,
  },

  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Albanien?",
    antworten: ["Vlora", "Kamza", "Tirana", "Fier"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Andorra",
    antworten: ["Canillo", "Andorra la Vella", "Encamp", "Ordino"],
    richtigeAntwort: 1,
  },

  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Bosnien und Herzegowina",
    antworten: ["Una-Sana", "Tuzla", "Posavina", "Sarajevo"],
    richtigeAntwort: 3,
  },

  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Estland",
    antworten: ["Kuressaare", "Haapsalu", "Pärnu", "Tallinn"],
    richtigeAntwort: 3,
  },
  {
    frage: "Wie heißt die Hauptstadt von Finnland",
    antworten: ["Espoo", "Helsinki", "Tampere", "Turku"],
    richtigeAntwort: 1,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Georgien",
    antworten: ["Batumi", "Kutaisi", "Tiflis", "Gori"],
    richtigeAntwort: 2,
  },

  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Island",
    antworten: ["Akureyri", "Hafnarfjörður", "Kópavogur", "Reykjavík"],
    richtigeAntwort: 3,
  },

  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Kosovo",
    antworten: ["Prizren", "Gjilan", "Peja", "Pristina"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Kroation",
    antworten: ["Pula", "Zagrep", "Rijeka", "Opatija"],
    richtigeAntwort: 1,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Lettland",
    antworten: ["Daugavpils", "Liepāja", "Jelgava", "Riga"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Liechtenstein",
    antworten: ["Vaduz", "Balzers", "Triesen", "Triesenberg"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Litauen",
    antworten: ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai"],
    richtigeAntwort: 1,
  },

  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Malta",
    antworten: ["Valetta", "Birkirkara", "Mosta", "Qormi"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Moldawien",
    antworten: ["Tiraspol", "Bălți", "Chișinău", "Bender"],
    richtigeAntwort: 2,
  },

  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Nordmazedonien",
    antworten: ["Bitola", "Tetovo", "Skopje", "Kumanovo"],
    richtigeAntwort: 2,
  },
  {
    frage: "Wie heißt die Hauptstadt von Norwegen",
    antworten: ["Kongsberg", "Bergen", "Drammen", "Oslo"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Portugal",
    antworten: ["Braga", "Porto", "Faro", "Lissabon"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Rumänien",
    antworten: ["Constanța", "Klausenburg", "Hermannstadt", "Bukarest"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von San Marino",
    antworten: ["Domagnano", "Borgo Maggiore", "San Marino", "Serravalle"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Serbien",
    antworten: ["Kragujevac", "Novi Sad", "Belgrad", "Nis"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Slowenien",
    antworten: ["Kranj", "Celje", "Maribor", "Ljubljana"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Ungarn",
    antworten: ["Budpest", "Debrecen", "Szeged", "Miskolc"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt der Vatikanstadt",
    antworten: ["Florenz", "Mailand", "Rom", "Vatikanstadt"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt des Vereinigten Königreichs",
    antworten: ["London", "Manschester", "Edinburgh", "Liverpool"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Weißrussland",
    antworten: ["Brest", "Pinsk", "Babrujsk", "Minsk"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Hauptstadt",
    frage: "Wie heißt die Hauptstadt von Zypern",
    antworten: ["Nikosia", "Paphos", "Larnaka", "Limassol"],
    richtigeAntwort: 0,
  },
];
katKinder = [
  {
    kategorie: "Kinder",
    frage: "Welche Farbe hat eine Zitrone",
    antworten: ["Gelb", "Grün", "Blau", "Rot"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Kinder",
    frage: "Welche Farbe hat eine Banane",
    antworten: ["Gelb", "Grün", "Blau", "Rot"],
    richtigeAntwort: 0,
  },
  {
    kategorie: "Kinder",
    frage: "Wie heißt die Schwester von der Eiskönigin?",
    antworten: ["Anna", "Olaf", "Sven", "Elsa"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Kinder",
    frage: "Wer macht den Honig?",
    antworten: ["Wespe", "Biene", "Bär", "Hummel"],
    richtigeAntwort: 1,
  },
  {
    kategorie: "Kinder",
    frage: "Wer hat eine kranke Oma im Wald?",
    antworten: ["Cinderella", "Schneewitchen", "Rotkäppchen", "Rapunzel"],
    richtigeAntwort: 2,
  },
  {
    kategorie: "Kinder",
    frage: "Wie heißt der beste Freund von Biene Maja?",
    antworten: ["Flip", "Ben", "Walter", "Willi"],
    richtigeAntwort: 3,
  },
  {
    kategorie: "Kinder",
    frage: "Welches Tier hat einen Rüssel?",
    antworten: ["Giraffe", "Elefant", "Nashorn", "Esel"],
    richtigeAntwort: 1,
  },
  {
    kategorie: "Kinder",
    frage: "Wie viele Zwerge hat Schneewittchen?",
    antworten: ["Vier", "Acht", "Sieben", "Sechs"],
    richtigeAntwort: 2,
  },
];

function holSelectWert() {
  kategorie = document.getElementById("kategorie-auswahl").value;
  document.getElementById("welche-kategorie").innerText =
    "Die gewählte Kategorie: " + kategorie;
  setKategorie()

  anzahlFragenContainer.innerText = fragenkatalog.length;
  setAnzahlanFragen();
  
  anzahlFragen = document.getElementById("fragen-auswahl").value; 
  
  zeigFrage();
}
function setKategorie(){
  if(kategorie=="Kinder"){
    fragenkatalog=katKinder
  }
  if (kategorie=="Hauptstadt"){
    fragenkatalog=katHauptstadt
  }
  fragenkatalog=fragenkatalog.sort(()=>0.5-Math.random())
  console.log(fragenkatalog)
}

function setAnzahlanFragen() {

  document.getElementById("option1").value = Math.floor(fragenkatalog.length / 10)+1;
  document.getElementById("option1").innerText =
    document.getElementById("option1").value;

 
  document.getElementById("option2").value = Math.floor(fragenkatalog.length / 5
  );
  document.getElementById("option2").innerText =
    document.getElementById("option2").value;

 
  document.getElementById("option3").value = Math.floor(
    fragenkatalog.length / 2
  );
  document.getElementById("option3").innerText =
    document.getElementById("option3").value;

  
  document.getElementById("option4").value = Math.floor(fragenkatalog.length);
  document.getElementById("option4").innerText =
    document.getElementById("option4").value;
}


function randomWert() {
  zufall = Math.random() * (fragenkatalog.length + 1);
  zufallsZahl = Math.floor(zufall);
}

function zeigFrage() {
  document.getElementById("correct-answer").innerText = "";
  showNextButton();
  console.log(aktuellerStand,anzahlFragen)
  if (aktuellerStand >= anzahlFragen) {
    
    hideQuiz();
    showErgebnis();
    punkteContainer.textContent =
      "Es wurden " +
      punktezahl +
      " von insgesamt " +
      anzahlFragen +
      " Fragen richtig beantworte";
    return;
  }
  let frage = fragenkatalog[aktuellerStand];
  fragenContainer.textContent = frage.frage;
  antwortenContainer.innerHTML = ""; //

  frage.antworten.forEach((antwort, index) => {
    antwortbutton = document.createElement("button");
    antwortbutton.textContent = antwort;
    antwortbutton.onclick = () => pruefeAntwort(index);
    antwortenContainer.appendChild(antwortbutton);
  });
}
function pruefeAntwort(userAntwort) {
  let richtigeAntwort = fragenkatalog[aktuellerStand].richtigeAntwort;
  if (userAntwort == richtigeAntwort) {
    
    punktezahl += 1;
    naechsteFrage();
  } else {
    
    document.getElementById("correct-answer").innerText = 
      "Die richtige Antwort ist : " +
      fragenkatalog[aktuellerStand].antworten[richtigeAntwort];
    hideNextButton();
    setTimeout(naechsteFrage, 1000);
  }
}

function naechsteFrage() {
  aktuellerStand += 1;
  randomWert();
  zeigFrage();
}
function neuesSpiel() {
  aktuellerStand = 0;
  punktezahl = 0;
  showQuiz();
  hideErgebnis();
  holSelectWert();
}
function hideQuiz() {
  block = document.getElementById("quiz-container");
  block.setAttribute("hidden", true);
}
function showQuiz() {
  block = document.getElementById("quiz-container");
  block.removeAttribute("hidden");
}
function hideErgebnis() {
  block = document.getElementById("ergebnis-container");
  block.setAttribute("hidden", true);
}
function showErgebnis() {
  block = document.getElementById("ergebnis-container");
  block.removeAttribute("hidden");
}
function hideNextButton() {
  block = document.getElementById("next-button");
  block.setAttribute("hidden", true);
}
function showNextButton() {
  block = document.getElementById("next-button");
  block.removeAttribute("hidden");
}
neuesSpiel();
