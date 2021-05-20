import { Fragment, useEffect, useState } from 'react';
import { Box, Divider, List, Typography } from '@material-ui/core';
import HistoryItem from './HistoryItem';
import HistoryModel from '../../models/HistoryModel';
import { useAppSelector } from '../../app/hooks';
import { getHistory } from './HistorySlice';

const HistoryList = () => {

  const histories = useAppSelector(getHistory)

  const [list, setList] = useState<HistoryModel[]>([])
  useEffect(() => {
    setList([...histories].reverse())
  }, [histories])

  return (
    <List>
      {(!list.length)? (
        <Box textAlign="center">
          <Typography variant='body1' component="span">Nothing has been searched yet!</Typography>
        </Box>
      ) : null}
      {list.map((history: HistoryModel, index: number) => (
        <Fragment key={index}>
          <HistoryItem history={history} />
          {(index + 1 < list.length)? <Divider /> : null }
        </Fragment>
      ))}
    </List>
  )
}

export default HistoryList