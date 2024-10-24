import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class UserService {



  // registerUser(
  //   apiUrl: string,
  //   username: string,
  //   email: string,
  //   password: string
  // ): Observable<any> {
  //   let params = {
  //     username,
  //     email,
  //     password
  //   }
  //   // return this._httpClient.post<any>(
  //   //   `${apiUrl}/api/User/`,params
  //   // )
  // }

  async registerUser(apiUrl: string, username: string, email: string, password: string , firstLogin:boolean): Promise<any> {
    let params = {
      username,
      email,
      password,
      firstLogin
    };
    try {
      const response = await axios.post(`${apiUrl}/api/User/register`, params);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  async getUser(apiUrl: string): Promise<any>{
    try {
      const response = await axios.get(`${apiUrl}/api/User/all`);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }
}
