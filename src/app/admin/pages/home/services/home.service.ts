import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  async getGeneros(apiUrl: string): Promise<any>{
    try {
      const response = await axios.get(`${apiUrl}/api/Generos/all`);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }
  async sugerencias(apiUrl: string, userId: number, genPreferidos: any[]): Promise<any> {
    let params = {
      userId,
      genPreferidos
    };
    try {
      const response = await axios.post(`${apiUrl}/api/Sugerencias`, params);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  async getSugerencias(apiUrl: string, userId: number): Promise<any>{
    try {
      const response = await axios.get(`${apiUrl}/api/Sugerencias/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  async getMoviesAll(apiUrl: string): Promise<any>{
    try {
      const response = await axios.get(`${apiUrl}/api/Movies/all`);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }
  async getMoviesByGenreId(apiUrl: string, genreId: number): Promise<any>{
    try {
      const response = await axios.get(`${apiUrl}/api/Movies/${genreId}`);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }
}
