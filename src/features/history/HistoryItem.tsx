import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';
import HistoryModel from '../../models/HistoryModel';
import { useAppDispatch } from '../../app/hooks';
import { removeHistory } from '../history/HistorySlice';

interface HistoryItemProps {
  history: HistoryModel
}

const HistoryItem = ({ history }: HistoryItemProps) => {

  const dispatch = useAppDispatch()
  const handleRemove = () => dispatch(removeHistory(history))

  const totals = `
  ${moment(history.time).fromNow()} | 
  ${history.result.searchTotal} | 
  Pages: ${history.result.pagesTotal}`

  return (
    <ListItem>
      <ListItemText primary={history.text} secondary={totals} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleRemove}>
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default HistoryItem