import { Component } from '@angular/core';
import { CurrentWeatherResponse, ForecastWeatherResponse, WeatherApiClientService } from './weather-api-client.service';

@Component({
    templateUrl: './weather-api-client.component.html',
    providers: [WeatherApiClientService],
    styles: ['.error { color: #b30000; }']
})
export class WeatherComponent {
    error: any;
    currentWeatherData: CurrentWeatherResponse | undefined;
    forecastWeatherData: ForecastWeatherResponse | undefined;

    constructor(private weatherService: WeatherApiClientService) { }

    clear() {
        this.forecastWeatherData = undefined;
        this.currentWeatherData = undefined;
        this.error = undefined;
    }

    showCurrentWeather() {
        this.weatherService.getCurrentWeather()
            .subscribe({
                next: (data: CurrentWeatherResponse) => this.currentWeatherData = { ...data },
                error: error => this.error = error,
            });
    }

    showForecastWeather() {
        this.weatherService.getForecastWeather()
            .subscribe({
                next: (data: ForecastWeatherResponse) => this.forecastWeatherData = { ...data },
                error: error => this.error = error,
            });
    }

}