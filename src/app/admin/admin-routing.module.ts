import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdminListDemandeComponent} from "./admin-list-demande/admin-list-demande.component";
import {AdminAffectationClientAgentComponent} from "./admin-affectation-client-agent/admin-affectation-client-agent.component";
import {AdminDetailComponent} from "./admin-detail/admin-detail.component";


const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/list-demande-creation-compte', component: AdminListDemandeComponent},
  {path: 'admin/affectation-demande-creation-compte/:idDemande/:idAgent', component: AdminAffectationClientAgentComponent},
  {path: 'admin/details-agent', component: AdminDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
