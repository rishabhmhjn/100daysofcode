import { Component } from '@angular/core';
import { LinkinbioUiSharedComponent } from '@rishabhmhjn/linkinbio/ui/shared';

@Component({
  standalone: true,
  imports: [LinkinbioUiSharedComponent],
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linkinbio';
}
