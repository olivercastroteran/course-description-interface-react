import React from 'react';
import CourseDescription from './course-description';
import BooksTable from './books-table';
import useStyles from '../../theme/styles';

const ShowCourse = () => {
  const classes = useStyles();

  return (
  <>
    <div>
      <CourseDescription />
    </div>
    <div className={classes.regularMarginTop}>
      <BooksTable />
    </div>
  </>
)};

export default ShowCourse;