import {Pipe, PipeTransform} from '@angular/core';

const SkyconMap = {
  'CLEAR_DAY': '晴天',
  'CLEAR_NIGHT': '晴夜',
  'PARTLY_CLOUDY_DAY': '多云',
  'PARTLY_CLOUDY_NIGHT': '多云',
  'CLOUDY': '阴',
  'RAIN': ' 雨',
  'SNOW': '雪',
  'WIND': '风',
  'HAZE': '雾霾沙尘',
};

@Pipe({
  name: 'translateSkycon',
})
export class TranslateSkyconPipe implements PipeTransform {
  transform(realtime: any, ...args: any[]): any {
    if (realtime.skycon) {
      return SkyconMap[realtime.skycon];
    } else {
      return '';
    }
  }
}
