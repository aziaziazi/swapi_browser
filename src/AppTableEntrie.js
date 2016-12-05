import React from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

const AppTableEntrie = ({entrieName}) => {
  return (
    <TableRow>
      <TableRowColumn>{entrieName}</TableRowColumn>
    </TableRow>
  );
}

AppTableEntrie.propTypes = {
  entrieName: React.PropTypes.string.isRequired
};

export default AppTableEntrie;