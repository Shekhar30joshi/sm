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
  @Input() backgroundColor: string = '';
  @Input() color: string = '';
  @Input() route: string = '';
  @Input() childProfilePic: string = '';
  @Input() profileFlag: boolean = false;
  @Input() role: string = '';
  studentDetails: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.group(changes);
    this.studentDetails = changes?.['headerData']?.currentValue;
    this.route = changes?.['route']?.currentValue;
    this.title = changes?.['title']?.currentValue;
    this.color = changes?.['color']?.currentValue;
    this.childProfilePic = changes?.['childProfilePic']?.currentValue;
    this.profileFlag = changes?.['profileFlag']?.currentValue;
    console.log(this.studentDetails);
  }

  constructor() {}

  ngOnInit(): void {}
}
