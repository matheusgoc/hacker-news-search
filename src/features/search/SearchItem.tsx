import { CardContent, Grid, Typography } from '@material-ui/core';
import NewsModel from '../../models/NewsModel';
import moment from 'moment';

interface SearchItemProps {
  news: NewsModel
}

const SearchItem = ({ news }: SearchItemProps) => {
  return (
    <CardContent>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Typography variant="subtitle1" component="h2">
          {news.title}
        </Typography>
        <Typography color="textSecondary" variant='caption'>
          {news.points} points | {news.author} | {moment(news.createdAt).fromNow()} | {news.commentsTotal} comments
        </Typography>
      </Grid>
      <Typography color="textSecondary" variant='subtitle2'>
        {news.url}
      </Typography>
    </CardContent>
  )
}

export default SearchItem