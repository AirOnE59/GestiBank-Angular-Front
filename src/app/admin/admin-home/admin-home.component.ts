import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin.service";
import {Router} from "@angular/router";
import {Agent} from "../../modele/user/Agent";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  private agents: Agent[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

}
