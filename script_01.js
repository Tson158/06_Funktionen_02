
/*** Rechner "App" */

// 0. a+b / a-b/ a*b / a/b  // ergebnis c
// 1. Dateneingabe + -überprüfung 
// 2. Auswahl Rechenart : 
// 3. Fkt. Grundrechenarten : 

// 3.1 Modul: Addition a+b | Test

ausgabe(addieren(-2,1));
function addieren(a,b) {
    return a + b;
}

// Modul: Subtraktion a-b | Test

ausgabe(Subtraktion(-2,1));
function Subtraktion(a,b) {
    return a - b;
}

// 4. Ausgabe in Konsole : check!

// Modul: Konsolenausgabe | Test:

// ausgabe("Hallo Penner!")
function ausgabe(outputData) {
    console.log(outputData);
}
