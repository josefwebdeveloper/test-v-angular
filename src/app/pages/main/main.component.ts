import { Component, OnInit } from '@angular/core';
import {Users} from "../../mocks/users";
import {Groups} from "../../mocks/groups";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  users=Users;
  groups=Groups;
  constructor() { }

  ngOnInit(): void {
  }

}
