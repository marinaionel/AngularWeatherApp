import { Component } from '@angular/core';
import { WeatherApiClientService, WeatherResponse } from './weather-api-client.service';

@Component({
    selector: 'app-config',
    templateUrl: './weather-api-client.component.html',
    providers: [WeatherApiClientService],
    styles: ['.error { color: #b30000; }']
})
export class WeatherComponent {
    error: any;
    currentWeatherData: WeatherResponse | undefined;
    forecastWeatherData: WeatherResponse | undefined;

    constructor(private weatherService: WeatherApiClientService) { }

    clear() {
        this.forecastWeatherData = undefined;
        this.currentWeatherData = undefined;
        this.error = undefined;
    }

    showCurrentWeather() {
        this.weatherService.getCurrentWeather()
            .subscribe({
                next: (data: WeatherResponse) => this.currentWeatherData = { ...data },
                error: error => this.error = error,
            });
    }

    showForecastWeather() {
        this.weatherService.getForecastWeather()
            .subscribe({
                next: (data: WeatherResponse) => this.currentWeatherData = { ...data },
                error: error => this.error = error,
            });
    }

}