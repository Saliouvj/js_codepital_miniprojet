// IMPORTS
import {Patientes} from "./patientes.js"
import {Doctor,chat} from "./doctor.js"
import {Pharmacie, cimetiere} from "./pharmacie.js"

//  INSTANCES PATIENCES
let patiente1 = new Patientes ("Marcus","Mal indenté", 100, [], "malade", "");
let patiente2 = new Patientes ("Optimus","unsave", 200, [] , "malade", "");
let patiente3 = new Patientes ("Sangoku", "404", 80, [], "malade", "");
let patiente4 = new Patientes ("DarthVother", "asmatique", 110, [], "malade","");
let patiente5 = new Patientes ("Semicolon", "synthaxError", 60, [], "malade","");

// INSTANCE DOCTOR
let doctor = new Doctor ("Docteur Debuggeuse", 0, [chat],[])

// INSTANCE DOCTOR
 export let pharma = new Pharmacie ("PharmaThéo",[], 0)

// GO TO DOCTOR
patiente1.goTo(doctor)
patiente2.goTo(doctor)
patiente3.goTo(doctor)
patiente4.goTo(doctor)
patiente5.goTo(doctor)
console.log(`Il y a ${doctor.lieu.length} patientes qui attendent dans la salle d'attente du docteur`);

//  CABINET DOCTEUR - TRAITEMENT - SORTIR
for (let i = 0; i<doctor.lieu.length; i++){

    doctor.patienTIn(Patientes[i-1])
    doctor.diagnostic(patiente1)
    doctor.patientOut(Patientes[i-1])    
}
// CHAT MIAULER 2S
chat.miauler()
// PATIENTE -> PHARMACIE 1/1
patiente1.goTo(pharma)
patiente2.goTo(pharma)
patiente3.goTo(pharma)
patiente4.goTo(pharma)
patiente5.goTo(pharma)

// TRAITEMENT PHARMACIE / DANS SA POCHE / MOURIR CIMETIÈRE
patiente1.paye("ctrl+maj+f", 60)
patiente2.paye("saveOnFocusChange", 100)
patiente3.paye("CheckLinkRelation", 35)
patiente4.paye("Ventoline", 40)
patiente5.paye("f12+doc", 20)

// GUERISON PRENDRE MEDOC SI Y'A ARGENT
patiente1.takeCare()
patiente2.takeCare()
patiente3.takeCare()
patiente4.takeCare()
patiente5.takeCare()
