import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import IndexView from './views';
import ShowCourse from './views/courses/show';
import Layout from './views/layout';

function Routes({ courses }) {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={IndexView} />
          {courses.items.map((course) => (
            <Route
              path={`/courses/${course.id}`}
              component={() => <ShowCourse course={course} />}
            />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>

    </BrowserRouter>
  );
}


const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps, null)(Routes);
