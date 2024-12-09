import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  targetDate = new Date('2024-12-28T23:59:59');
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  isBrowser = signal(false);

  constructor(
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.startCountdown();
    }
  }

  startCountdown(): void {
    setInterval(() => {
      this.updateTimeDisplay();
    }, 1000);
  }

  updateTimeDisplay(): void {
    const now = new Date();
    const timeDifference = this.targetDate.getTime() - now.getTime();

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.days = days.toString().padStart(2, '0');
      this.hours = hours.toString().padStart(2, '0');
      this.minutes = minutes.toString().padStart(2, '0');
      this.seconds = seconds.toString().padStart(2, '0');
    } else {
      this.days = this.hours = this.minutes = this.seconds = '00';
      console.log('Countdown finalizado');
    }
  }
}
