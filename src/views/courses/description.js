import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import Form from './form';

const CourseDescription = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Form open={open} close={() => setOpen(false)} />
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            This is the best book of the world
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue quam, varius vitae tellus ut, sagittis tincidunt nibh. Maecenas libero turpis, maximus quis dignissim id, dapibus et lorem. Quisque varius condimentum purus, vitae mattis justo. Sed commodo est leo. Maecenas bibendum, tortor at lacinia elementum, metus purus ultrices justo, vel faucibus nisi mi vel ligula. Nulla gravida ipsum non nibh consequat gravida. Duis porttitor sit amet ante in scelerisque. Sed et libero ullamcorper nunc rutrum scelerisque non at ligula. In efficitur enim ante, nec iaculis quam finibus a. Donec mi est, vestibulum eget sollicitudin vel, lacinia quis purus. Maecenas sollicitudin metus id luctus pulvinar. Nullam nulla lorem, vulputate sit amet rhoncus ac, tincidunt vel ante.
          </Typography>
          <Typography color="textSecondary">
            23 books in course
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
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

export default CourseDescription;
