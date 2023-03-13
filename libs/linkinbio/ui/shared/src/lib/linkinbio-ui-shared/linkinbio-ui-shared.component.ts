import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rm-linkinbio-ui-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkinbio-ui-shared.component.html',
  styleUrls: ['./linkinbio-ui-shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkinbioUiSharedComponent {}
