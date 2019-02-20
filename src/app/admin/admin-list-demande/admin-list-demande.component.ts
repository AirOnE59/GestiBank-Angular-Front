import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin.service";
import {Router} from "@angular/router";
import {Agent} from "../../modele/user/Agent";
import {AdminDemandeCreationCompte} from "../../modele/user/AdminDemandeCreationCompte";
import {AffectationDemandeToAgent} from "../../modele/user/AffectationDemandeToAgent";

@Component({
  selector: 'app-admin-list-demande',
  templateUrl: './admin-list-demande.component.html',
  styleUrls: ['./admin-list-demande.component.css']
})
export class AdminListDemandeComponent implements OnInit {
  private demandes: AdminDemandeCreationCompte[];
  private agents: Agent[];
  private affectation: AffectationDemandeToAgent;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.getAllDemande();
    this.getListAgent();
  }

  getAllDemande() {
    this.adminService.findAllDemandeCreation().subscribe(
      demandes => {
        this.demandes = demandes;
      },
      err => {
        console.log(err);
      }
    );
  }

  getListAgent() {
    this.adminService.findAllAgent().subscribe(
      agents => {
        this.agents = agents;
      },
      err => {
        console.log(err);
      }
    );
  }

  AffecterUneDemandeToAgent() {
    this.adminService.AffectDemandeToAgent(this.affectation.idDemande, this.affectation.idAgent).subscribe(
      affectation => {
        this.affectation = affectation;
      },
      err => {
        console.log(err);
      }
    );
  }


}
