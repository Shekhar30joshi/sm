import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AttendanceComponent implements OnInit {
  dateArr: any = [];
  picker: any;
  title = 'Attendance';
  backRoute: string = '/child';
  constructor(
    private service: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    console.log(event);
    this.router.navigate(['/child']);
  }
  //open calender
  open(picker: any) {
    // this.dialogRef.close();
    // this.appendHeader();
    this.appendFooter();
    this.picker = picker;
  }

  onClose() {
    this.router.navigate(['/child']);

    //your condition logic
  }
  @ViewChild('datepickerFooter', { static: false })
  datepickerFooter!: ElementRef;
  @ViewChild('datepickerHeader', { static: false })
  datepickerHeader!: ElementRef;

  private appendFooter() {
    const matCalendar = document.getElementsByClassName(
      'mat-datepicker-content'
    )[0] as HTMLElement;
    matCalendar?.appendChild(this.datepickerFooter?.nativeElement);
  }

  private appendHeader() {
    const matCalendar = document.getElementsByClassName(
      'mat-datepicker-content'
    )[0] as HTMLElement;
    matCalendar?.appendChild(this.datepickerHeader?.nativeElement);
  }

  //get attendance
  getAttendance(id: any) {
    let obj = { id: id };
    this.service.getAttendanceData(obj).subscribe((res: any) => {
      console.log(res);
      this.dateArr = res?.data?.data;
      this.dateArr?.forEach((element: any) => {
        return (element.attendance_date = element?.attendance_date.substring(
          0,
          10
        ));
      });
      this.picker.open();

      console.log(this.dateArr);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      this.title = res.childDetails;
    });
    let child = JSON.parse(sessionStorage.getItem('child')!);
    this.getAttendance(child?.id);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    let index: any = this.dateArr?.findIndex(
      (x: any) =>
        new Date(x?.attendance_date).toLocaleDateString() ===
        cellDate.toLocaleDateString()
    );
    // if (index > -1) {
    if (this.dateArr[index]?.attendance == 0) {
      return 'date-red';
    } else if (this.dateArr[index]?.attendance == 1) {
      return 'date-green';
    }
    // }

    return '';
  };
}
