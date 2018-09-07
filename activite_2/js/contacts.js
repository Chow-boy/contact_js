/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

var nom = ['Lévisse', 'Nelsonne'];
var prenom = ['Carole', 'Mélodie'];



console.log('Bienvenue dans le gestionnaire de contacts ! ');
console.log('1 : Liste des contacts ');
console.log('2 : Ajouter un contact ');
console.log('0 : Quitter');

do {
  var choix = prompt('Choissisez une option:');

if (choix == '1') {
  console.log('Voici la liste de tout les contacts !');
  for (var i = 0; i < nom.length; i++) {
      console.log('Nom : ' + nom[i] + ', prénom : ' + prenom[i]);
  }

  console.log('1 : Liste des contacts ');
  console.log('2 : Ajouter un contact ');
  console.log('0 : Quitter');
} else if(choix == '2') {
  var contactNom = prompt('Ecrivez le nom:');
  var contactPrenom = prompt('Ecrivez le prénom:');
  nom.push(contactNom);
  prenom.push(contactPrenom);
  console.log('le nouveau contact à été ajouté !');

}

} while (choix != '0');

console.log('Au revoir !');
