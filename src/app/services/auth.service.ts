import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

    private tokenName = 'TM2026';

    private isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
    isloggedIn$ = this.isLoggedIn.asObservable();

    hasToken(): boolean {
       const session = sessionStorage.getItem(this.tokenName);

       if(session) return true;
       const local = localStorage.getItem(this.tokenName);

       if(local){
            sessionStorage.setItem(this.tokenName, local);
            return true;
       }
       return false;
    }

    login(token: string){
        sessionStorage.setItem(this.tokenName, token);
        localStorage.removeItem(this.tokenName);
        this.isLoggedIn.next(true);
    }

    logout(){
        sessionStorage.removeItem(this.tokenName);
        this.isLoggedIn.next(false);
    }

    storeUser(token: string){
        localStorage.setItem(this.tokenName, token);
    }

    loggedUser(){
    const token = sessionStorage.getItem(this.tokenName) || localStorage.getItem(this.tokenName);
     if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decodedData = atob(base64);
      const jsonPayload = new TextDecoder('utf-8').decode(
      new Uint8Array(decodedData.split('').map(char => char.charCodeAt(0)))
      );
 
      return JSON.parse(jsonPayload);
    }
    return null;
  }
}
