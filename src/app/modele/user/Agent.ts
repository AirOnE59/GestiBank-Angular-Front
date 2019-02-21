import {Utilisateur} from './Utilisateur';

export class Agent extends Utilisateur {
  debutEmbauche: Date;
  matricule: string;

  constructor(id: number, motDePasse: string, email: string,
              nom: string, prenom: string, telephone: string, debutEmbauche: Date, matricule: string) {
    super(id, motDePasse, email, nom, prenom, telephone);
    this.debutEmbauche = debutEmbauche;
    this.matricule = matricule;
  }
}
