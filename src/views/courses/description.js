import React from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { deleteCourse, updateCourse } from '../../actions';
import Form from './form';

const CourseDescription = ({ course, deleteCourseAction, updateCourseAction }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Form
        open={open}
        close={() => setOpen(false)}
        course={course}
        success={updateCourseAction}
      />
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {course.name}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            {course.description}
          </Typography>
          <Typography color="textSecondary">
            23 books in course
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteCourseAction(course)}
          >
            <Delete />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            <Edit />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

const mapDispatchToProps = {
  deleteCourseAction: deleteCourse,
  updateCourseAction: updateCourse,
};


export default connect(null, mapDispatchToProps)(CourseDescription);
