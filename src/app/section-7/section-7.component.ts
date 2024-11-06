import { Component } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-7',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent
  ],
  templateUrl: './section-7.component.html',
  styleUrl: './section-7.component.scss'
})
export class Section7Component {

}
