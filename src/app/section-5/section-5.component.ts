import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";

@Component({
  selector: 'app-section-5',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.scss'
})
export class Section5Component {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;
  private scrollPosition = 0;
  private cardWidth = 742;

  scrollLeft(): void {
    this.scrollPosition = Math.max(this.scrollPosition - this.cardWidth, 0);
    this.updateScroll();
  }

  scrollRight(): void {
    const maxScroll = this.carousel.nativeElement.scrollWidth - this.carousel.nativeElement.clientWidth;
    this.scrollPosition = Math.min(this.scrollPosition + this.cardWidth, maxScroll);
    this.updateScroll();
  }

  updateScroll(): void {
    this.carousel.nativeElement.style.transform = `translateX(-${this.scrollPosition}px)`;
  }
}
