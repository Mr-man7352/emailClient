import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredetials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.baseUrl}/auth/username`,
      {
        username: username,
      }
    );
  }

  signUp(credentials: SignupCredetials) {
    return this.http.post<SignupResponse>(
      `${this.baseUrl}auth/signup`,
      credentials
    );
  }
}
