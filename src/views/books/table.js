/* eslint no-restricted-globals:0 */
import React from 'react';
import MaterialTable from 'material-table';
import { AddCircle, Edit, Delete } from '@material-ui/icons';
import Form from './form';

const BooksTable = () => {
  const [open, setOpen] = React.useState(false);
  const [bookToEdit, setBookToEdit] = React.useState(null);
  return (
    <>
      <Form
        open={open}
        close={() => {
          setOpen(false);
          setBookToEdit(null);
        }}
        book={bookToEdit}
      />
      <MaterialTable
        actions={[
          {
            icon: () => <Edit color="primary" />,
            tooltip: 'Edit Book',
            onClick: (event, rowData) => { setOpen(true); setBookToEdit(rowData); },
          },
          {
            icon: () => <Delete color="secondary" />,
            tooltip: 'Delete User',
            onClick: (event, rowData) => confirm(`You want to delete ${rowData.name}`),
          },
          {
            icon: () => <AddCircle color="primary" fontSize="large" />,
            tooltip: 'Add Book',
            onClick: () => setOpen(true),
            isFreeAction: true,
          },
        ]}
        columns={[
          { title: 'Author', field: 'author' },
          { title: 'Title', field: 'title' },
        ]}
        data={
        [{ author: 'Jhon Smith', title: 'Mobile advertising fundamentals' },
          { author: 'Jhon Smith', title: 'Mobile advertising fundamentals' },
          { author: 'Jhon Smith', title: 'Mobile advertising fundamentals' },
        ]
}
        title="Course books"
      />
    </>
  );
};

export default BooksTable;
