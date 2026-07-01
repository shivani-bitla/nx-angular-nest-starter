import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, CreateUserDto } from "shared";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly http = inject(HttpClient);

  private readonly url = `${environment.apiUrl}/api/users`;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  createUser(dto: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.url, dto);
  }

  deleteUser(id: string): Observable<User[]> {
    return this.http.delete<User[]>(`${this.url}/${id}`);
  }

}