import { useHistory } from 'react-router-dom';

import { Box, DataTable } from 'grommet';

import { columns } from './tableConfig';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectWatchlist } from '../../slices/list/listSlice';

const WatchlistTable = () => {
  const history = useHistory();

  const tableData = Object.values(useAppSelector(selectWatchlist));

  const onClickHandle = (e: any) => {
    // console.log(e.datum.id);

    history.push(`/movie/${e.datum.id}`);
  };

  return (
    <Box align='start' pad='large'>
      <DataTable
        primaryKey={false}
        columns={columns}
        data={tableData}
        step={10}
        onClickRow={onClickHandle}
      />
    </Box>
  );
};

export default WatchlistTable;
