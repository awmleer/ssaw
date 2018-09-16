export interface Realtime {
  status: string;
  o3: number;
  co: number;
  temperature: number;
  pm10: number;
  skycon: string;
  cloudrate: number;
  aqi: number;
  comfort: {
    index: number;
    desc: string;
  };
  no2: number;
  visibility: number;
  humidity: number;
  pres: number;
  ultraviolet: {
    index: number;
    desc: string;
  };
  pm25: number;
  so2: number;
  precipitation: {
    nearest?: {
      status: string;
      distance: number;
      intensity: number;
    };
    local: {
      status: string;
      intensity: number;
      datasource: string;
    };
  }
}
