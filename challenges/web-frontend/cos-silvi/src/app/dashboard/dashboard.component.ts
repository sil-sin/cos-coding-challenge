import { Component, Input, OnInit } from "@angular/core";
import { UserModel } from "../_auth/models/user.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  @Input() username: UserModel;

  constructor() {}

  ngOnInit() {
    console.log("something!");
  }
}
