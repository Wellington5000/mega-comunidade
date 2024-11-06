import { Component } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss'
})  
export class Section4Component {
  index: number = 0;

  receipts = [
    { index: 0, name: 'comprovante' },
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
