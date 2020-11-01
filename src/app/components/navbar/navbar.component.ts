import { News } from "./../../model/news";
import * as newsAction from "../../store/actions/news.actions";

import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  subsections: string[] = ["movie", "tech", "money"];
  response: Object[];
  constructor(private store: Store<any>) {}

  ngOnInit() {}

  dispatchAction($event: string) {
    this.store.dispatch($event as any);
  }
}
