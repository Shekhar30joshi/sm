import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-myclass',
  templateUrl: './myclass.component.html',
  styleUrls: ['./myclass.component.scss'],
})
export class MyclassComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private service: CommonService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  footerLink = '/teacher-management';
  title: string = '';
  backRoute: string = 'teacher-management';

  classContents: any = [
    {
      className: '9th A',
    },
    {
      className: '9th B',
    },
    {
      className: '10th A',
    },
    {
      className: '11th A',
    },
    {
      className: '12th A',
    },
    {
      className: '12th B',
    },
  ];

  ngOnInit(): void {
    this.title = 'My Classes';
    let body: any = JSON.parse(sessionStorage.getItem('loggedInUser')!);
    this.getClassDetails({ id: body?.TokenDetails?.userId });
  }

  getClassDetails(body: any) {
    this.service.getAllChildrenData(body).subscribe((res: any) => {
      this.classContents = [
        {
          className: '9th A',
        },
        {
          className: '9th B',
        },
        {
          className: '10th A',
        },
        {
          className: '11th A',
        },
        {
          className: '12th A',
        },
        {
          className: '12th B',
        },
      ];
    });
  }

  ngOnDestroy(): void {}

  openDialog(child: any) {
    sessionStorage.setItem('class', JSON.stringify(child));
    this.router.navigate(['/class'], {
      queryParams: { classDetails: child?.className },
    });
  }
}
