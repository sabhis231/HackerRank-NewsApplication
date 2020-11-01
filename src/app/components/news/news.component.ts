import { LOAD_SECTION_NEWS } from "./../../store/reducers/news.reducer";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { State, Store } from "@ngrx/store";
import "../../../../node_modules/zone.js/dist/zone.js";

import { NewsItemComponent } from "./news-item/news-item.component";
import { NewsService } from "../../services/news.service";
import { News } from "../../model/news";
import { NewsActions } from "../../store/actions/news.actions";
import { getNews } from "../../store/reducers/selector";
import { news } from "../../store/reducers/news.reducer";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
  providers: [],
})
export class NewsComponent implements OnInit {
  sectionNewsList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private store: Store<"news">
  ) {}

  ngOnInit() {
    let sectionName;

    this.activatedRoute.params.subscribe((params) => {
      this.newsService.getSectionNews(params["id"]).subscribe((res: any) => {
        this.store.dispatch({
          type: LOAD_SECTION_NEWS,
          payload: res.results,
        });
      });
    });
    // send this sectionName to newsService. Subscribe newsService and get the newsList
    // now, get news from store

    this.store.select("news").subscribe((resData: any) => {
    this.sectionNewsList = resData.newsList;
    });
    // send this sectionName to newsService. Subscribe newsService and get the newsList
    // now, get news from store
  }
}
