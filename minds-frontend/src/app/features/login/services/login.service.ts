import { HttpBackend, HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { User } from 'src/app/core/models/User';
import { NotificationService } from 'src/app/shared/service/notification';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogger!: boolean
  private router = inject(Router);
  private http = inject(HttpClient)
  private notification = inject(NotificationService);

  showComponents = new EventEmitter<boolean>();

  constructor() {}

  public login(user: User): Observable<User> {
    const url = `${environment.baseUrl}/usuario/`;

    return this.http.post<User>(url, user);
}

  public createUser(user: User): Observable<User>{
    const url = `${environment.baseUrl}/usuario/new`;

    return this.http.post<User>(url, user);
  }

}
