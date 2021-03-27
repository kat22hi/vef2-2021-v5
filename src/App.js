// TODO sækja og setja upp react router

import { Layout } from './components/layout/Layout';

import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/:id' component={NewsPage}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </Layout>
  );
}