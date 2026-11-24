import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}

    private server:string = 'http://localhost:3000/api';

    //public routes
    readAll(table: string){
      return this.http.get(`${this.server}/${table}`);
    }

    read(table: string, id: number){
      return this.http.get(`${this.server}/${table}/${id}`);
    }

    login(table: string, data: object){
      return this.http.post(`${this.server}/${table}/login`, data);
    }

    register(table: string, data: object){
      return this.http.post(`${this.server}/${table}/register`, data);
    }

    //private routes
    selectAll(){}

    select(){}

    insert(){}

    update(){}

    delete(){}

    deleteAll(){}

}
