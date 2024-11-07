import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  countdownTime = 15 * 60; // 15 minutos em segundos
  minutes: string = '15';
  hours: number = 0;
  seconds: string = '00';
  isBrowser = signal(false);

  constructor(
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    if(this.isBrowser()) {
      this.startCountdown();
    }
  }

  startCountdown(): void {
    setTimeout(() => {
      if (this.countdownTime > 0) {
        this.countdownTime--;
        this.updateTimeDisplay();
        this.startCountdown();
      } else {
        console.log('Countdown finalizado');
      }
    }, 1000);
  }

  updateTimeDisplay(): void {
    const mins = Math.floor(this.countdownTime / 60);
    const secs = this.countdownTime % 60;

    this.minutes = mins.toString().padStart(2, '0');
    this.seconds = secs.toString().padStart(2, '0');
  }
}
