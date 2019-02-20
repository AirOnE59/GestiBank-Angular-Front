import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminAffectationClientAgentComponent} from "./admin-affectation-client-agent/admin-affectation-client-agent.component";
import {AdminListDemandeComponent} from "./admin-list-demande/admin-list-demande.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminAffectationClientAgentComponent, AdminListDemandeComponent, AdminHomeComponent]
})
export class AdminModule {

}
