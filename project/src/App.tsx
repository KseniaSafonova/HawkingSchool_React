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

//@ts-ignore
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HeaderNav />
        {/* <Error /> */}
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/newsList' element={<NewsList />}></Route>
          <Route path='/newsList/:id' element={<DetailNews />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
