/* eslint no-restricted-globals:0 */
import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { AddCircle, Edit, Delete } from '@material-ui/icons';
import { addBook, deleteBook, updateBook } from '../../actions';
import Form from './form';

const BooksTable = ({ course, addBookAction, deleteBookAction, updateBookAction }) => {
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
        success={
          (bookToEdit) ? (book) => updateBookAction(course, book, bookToEdit)
            : (book) => addBookAction(course, book)
        }
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
            onClick: (event, rowData) => deleteBookAction(course, rowData),
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
        data={course.textbooks}
        title="Course books"
      />
    </>
  );
};

const mapDispatchToProps = {
  addBookAction: addBook,
  deleteBookAction: deleteBook,
  updateBookAction: updateBook,
};


export default connect(null, mapDispatchToProps)(BooksTable);
