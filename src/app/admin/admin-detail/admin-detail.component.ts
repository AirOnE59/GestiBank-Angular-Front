import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin.service";
import {Agent} from "../../modele/user/Agent";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css'],
  providers: [AdminService]
})
export class AdminDetailComponent implements OnInit {
  id: number;
  matricule: string;
  agent: Agent;
  agentForm: FormGroup;
  sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => { this.id = params.id; });

    this.agentForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
        motDePasse: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required),
        prenom: new FormControl('', Validators.required),
        telephone: new FormControl(),
        dateEmbauche: new FormControl()
      }
    );
    if (this.matricule) {
      this.adminService.findAgentByMatricule(this.matricule).subscribe(
        agent => {
          this.id = agent.id;
          this.agentForm.patchValue({
            email: agent.email,
            motDePasse: agent.motDePasse,
            nom: agent.nom,
            prenom: agent.prenom,
            telephone: agent.telephone,
            debutEmbauche: agent.debutEmbauche
          });
        }, error1 => {
          console.log(error1);
        }
      );
    }


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  creeAgent() {
    console.log('>>>>>>>>> submit clicked');
    if (this.agentForm.valid) {

      if (this.id) {
        console.log('>>>>>>>>> UPDATE AGENT');
        const agent: Agent = new Agent(this.id,
          this.agentForm.controls.email.value,
          this.agentForm.controls.motDePasse.value,
          this.agentForm.controls.nom.value,
          this.agentForm.controls.prenom.value,
          this.agentForm.controls.telephone.value,
          this.agentForm.controls.matricule.value,
          this.agentForm.controls.debutEmbauche.value);
        this.adminService.updateAgent(agent).subscribe(
          res => {
            this.agentForm.reset();
            this.router.navigate(['/admin']);
          }
        );
      } else {
        console.log('>>>>>>>>> ADD AGENT');
        const agent: Agent = new Agent(null,
          this.agentForm.controls.email.value,
          this.agentForm.controls.motDePasse.value,
          this.agentForm.controls.nom.value,
          this.agentForm.controls.prenom.value,
          this.agentForm.controls.telephone.value,
          this.agentForm.controls.matricule.value,
          this.agentForm.controls.debutEmbauche.value);
        this.adminService.saveAgent(agent).subscribe(
          res => {
            this.agentForm.reset();
            this.router.navigate(['/admin']);
          }
        );
      }
    }
  }

}
