
/*** Rechner "App" */

// 0. a+b / a-b/ a*b / a/b  // ergebnis c
// 1. Dateneingabe + -überprüfung 

// Start der 
startApp();
function startApp() {
    ausgabe(rechner(zahl1,zahl2,getOp()));
}

function getOp() {

    let op = prompt("Bitte gib + , - , * oder / ein")
    if (isOpValid()) {
        return op;
    } else {
        return "nx gut"
    }
    return op;
}

function isOpValid(op) {
    return true;
}




// function zahl1() {

//     let zahl1 = prompt("Bitte gib deine 1. Zahl ein")
//     return zahl1;
// }

// function zahl2() {

//     let zahl2 = prompt("Bitte gib deine 2. Zahl ein")
//     return zahl2;
// }
/****************************************************************/

// 2. Auswahl Rechenart : 
//  Vereinbarung : "+", "-", "*", "/"
// ausgabe(rechner(29,204,"+"));
// ausgabe(rechner(26,12,"-"));
// ausgabe(rechner(2,32,"*"));
// ausgabe(rechner(20,2,"/"));
// ausgabe(rechner(2,7,"#")); //Fehler
// ausgabe(rechner(2,0,"/")); //Fehler
function rechner(a,b,op) {
    switch (op) {
        case "+": // Addition
            return addieren(a,b);
        
         case "-": // Subtraktion
            return Subtraktion(a,b);
            
         case "*": // Multiplikation
            return Multiplikation(a,b);
            
         case "/": // Division
            return Division(a,b);

        default: // wenn was nicht stimmt (falches zeichen oder buchstaben)
            return "Fehler sitzt vorm Monitor! - Versuchs nochmal mit korrektem Zeichen"
    }
}

/************************************************************/

// 3. Fkt. Grundrechenarten : 

// 3.1 Modul: Addition a+b | Test
// ausgabe(addieren(7,3))
function addieren(a,b) {
    return a + b;
}

// 3.2 Modul: Subtraktion a-b | Test

// ausgabe(Subtraktion(6,7));
function Subtraktion(a,b) {
    return a - b;
}

// 3.3 Modul: Multiplikation a*b | Test

// ausgabe(Multiplikation(5,3));
function Multiplikation(a,b) {
    return a * b;
}

// 3.4 Modul: Division a/b | Test

// ausgabe(Division(10,0));
function Division(a,b) 
{
    if (b != 0) 
    {
        return a / b;  
    } 
        return("Teilen durch 0 nicht möglich");
    
}

/****************************************************************/
// 4. Ausgabe in Konsole : check!

// Modul: Konsolenausgabe | Test:

// ausgabe("hallo penner");
// ausgabe(20)
function ausgabe(outputData) 
{
    if (typeof outputData == "number") 
    {
        console.log("Das Ergebnis ist: " + outputData);
    } 
    else 
    {
        console.log(outputData); 
    }
}   
