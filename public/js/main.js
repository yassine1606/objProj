/*
# Bienvenu à Codepital:
>Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor 
les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter
leur remède puis le prendrons et seront guérri.

## Description des Maladess
>les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à
un endroit, prendre un médicamment et payer. Au début, les Maladess sont dans un salle d'attente. 

|nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
|---|---|---|---|---|---|---|---|---|
|Marcus|mal indenté|100|vide|malade
|Optimus|unsave|200|vide|malade
|Sangoku|404|80|vide|malade
|DarthVader|azmatique|110|vide|malade
|Semicolon|syntaxError|60|vide|malade

## Description du doctor
>Le doctor lui reçoit les Maladess dans son cabinet. Tout d'abord il les diagnostiques
puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque 
fois sortir le Malades de son cabinet avant de prendre le suivant.


Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. 
Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les Maladess son dans un état de traitement avant de sortir du cabinet.

|nom|argent|cabinet|diagnostique|MaladesIn|MaladesOut
|---|---|---|---|---|---|
|Debugger|0|[chat]

### Grille des diagnostiques
|maladie|traitement|
|---|---|
|mal indenté|`ctrl+maj+f`|
|unsave|`saveOnFocusChange`|
|404|`CheckLinkRelation`|
|azmatique|`Ventoline`|
|syntaxError|`f12+doc`|

## La pharmacie
>Les Maladess iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. 
Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra 
alors les pousser dans un cimetière.

### Tarif des traitements
|Traitement|prix|
|---|---|
|`ctrl+maj+f`|60€
|`saveOnFocusChange`|100€
|`CheckLinkRelation`|35€
|`Ventoline`|40€
|`f12+doc`|20€

*/

class Malades {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
    }
    goTo(Malades,lieux){
        Malades.push(lieux);
    }
    payer(prix,receveur){
        this.argent -= prix;
        receveur += prix;
    }
}








let Marcus = new Malades('mal indenté', 100, 'vide', 'malade');
let Optimus = new Malades('unsave', 200, 'vide', 'malade')
let Sangoku = new Malades('404', 80, 'vide', 'malade')
let DarthVader = new Malades('azmatique', 110, 'vide', 'malade')
let Semicolon = new Malades('syntaxError', 60, 'vide', 'malade')

let doctor = {
    nom: '',
    argent: 0,
    cabinet: [],


    diagnostique(Malades) {
        switch (Malades.etatDeSante) {
            case "Mal indenté":
                console.log(Malades.maladie);
                if (Malades.argent>=50) {
                    Malades.poche.push('ctrl+maj+f');
                    Malades.payer(50, this.argent);
                    this.MaladesOut(Malades);
                }
                else{
                    console.log("Vous n'avez pas assez d'argent.");
                    this.MaladesOut(Malades);
                }
                break;
            case "Unsave":
                console.log(Malades.maladie);
                if (Malades.argent>=50) {
                    Malades.poche.push('SaveOnFocus');
                    Malades.payer(50, this.argent);
                    this.MaladesOut(Malades);
                }
                else{
                    console.log("Vous n'avez pas assez d'argent.");
                    this.MaladesOut(Malades);
                }
                break;
            case "404":
                console.log(Malades.maladie);
                if (Malades.argent>=50) {
                    Malades.poche.push('CheckLinkRelation');
                    Malades.payer(50, this.argent);
                    this.MaladesOut(Malades);
                }
                else{
                    console.log("Vous n'avez pas assez d'argent.");
                    this.MaladesOut(Malades);
                }
                break;
            case "Azmatique":
                console.log(Malades.maladie);
                if (Malades.argent>=50) {
                    Malades.poche.push('ventoline');
                    Malades.payer(50, this.argent);
                    this.MaladesOut(Malades);
                }
                else{
                    console.log("Vous n'avez pas assez d'argent.");
                    this.MaladesOut(Malades);
                }
                break;
            case "syntaxError":
                console.log(Malades.maladie);
                if (Malades.argent>=50) {
                    Malades.poche.push('f12+doc');
                    Malades.payer(50, this.argent);
                    this.MaladesOut(Malades);
                }
                else{
                    console.log("Vous n'avez pas assez d'argent.");
                    this.MaladesOut(Malades);
                }
                break;

            default:
                console.log('Vous êtes en bonne santé');
                this.MaladesOut(Malades);
                break;
        }
    },
    MaladesIn(Malades) {
        this.cabinet.push(Malades)
    },
    MaladesOut() {
        this.cabinet.pop(Malades)
    }
}
let pharmacie = {
    caisse: [],
    pharmaDire(Malades){
        if (Malades.argent>=Traitement.prix) {
            Malades.poche.push(Traitement.traitement)
        }
        else{
        }
    }
}
let cimetière = [];
let salleAttente = [];



class Traitement {
    constructor(traitement, prix) {
        this.traitement = traitement;
        this.prix = prix;
    }
}
let ctrlMajF = new Traitement('ctrlMaj+F', 60)
let saveOnFocusChange = new Traitement('saveOnFocusChange', 100)
let CheckLinkRelation = new Traitement('CheckLinkRelation', 35)
let Ventoline = new Traitement('Ventoline', 40)
let f12doc = new Traitement('f12+Doc', 20)
