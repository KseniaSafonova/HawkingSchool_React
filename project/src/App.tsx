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
import Registration from './components/Registration';
import type { RootState } from './redux/store';
import { useSelector } from 'react-redux'

//@ts-ignore
function App() {
  const news = useSelector((state: RootState) => state.news.value)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HeaderNav />
        {/* <Error /> */}
        <Routes>
          <Route path='/Registration' element={<Registration />}></Route>
          <Route path='/' element={<Main />}></Route>
          <Route path='/newsList' element={<NewsList news={news} />}></Route>
          <Route path='/newsList/:id' element={<DetailNews news={news} />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
