import React from 'react';
import CourseDescription from './description';
import BooksTable from '../books/table';
import useStyles from '../../theme/styles';

const CourseShow = ({ course }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <CourseDescription course={course} />
      </div>
      <div className={classes.regularMarginTop}>
        <BooksTable course={course} />
      </div>
    </>
  );
};

export default CourseShow;
