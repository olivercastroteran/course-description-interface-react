import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton,
  ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, CollectionsBookmark, ChevronLeft, ChevronRight, AddCircle } from '@material-ui/icons';
import { addCourse } from '../../actions';
import useStyles from '../../theme/styles';
import Form from '../courses/form';

const Layout = ({ children, courses, addCourseAction }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [addOpen, setAddOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Form
        open={addOpen}
        close={() => setAddOpen(false)}
        success={addCourseAction}
      />
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
              Course description interface
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {courses.items.map((course) => (
              <Link to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
                <ListItem button key={course.name}>
                  <ListItemIcon><CollectionsBookmark /></ListItemIcon>
                  <ListItemText primary={course.name} />
                </ListItem>
              </Link>
            ))}
          </List>
          <div>
            <IconButton onClick={() => setAddOpen(true)} className={classes.addButton}>
              <AddCircle color="primary" className={classes.addButtonSize} />
            </IconButton>
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          { children }
        </main>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addCourseAction: addCourse,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
