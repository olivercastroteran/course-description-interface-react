import React from 'react';
import { Button, TextField, Dialog, DialogActions,
  DialogContent, DialogTitle } from '@material-ui/core';

const FormDialog = ({ open, close, book }) => {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  React.useEffect(() => {
    if (book) {
      setTitle(book.title); setAuthor(book.author);
    } else {
      setTitle(''); setAuthor('');
    }
  }, [book]);

  return (
    <div>
      <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{ book ? 'Edit book' : 'Create book'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="book_title"
            label="Book title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="book_author"
            label="Book author"
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ marginTop: '10px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>
          {
            book && (
              <Button onClick={() => { setTitle(book.title); setAuthor(book.author); }} color="primary">
                Discard
              </Button>
            )
          }
          <Button onClick={close} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
