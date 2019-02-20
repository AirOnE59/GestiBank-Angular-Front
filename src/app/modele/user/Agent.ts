import {Utilisateur} from './Utilisateur';

export class Agent extends Utilisateur {
  matricule: string;
  debutEmbauche: Date;

  constructor(id: number, identifiant: string, motDePasse: string, email: string,
              nom: string, prenom: string, telephone: string, matricule: string, debutEmbauche: Date) {
    super(id, identifiant, motDePasse, email, nom, prenom, telephone);
    this.matricule = matricule;
    this.debutEmbauche = debutEmbauche;
  }
}
