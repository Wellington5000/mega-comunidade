import { Component } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss'
})
export class Section1Component {

}
