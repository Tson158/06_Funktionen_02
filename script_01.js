
/*** Rechner "App" */

// 0. a+b / a-b/ a*b / a/b  // ergebnis c
// 1. Dateneingabe + -überprüfung 

// Start der Applikation / App
startApp();
function startApp() {
    ausgabe(rechner(getZahl("1"),getZahl("2"),getOp()));
}

// Modul: Zahl eingeben | Test:
//ausgabe(getZahl("1"));
function getZahl(numStr){

    const displayStr = "Bitte Zahl " + numStr + " eingeben:"
    let ziffer = prompt(displayStr);
    let zahl = parseInt(ziffer);

    while (isNaN(zahl) && (ziffer !== null)) {
        ziffer =  prompt(displayStr);
        zahl = parseInt(ziffer); 
    }

    return zahl;
}

 // Modul: Operand eingeben | Test:
// ausgabe(getOp());
function getOp() {

    const displayStr = "Bitte + | - | * | / eingeben."
    let op = prompt(displayStr);

    // wenn op NICHT gültig ist UND user NICHT auf Abbrechen geklickt hat   
    while (!isOpValid(op) && (op !== null)) {
        op = prompt(displayStr);
    }

    return op;
}


// Modul: Operand Prüfen | Test:
function isOpValid(op) {
switch (op) {
    case "+":
    case "-":
    case "*":
    case "/":
        return true;
    default:
        return false
    }

    // return op == "+" || op == "-" || op == "*" || op == "/";
}

/****************************************************************/

// 2. Auswahl Rechenart : 
//  Vereinbarung : "+", "-", "*", "/"
//  ausgabe(rechner(29,204,"+"));
// ausgabe(rechner(26,12,"-"));
// ausgabe(rechner(2,32,"*"));
//  ausgabe(rechner(20,2,"/"));
//  ausgabe(rechner(2,7,"#")); //Fehler
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
    if (typeof outputData == "number") {
        console.log("Das Ergebnis ist: " + outputData);
    } 
    else {
        console.log(outputData); 
    }
}   
