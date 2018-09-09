import {Injectable} from '@angular/core';
import {ApiService} from './api.service'
import {Geolocation, Geoposition} from '@ionic-native/geolocation'

@Injectable()
export class WeatherService {
  position: Geoposition = null;

  constructor(
    private apiSvc: ApiService,
    private geolocation: Geolocation,
  ) {}

  async getPosition() {
    this.position = await this.geolocation.getCurrentPosition();
    return this.position;
  }

  get lngLat() {
    return {
      lng: this.position.coords.longitude,
      lat: this.position.coords.latitude
    };
  }

  async getRealtime() {
    return this.apiSvc.get('/realtime', {
      ...this.lngLat
    });
  }

  async getForecast() {
    return this.apiSvc.get('/forecast', {
      ...this.lngLat
    });
  }

}
