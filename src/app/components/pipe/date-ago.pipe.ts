import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (!value) return value;

        const now = new Date();
        const date = new Date(value);
        const seconds = Math.floor((+now - +date) / 1000);

        if (seconds < 29) return 'Just now';

        const intervals = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };

        if (seconds > intervals['week']) return

        for (const i in intervals) {
            const counter = Math.floor(seconds / intervals[i]);
            if (counter > 0) {
              if (counter === 1) {
                return `${counter} ${i} ago`; // singular
              } else {
                return `${counter} ${i}s ago`; // plural
              }
            }
          }
      
          return value;
    }
}