import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin.service";
import {Router} from "@angular/router";
import {Client} from "../../modele/user/Client";

@Component({
  selector: 'app-admin-affectation-client-agent',
  templateUrl: './admin-affectation-client-agent.component.html',
  styleUrls: ['./admin-affectation-client-agent.component.css']
})
export class AdminAffectationClientAgentComponent implements OnInit {
  private affect: Client;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
  }



}
