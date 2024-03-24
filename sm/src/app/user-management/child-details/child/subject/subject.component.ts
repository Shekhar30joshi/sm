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
    let child = JSON.parse(sessionStorage.getItem('child')!);
    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      this.getAllSubject(child?.id);
      this.title = res.name;
    });
  }

  getAllSubject(id: any) {
    let obj = { id: id };
    this.service.getAllSubject(obj).subscribe((res: any) => {
      this.allSubjects = res?.data?.subject_info;
      console.log(this.allSubjects);
    });
  }
}
