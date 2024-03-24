import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnChanges {
  @Input() footerLink: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.footerLink = changes?.['footerLink']?.currentValue;
  }

  ngOnInit(): void {}
}
