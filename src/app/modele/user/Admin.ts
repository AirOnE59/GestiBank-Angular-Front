import {Utilisateur} from './Utilisateur';

export class Admin extends Utilisateur {

  constructor(id: number, motDePasse: string, email: string,
              nom: string, prenom: string, telephone: string) {
    super(id, motDePasse, email, nom, prenom, telephone);
  }
}
