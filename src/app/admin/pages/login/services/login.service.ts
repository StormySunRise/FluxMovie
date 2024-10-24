import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  async getUserAll(apiUrl: string): Promise<any>{
    try {
      const response = await axios.get(`${apiUrl}/api/User/all`);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }
}
