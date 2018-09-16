export interface Forecast {
  forecast_keypoint: string;
  daily: any;
  hourly: {
    status: string;
    description: string;
    api: any[];
    cloudrate: any[];
    humidity: any[];
    pm25: any[];
    precipitation: any[];
    pres: any[];
    skycon: any[];
    temperature: any[];
    wind: any[];
  };
  minutely: any;

}
