import React from 'react';
import IndexView from './views';
import Show from './views/courses/show';
import Layout from './views/layout/';

function App() {
  return (
    <Layout>
      <Show />
    </Layout>
  );
}

export default App;