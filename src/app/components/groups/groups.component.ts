import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Users} from "../../mocks/users";
import {User} from "../../models/user";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  @Input() groups;
  @Input() users: User[];

  constructor(private dialog: MatDialog,
              private breakpointObserver: BreakpointObserver) {
    setTimeout(() => {

      console.log(this.users)
    }, 1000)
  }

  ngOnInit() {

  }

  deleteGroup(id) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '536px',
      height: '239px',
      panelClass: 'delete-confirm',
      data: {
        message: 'Are you sure want to delete this group?',
        buttonText: {
          ok: 'Delete',
          cancel: 'Cancel'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.groups=this.groups.filter(el=>{
          return el.id!==id;
        })
        console.log(this.groups)
      }
    });
  }

}
