import { Fragment } from 'react';
import { Card, Divider } from '@material-ui/core';
import SearchItem from './SearchItem';
import NewsModel from '../../models/NewsModel';

interface SearchListProps {
  list: NewsModel[]
}

const SearchList = ({ list }: SearchListProps) => {
  return (
    <Card>
      {list.map((news, index) => (
        <Fragment key={index}>
          <SearchItem news={news} />
          <Divider />
        </Fragment>
      ))}
    </Card>
  )
}

export default SearchList