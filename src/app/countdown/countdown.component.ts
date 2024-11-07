import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit  {
  timeLeft: number = 30 * 60;
  minutes: string = '30';
  seconds: string = '00';
  private intervalId: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateTimeDisplay();
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  updateTimeDisplay(): void {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.minutes = String(minutes).padStart(2, '0');
    this.seconds = String(seconds).padStart(2, '0');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Evita vazamento de memória
  }
}
