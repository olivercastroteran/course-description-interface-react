import React from 'react';
import CourseDescription from './description';
import BooksTable from '../books/table';
import useStyles from '../../theme/styles';

const CourseShow = () => {
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
  );
};

export default CourseShow;
