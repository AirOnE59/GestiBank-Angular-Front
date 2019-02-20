import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AdminListDemandeComponent} from "./admin/admin-list-demande/admin-list-demande.component";
import {Agent} from "./modele/user/Agent";
import {AdminDemandeCreationCompte} from "./modele/user/AdminDemandeCreationCompte";
import {AffectationDemandeToAgent} from "./modele/user/AffectationDemandeToAgent";




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

  findAgentNom(nom: string): Observable<any> {
    return this.http.get<Agent>(this.apiUrl + '/admin/rechercher-agent-par-nom/' + nom)
      .pipe(catchError(err => throwError('ERREUR GET BY NAME' + err)));
  }

  AffectDemandeToAgent(idDemande: string, idAgent: number): Observable<any> {
    return this.http.get<AffectationDemandeToAgent>(this.apiUrl + 'admin/affectation-demande-creation-compte/' + idDemande + '/' + idAgent)
      .pipe(catchError(err => throwError('ERREUR AFFECT DEMANDE TO AGENT' + err)));
  }

}
