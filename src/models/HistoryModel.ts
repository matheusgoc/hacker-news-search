import AlgoliaSearchResultModel from './AlgoliaSearchResultModel';

export default class HistoryModel {
  text: string = ''
  result: AlgoliaSearchResultModel = new AlgoliaSearchResultModel()
  time: number = 0
}