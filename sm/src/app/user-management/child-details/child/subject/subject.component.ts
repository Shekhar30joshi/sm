import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: CommonService,
    private router: Router
  ) {}

  title: string = '';
  backRoute: string = '/child';
  allSubjects: any = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.getAllSubject(res?.parentId);
      this.title = 'Subjects';
    });
  }

  getAllSubject(body: any) {
    this.service.getAllSubject(body).subscribe((res: any) => {
      this.allSubjects = res?.data?.childsInfo;
    });
  }
}
