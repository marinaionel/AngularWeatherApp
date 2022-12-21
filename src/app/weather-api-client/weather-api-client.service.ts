import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface WeatherResponse {
  location: {
    name: string
    region: string
    country: string
  }
}

@Injectable()
export class WeatherApiClientService {
  currentWeatherPath = `${environment.weatherApiBaseUrl}/current.json`
  forecastWeatherPath = `${environment.weatherApiBaseUrl}/forecast.json`

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getCurrentWeather() {
    let params = new HttpParams({ fromObject: { key: environment.weatherApiKey, q: 'London' } });

    return this.http.get<WeatherResponse>(this.currentWeatherPath, { params }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getForecastWeather() {
    let params = new HttpParams({ fromObject: { key: environment.weatherApiKey, q: 'London' } });

    return this.http.get<WeatherResponse>(this.forecastWeatherPath, { params }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
