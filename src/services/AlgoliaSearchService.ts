import axios from 'axios';
import NewsModel from '../models/NewsModel';
import AlgoliaSearchResultModel from '../models/AlgoliaSearchResultModel';

interface SearchResult {
  news: NewsModel[],
  result: AlgoliaSearchResultModel
}

export default class AlgoliaSearchService {

  base = 'http://hn.algolia.com/api/v1/search'

  async search(text: string, page?: number): Promise<SearchResult> {
    let news: NewsModel[] = [];
    let result = new AlgoliaSearchResultModel();
    try {
      const response = await axios.get(this.base, {
        params: {
          query: text,
          tags: 'story',
          page: page ?? 0,
        }
      });
      if(response.status === 200) {
        news = response.data.hits.map((hit: any) => {
          return AlgoliaSearchService.mapNew(hit)
        })
        result.page = response.data.page
        result.pagesTotal = response.data.nbPages
        result.searchTotal = response.data.nbHits
        result.searchPerPage = response.data.hitsPerPage
      }
    } catch (error) {
      console.error(error);
    }

    return { news, result }
  }

  delay(milisec: any) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, milisec);
    })
  }

  static mapNew(hit:any): NewsModel {
    return {
      title: hit.title,
      url: hit.url,
      author: hit.author,
      points: hit.points,
      commentsTotal: hit.num_comments,
      createdAt: hit.created_at,
    }
  }
}