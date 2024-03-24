import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { AttendanceComponent } from './attendance/attendance.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnChanges {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CommonService
  ) {}

  title = 'Child';
  backRoute: string = '/child-details';
  backgroundColor = 'white';
  color = 'white';
  child: any;
  childProfilePic: string = '';
  profileFlag: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    let child = JSON.parse(sessionStorage.getItem('child')!);
    this.child = child;
    this.title = child.firstName;
    this.childProfilePic = child?.profilePic;
  }

  headerData = [
    {
      id: 1,
      name: 'Divya Jaini',
      class: '9th-A',
      rollNo: 10,
      imgUrl:
        'data:image/jpeg;base64,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',
    },
  ];

  modules = [
    {
      name: 'Attendance',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
    {
      name: 'Subject',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
    {
      name: 'Notice Board',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
    {
      name: 'Parent Profile',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
    {
      name: 'Holidays',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
    {
      name: 'Settings',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
    {
      name: 'Exams',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
    {
      name: 'Result',
      image:
        '../../assets/images/back-school-concept-books-colored-pencils-clock.jpg',
    },
  ];

  openDialog(child: any) {
    switch (child?.name) {
      case 'Attendance':
        this.router.navigate(['/attendance'], {
          queryParams: { childDetails: child?.name },
        });
        break;

      case 'Subject':
        this.router.navigate(['/subject'], {
          queryParams: { name: child?.name },
        });
        break;
      // default:
      // case '':
      //   // insert your code here
      //   break;
    }
  }
}
