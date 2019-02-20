export class AdminDemandeCreationCompte {

  id: number;
  numero: string;
  nom: string;
  prenom: string;

  constructor(id: number, numero: string, nom: string, prenom: string) {
    this.id = id;
    this.nom = nom;
    this.numero = numero;
    this.prenom = prenom;
  }
}
