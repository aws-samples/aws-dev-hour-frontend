import React, { useMemo } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';

import { Checkbox } from './Checkbox';
import { COLUMNS } from './columns';

const RowItem = (row) => (
  <tr key={row.id} {...row.getRowProps()}>
    {row.cells.map(cell => (
      <td
        key={cell.id}
        {...cell.getCellProps()}
        style={{
          padding: '10px',
          border: 'solid 1px gray',
          background: 'white',
        }}
      >
        {cell.render('Cell')}
      </td>
    ))}
  </tr>
);

export const FileTable = (props) => {

  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = useTable({
    columns,
    data: props.filelist
  },
  useSortBy, useRowSelect,
  (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          key: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ];
    });
  });

  return (
    <>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 8px #ff9900',
                    background: '#1b233c',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return RowItem(row);
          })}
        </tbody>
      </table>
      <p>Selected Rows: {Object.keys(selectedFlatRows).length}</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
      <button onClick={() => props.deleteImages(selectedFlatRows.map((row) => row.original))}> Delete Images </button>
    </>
  );
};

FileTable.defaultProps = {
  filelist: [{
    'key': 'no files detected',
    'lastModified': 'not detected due to no file',
    'size': '0'
  }]
};

export default FileTable;