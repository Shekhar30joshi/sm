import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() headerData: any;
  @Input() title: any;

  studentDetails: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.group(changes);
    this.studentDetails = changes?.['headerData']?.currentValue;
    this.title = changes?.['title']?.currentValue;
    console.log(this.studentDetails);
  }

  constructor() {}

  ngOnInit(): void {}
}
