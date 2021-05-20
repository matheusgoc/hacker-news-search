import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HistoryView from '../features/history/HistoryView';
import SearchView from '../features/search/SearchView';
import NotFound from '../features/restrict/NotFound';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import { AppBar, Box, Button, createStyles, makeStyles, Toolbar, Typography } from '@material-ui/core';

const NavigationRouter = () => {
  const classes = useStyles()
  return (
    <Router>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant='h4' component='h1'>Hacker News</Typography>
          <Box>
            <Button color="inherit" href="/" startIcon={<SearchIcon />}>Search</Button>
            <Button color="inherit" href="/history" startIcon={<HistoryIcon />}>History</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact={true}><SearchView /></Route>
        <Route path="/history"><HistoryView /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </Router>
  )
}

const useStyles = makeStyles(() => createStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default NavigationRouter