import React from 'react';
import { Button, TextField, Dialog, DialogActions,
  DialogContent, DialogTitle } from '@material-ui/core';

const FormDialog = ({ open, close, course, success }) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    if (course) {
      setName(course.name); setDescription(course.description);
    } else {
      setName(''); setDescription('');
    }
  }, [course]);

  return (
    <div>
      <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create course</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="course_name"
            label="Course name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="course_description"
            label="Description"
            fullWidth
            style={{ marginTop: '10px' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>
          {course
            && (
            <Button
              onClick={() => { setName(course.name); setDescription(course.description); }}
            >
              Discard
            </Button>
            )}
          <Button
            onClick={() => {
              success(course ? { ...course, name, description } : { name, description });
              close();
              setName('');
              setDescription('');
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default FormDialog;
