import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RespuestaTopHeadlines } from "../interfaces/interfaces";
import { environment } from "../../environments/environment";

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  "X-Api-key": apiKey
});

@Injectable({
  providedIn: "root"
})
export class NoticiasService {
  headlinePage = 0;

  categoriaActual = "";
  categoriaPage = 0;

  constructor(private http: HttpClient) {}

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getTopHeadlines() {
    this.headlinePage++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(
      `/top-headlines?country=us&page=${this.headlinePage}`
    );
    //return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d9753de359f24475aae0dc5405f31d9f`);
  }

  getTopHeadlinesByCategory(categoria: string) {
    if (this.categoriaActual === categoria) {
      this.categoriaPage++;
    } else {
      this.categoriaPage=1;
      this.categoriaActual= categoria;
    }
    return this.ejecutarQuery<RespuestaTopHeadlines>(
      `/top-headlines?country=us&category=${categoria}&page=${this.headlinePage}`
    );
  }
}
