import { Box, Container, InputAdornment, Paper, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SearchList from './SearchList';
import NewsModel from '../../models/NewsModel';
import AlgoliaSearchService from '../../services/AlgoliaSearchService';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useAppDispatch } from '../../app/hooks';
import { addHistory } from '../history/HistorySlice';
import moment from 'moment';
import Pagination from '@material-ui/lab/Pagination';
import AlgoliaSearchResultModel from '../../models/AlgoliaSearchResultModel';

const searchService = new AlgoliaSearchService()
const search = AwesomeDebouncePromise((text) => searchService.search(text),500)

const SearchView = () => {

  const [searchText, setSearchText] = useState<string>('')
  const [list, setList] = useState<NewsModel[]>([])
  const [result, setResult] = useState<AlgoliaSearchResultModel>(new AlgoliaSearchResultModel())

  const dispatch = useAppDispatch()

  const handleSearch = (text: string) => {
    setSearchText(text.trim())
    if (text === '') {
      setList([])
      setResult(new AlgoliaSearchResultModel())
      return
    }
    search(text).then(({news, result}) => {
      dispatch(addHistory({text, result, time: moment().valueOf()}))
      setList(news)
      setResult(result)
    })
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    searchService.search(searchText, page - 1).then(({news, result}) => {
      setList(news)
      setResult(result)
    })
  }

  return (
    <Container maxWidth="md">
      <TextField
        label="Search"
        value={searchText}
        type="search"
        variant="filled"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
      <SearchList list={list} />
      {(result.pagesTotal)? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100px">
          <Pagination count={result.pagesTotal} variant="outlined" color="primary" onChange={handlePageChange} />
        </Box>
      ) : (
        <Paper>
          <Box display="flex" justifyContent="center" alignItems="center" height="100px">
            <Typography variant="h6">No results has been found yet!</Typography>
          </Box>
        </Paper>
      )}
    </Container>
  )
}

export default SearchView