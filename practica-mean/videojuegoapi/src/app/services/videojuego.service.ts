import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  url = 'http://localhost:4000/api/videojuegos/';

  constructor(private http: HttpClient) { }

  getVideojuegos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarVideojuego(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarVideojuego(videojuego: Videojuego): Observable<any> {
    return this.http.post(this.url, videojuego);
  }

  obtenerVideojuego(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarVideojuego(id: string, videojuego: Videojuego): Observable<any> {
    return this.http.put(this.url + id, videojuego);
  }
}
