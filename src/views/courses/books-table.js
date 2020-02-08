/* eslint no-restricted-globals:0 */
import React from 'react';
import MaterialTable from 'material-table'
import { AddCircle, Edit, Delete } from '@material-ui/icons';

const BooksTable = () => {
  return(
    <MaterialTable
      actions={[
        {
          icon: () => <Edit color="primary" />,
          tooltip: 'Edit Book',
          onClick: (event, rowData) => alert("Edit " + rowData.name)
        },
        {
          icon: () => <Delete color="secondary" />,
          tooltip: 'Delete User',
          onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
        },
        {
          icon: () => <AddCircle color="primary" fontSize="large" />,
          tooltip: 'Add Book',
          onClick: () => {},
          isFreeAction: true,
        }
      ]}
      columns={[
        { title: 'Author', field: 'author' },
        { title: 'Title', field: 'title' },
      ]}
      data={
        [{ author: 'Jhon Smith', title: 'Mobile advertising fundamentals'},
          { author: 'Jhon Smith', title: 'Mobile advertising fundamentals'},
          { author: 'Jhon Smith', title: 'Mobile advertising fundamentals'}
        ]}
      title="Course books"
    />
  )
}

export default BooksTable;