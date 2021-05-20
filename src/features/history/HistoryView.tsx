import { Box, Container, createStyles, makeStyles, Paper, Typography } from '@material-ui/core';
import HistoryList from './HistoryList';
import HistoryIcon from '@material-ui/icons/History';
import { useAppSelector } from '../../app/hooks';
import { getHistoryTotal } from './HistorySlice';

const HistoryView = () => {
  const classes = useStyles()
  const historyTotal = useAppSelector(getHistoryTotal)
  return (
    <Container maxWidth="xs">
      <Box display="flex" alignItems="center">
        <HistoryIcon fontSize="large" />
        <Typography variant='h4' component='h2' className={classes.title}>History</Typography>
        <Typography variant='body1' component='span' className={classes.title}>({historyTotal})</Typography>
      </Box>
      <Paper>
        <HistoryList />
      </Paper>
    </Container>
  )
}

const useStyles = makeStyles(() => createStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
  }
}))

export default HistoryView