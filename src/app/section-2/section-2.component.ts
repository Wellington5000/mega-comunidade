import { Component } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [
    ImageComponent
  ],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss'
})
export class Section2Component {

}
