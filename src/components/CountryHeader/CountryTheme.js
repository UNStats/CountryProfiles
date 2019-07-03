import React from 'react';

import Table, { TableBody, TableRow, TableCell } from 'calcite-react/Table';

const CountryTheme = ({ theme }) => {
  const getValue = fact => {
    const value = fact.values[fact.values.length - 1].toLocaleString();
    const units = fact.units;
    const year = fact.years[fact.years.length - 1];

    return `${value} ${units} (${year})`;
  };

  return (
    <Table plain justified>
      <TableBody>
        {theme.themeFacts
          .filter(f => f.values.length)
          .map(fact => (
            <TableRow key={fact.seriesTitle}>
              <TableCell>{fact.seriesTitle}</TableCell>
              <TableCell>{getValue(fact)}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default CountryTheme;
