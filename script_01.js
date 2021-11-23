
/*** Rechner "App" */

// 0. a+b / a-b/ a*b / a/b  // ergebnis c
// 1. Dateneingabe + -überprüfung 

// 2. Auswahl Rechenart : 

// 3. Fkt. Grundrechenarten : 

// 3.1 Modul: Addition a+b | Test

ausgabe(addieren(7,3));
function addieren(a,b) {
    return a + b;
}

// 3.2 Modul: Subtraktion a-b | Test

ausgabe(Subtraktion(6,7));
function Subtraktion(a,b) {
    return a - b;
}

// 3.3 Modul: Multiplikation a*b | Test

ausgabe(Multiplikation(5,3));
function Multiplikation(a,b) {
    return a * b;
}

// 3.4 Modul: Division a/b | Test

ausgabe(Division(10,0));
function Division(a,b) 
{
    if (b != 0) 
    {
        return a / b;  
    } 
        return("Teilen durch 0 nicht möglich");
    
}


// 4. Ausgabe in Konsole : check!

// Modul: Konsolenausgabe | Test:

// ausgabe("Hallo Penner!")
function ausgabe(outputData) {
    console.log(outputData);
}
