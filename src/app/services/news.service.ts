import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { News, NewsResponse } from "../model/news";
import "rxjs/add/operator/map";

@Injectable()
export class NewsService {
  constructor(private http: Http) {}
  baseUrl =
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=315a5a51483b469a918246dc2753b339";

  getSectionNews(sectionName: string): any {
    return this.http
      .get(
        "https://api.nytimes.com/svc/topstories/v2/" +
          sectionName +
          ".json?api-key=315a5a51483b469a918246dc2753b339"
      )
      .map((resData) => {
        return resData.json();
      });
    // fetch news of that sectionName
  }
}
