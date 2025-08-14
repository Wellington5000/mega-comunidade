import { Component } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { Utils } from '../utils/utils';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-section-7',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    HttpClientModule,
  ],
  templateUrl: './section-7.component.html',
  styleUrl: './section-7.component.scss'
})
export class Section7Component {

  constructor(
    private appService: AppService,
  ) { }

  downloadRegulation(): void {
    this.appService.downloadRegulation('LF').subscribe({
      next: (response: Blob) => {
        this.downloadPdf(response, 'Regulamento');
      }
    })
  }

  downloadPdf(file: Blob, fileName: string): void {
    Utils.downloadPdf(file, fileName);
  }
}
