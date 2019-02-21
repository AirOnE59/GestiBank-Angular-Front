import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminAffectationClientAgentComponent} from "./admin-affectation-client-agent/admin-affectation-client-agent.component";
import {AdminListDemandeComponent} from "./admin-list-demande/admin-list-demande.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminAffectationClientAgentComponent, AdminListDemandeComponent, AdminHomeComponent, AdminDetailComponent]
})
export class AdminModule {

}
