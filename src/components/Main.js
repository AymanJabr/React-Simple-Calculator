import { Route, Switch } from 'react-router-dom';
import Calculator from '../pages/Calculator';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} exact />
        <Route path="/quote" component={Quote} exact />
      </Switch>
    </main>
  );
}

export default Main;
