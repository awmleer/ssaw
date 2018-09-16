import {Injectable} from '@angular/core';
import {ApiService} from './api.service'
import {Geolocation, Geoposition} from '@ionic-native/geolocation'
import {Realtime} from '../classes/realtime'
import {Forecast} from '../classes/forecast'

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

  async getRealtime(): Promise<Realtime> {
    const data = await this.apiSvc.get('/realtime', {
      ...this.lngLat
    });
    if (data.status !== 'ok' || data.result.status !== 'ok') {
      throw new Error('出错了');
    }
    return data.result;
  }

  async getForecast(): Promise<Forecast> {
    const data = await this.apiSvc.get('/forecast', {
      ...this.lngLat
    });
    if (data.status !== 'ok') {
      throw new Error('出错了');
    }
    return data.result;
  }

}
