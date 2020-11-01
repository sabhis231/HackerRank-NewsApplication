import { NewsActions } from "./../actions/news.actions";
import { Action } from "@ngrx/store";
import { News } from "../../model/news";
import { filter } from "rxjs/operator/filter";

// define actions
export const LOAD_SECTION_NEWS = "[News] LOAD_SECTION_NEWS";
export const FILTER_SUBSECTION = "[News] FILTER_SUBSECTION";

// define state interface
export interface NewsState {
  newsList: News[];
  filter: string;
}

// initial state
export const initialState: NewsState = {
  newsList: [],
  filter: "",
};

// implement actions
export function news(state = initialState, action: Action) {
  switch (action.type) {
    case LOAD_SECTION_NEWS: {
      return {
        ...state,
        newsList: action.payload,
      };
    }
    case FILTER_SUBSECTION: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
}

export const getNewsList = (state: any) => {
  return state;
};

export const getFilter = (state: any) => {
  return state.filter;
};
