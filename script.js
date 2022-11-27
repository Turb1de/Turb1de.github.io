var nomDeLaPersonne,leCode;
function AfficherNomPersonne(flip){
    document.getElementById("h1").innerHTML = nomDeLaPersonne;
}
function ConfirmerCode(){
    leCode = document.getElementById('code').value;
    switch(leCode){
    case "licP5v" : {
        nomDeLaPersonne = "Simon";
    break;}
    case "vms2mW" : {
        nomDeLaPersonne = "Gaba";
    break;}
    case "qzie1T" : {
        nomDeLaPersonne = "Mathis (matoche)";
    break;}
    case "oFFBAf" : {
        nomDeLaPersonne = "Mathis Raymond";
    break;}
    case "22Hdfr" : {
        nomDeLaPersonne = "Jo";
    break;}
    case "xSwuyW" : {
        nomDeLaPersonne = "Bismack";
    break;}
    case "DVXuZc" : {
        nomDeLaPersonne = "Riwsjy";
    break;}
    case "yBLMwD" : {
        nomDeLaPersonne = "Sam (mumu)";
    break;}
    case "mUJVFN" : {
        nomDeLaPersonne = "Charle";
    break;}
    case "IH77Nk" : {
        nomDeLaPersonne = "Nate";
    break;}
    case "bTo8mT" : {
        nomDeLaPersonne = "Fab";
    break;}
    case "d1UBA2" : {
        nomDeLaPersonne = "Jack";
    break;}
    case "8FbXTQ" : {
        nomDeLaPersonne = "Turbide";
    break;}
    case "XoWssU" : {
        nomDeLaPersonne = "Momo";
    break;}
    case "e0MOVd" : {
        nomDeLaPersonne = "John";
    break;}
    case "jqlMNv" : {
        nomDeLaPersonne = "Manu?";
    break;}
    case "l6UkI7" : {
        nomDeLaPersonne = "Dery aka Forty";
    break;}
    default:
        nomDeLaPersonne = "non-valide (erreur dans ton code)";
        break;
}
    AfficherNomPersonne();
}