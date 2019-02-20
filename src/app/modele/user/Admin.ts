import {Utilisateur} from './Utilisateur';

export class Admin extends Utilisateur {

  constructor(id: number, identifiant: string, motDePasse: string, email: string,
              nom: string, prenom: string, telephone: string) {
    super(id, identifiant, motDePasse, email, nom, prenom, telephone);
  }
}
