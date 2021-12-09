import { Route, Switch } from 'react-router-dom';
import Main from "./layouts/main";
import Search from './layouts/search'
import ArticlePage from './components/pages/articlePage/articlePage'
import Login from './layouts/login';
import AdminPannel from './layouts/adminPannel';


function App() {
  return (
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/admin/:articles?/:add?" component={AdminPannel} />
      <Route path="/login/:type?" component={Login} />
      <Route path="/articles/:articleId?" component={ArticlePage} />
      <Route path="/:about?" component={Main} />
    </Switch>
  );
};

export default App;
