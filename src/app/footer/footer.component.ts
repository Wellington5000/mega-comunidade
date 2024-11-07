import { Component } from '@angular/core';
import { ImageComponent } from "../components/image/image.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
