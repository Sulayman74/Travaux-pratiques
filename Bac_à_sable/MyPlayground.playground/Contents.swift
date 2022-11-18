import Cocoa
import Foundation
// solde de mon compte au début du mois
var monSolde = 0;

var depensesSemaine1 = 50 + 30 + 20;

let salaireMensuel = 1500;

var depensesSemaine2 = 50 + 30 + 20 + 150;

var greeting = "salut toi l'ami";



var IsFull = true;

monSolde = salaireMensuel - depensesSemaine1 - depensesSemaine2;

// calcul IMC

var poidsKG : Double = 65

var tailleCm = 1.68

var imc = poidsKG / ( tailleCm * tailleCm )
//print(imc)

var enfants : [String];
enfants = ["Alae","Salman","Oumeyah","Oubey"];


//for enfant in enfants {
//    print(enfant);
//};

var identite = ["Nom": "Keohavong", "Prénom":"Sirikone", "Age" : "35", "Pays": "France"];
//print("Dictionnaire initial : \(identite)");

//identite["Ville"] = "Bonneville";
//print(identite);
//identite["Prénom"]="Sulayman";
//print(identite);

//for (cle,element) in identite {
//    print(cle + " -> \(element)")
//}

//func tableDe5() {
//    let multiplicateur = 5;
//    for multipliant in 1...10 {
//        print("\(multiplicateur) * \(multipliant) est égale à \(multiplicateur * multipliant)" );
//    }
//};
//
//tableDe5()

//func table(multiplicateur : Int) {
//    for multipliant in 1...10 {
//        print("\(multiplicateur) * \(multipliant) est égale à \(multiplicateur * multipliant)")
//    }
//}
//
//table(multiplicateur: 3);
//table(multiplicateur: 7);

//func multiplier(multiplicateur : Int, multipliant : Int) {
//        print("\(multiplicateur) * \(multipliant) est égale à \(multiplicateur * multipliant)")
//
//};
//multiplier(multiplicateur: 9, multipliant: 6);

func multiplier(_ multiplicateur : Int, par multipliant : Int) -> Int {
     let resultat = multiplicateur * multipliant;
    return resultat
    
}

let resultat = multiplier(5, par: 76);
print(resultat);




