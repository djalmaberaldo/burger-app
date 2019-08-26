import React from 'react';

import Layout from './components/Layout/Layout';
import BurguerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <div>
        <Layout>
          <BurguerBuilder />
        </Layout>
      </div>
    </div>
  );
}

export default App;
