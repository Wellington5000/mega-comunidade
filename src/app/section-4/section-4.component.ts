import { Component } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent
  ],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ right: '300px', position: 'relative' }),
        animate(300, style({ right: '0' })),
      ]),
      transition(':leave', [animate(300, style({ marginLeft: '300px', display: 'none' }))]),
    ]),
  ]
})
export class Section4Component {
  index: number = 0;

  receipts = [
    { index: 0, name: 'comprovante-2' },
    { index: 1, name: 'comprovante-3' },
    { index: 2, name: 'comprovante-4' },
    { index: 3, name: 'comprovante-5' },
    { index: 4, name: 'comprovante-6' },
  ];

  next(): void {
    if(this.index === this.receipts.length - 1) {
      this.index = 0;
    } else {
      this.index += 1;
    }
  }

  previus(): void {
    if(this.index === 0) {
      this.index = this.receipts.length - 1;
    } else {
      this.index -= 1;
    }
  }

  getImage(): string {
    const receipt = this.receipts.find((receipt) => receipt.index === this.index);
    return receipt?.name || '';
  }
}
