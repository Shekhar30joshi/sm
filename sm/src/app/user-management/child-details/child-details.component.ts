import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss'],
})
export class ChildDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private service: CommonService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  title: string = '';
  allChilds: any = [];
  backRoute: string = 'user-management';

  ngOnInit(): void {
    this.allChilds = [];
    this.service.castData.subscribe((res: any) => {
      this.allChilds = res;
    });
    this.route.queryParams.subscribe((res: any) => {
      this.title = 'My Childs';
    });
  }

  ngOnDestroy(): void {}

  openDialog(child: any) {
    sessionStorage.setItem('child', JSON.stringify(child));
    this.router.navigate(['/child'], {
      queryParams: { childDetails: child?.firstName },
    });
  }
}
