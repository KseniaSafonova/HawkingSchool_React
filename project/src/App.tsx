import Error from './pages/Error/Error';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './pages/Main/Main';
import DetailNews from './pages/DetailNews/DetailNews';
import NewsList from './pages/NewsList/NewsList';
import Contacts from './pages/Contacts/Contacts';

//@ ts-ignore
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HeaderNav />
        <Link to='/'>Main</Link>
        <Link to='/detailNews'>DetailNews</Link>
        <Link to='/newsList'>News List</Link>
        <Link to='/contacts'>Contacts</Link>
        {/* <Error /> */}
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/detailNews' element={<DetailNews />}></Route>
          <Route path='/newsList' element={<NewsList />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
