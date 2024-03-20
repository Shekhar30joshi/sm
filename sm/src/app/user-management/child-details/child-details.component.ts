import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public dialog: MatDialog
  ) {}

  title: string = '';
  allChilds: any;

  ngOnInit(): void {
    this.service.castData.subscribe((res: any) => {
      console.log(res);
      this.allChilds = res;
    });
    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      this.title = res.childDetails;
    });
  }

  ngOnDestroy(): void {}

  openDialog(child: any) {
    const dialogRef = this.dialog.open(ChildComponent, {
      data: child,
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
