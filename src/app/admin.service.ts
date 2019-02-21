import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AdminListDemandeComponent} from "./admin/admin-list-demande/admin-list-demande.component";
import {Agent} from "./modele/user/Agent";
import {AdminDemandeCreationCompte} from "./modele/user/AdminDemandeCreationCompte";
import {AffectationDemandeToAgent} from "./modele/user/AffectationDemandeToAgent";
import {Client} from "./modele/user/Client";




const httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set ('Access-Control-Allow-Headers', 'x-auth, content-type')
  .set('Cache-Control', 'no-cache');


const  options = {
  headers: httpHeaders
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://172.16.2.64:8080/spring-mvc-restfull-crud-example/';

  constructor(private http: HttpClient) {}

  findAllDemandeCreation(): Observable<any> {
    return this.http.get<AdminDemandeCreationCompte[]>(this.apiUrl + 'admin/liste-demande-creation-compte')
      .pipe(catchError(err => throwError('ERREUR SELECT DEMANDE' + err)));
  }

  findAllAgent(): Observable<any> {
    return this.http.get<Agent[]>(this.apiUrl + 'agents')
      .pipe(catchError(err => throwError('ERREUR SELECT AGENTS' + err)));
  }

  findAgentByMatricule(matricule: string): Observable<any> {
    return this.http.get<Agent>(this.apiUrl + '/admin/rechercher-agent-par-matricule/' + matricule)
      .pipe(catchError(err => throwError('ERREUR GET BY MATRICULE' + err)));
  }

  AffectDemandeToAgent(idDemande: string, idAgent: number): Observable<any> {
    return this.http.get<AffectationDemandeToAgent>(this.apiUrl + 'admin/affectation-demande-creation-compte/' + idDemande + '/' + idAgent)
      .pipe(catchError(err => throwError('ERREUR AFFECT DEMANDE TO AGENT' + err)));
  }

  saveAgent(agent: Agent): Observable<any> {
    return this.http.post<Agent>(this.apiUrl + 'admin/creer-agent', agent)
      .pipe(catchError(err => throwError('ERREUR CREATE AGENT' + err)));
  }

  updateAgent(agent: Agent): Observable<any> {
    return this.http.put<Agent>(this.apiUrl + 'admin/agent/' + agent.id, agent)
      .pipe(catchError(err => throwError('ERREUR UPDATE AGENT' + err)));
  }

  deleteAgentById(id: number): Observable<any> {
    return this.http.delete<Agent>(this.apiUrl + 'admin/agent/' + id)
      .pipe(catchError(err => throwError('ERREUR DELETE AGENT' + err)));
  }

}
