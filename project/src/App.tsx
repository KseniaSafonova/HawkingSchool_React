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
import Registration from './components/EnterProfile';
import type { RootState } from './redux/store';
import { useSelector } from 'react-redux'
import Validation from './components/Validation';
import EnterProfile from './components/EnterProfile';
import Apartments from './pages/Apartments/Apartments';
import styles from './App.module.css';

//@ts-ignore
function App() {
  const news = useSelector((state: RootState) => state.news.value)
  const cities = useSelector((state: RootState) => state.cities.value)
  const apartments = useSelector((state: RootState) => state.apartments.value)
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <HeaderNav />
        {/* <Error /> */}
        <Routes>
          <Route path='/Registration' element={<EnterProfile />}></Route>
          <Route path='/' element={<Main cities={cities} />}></Route>
          <Route path='/newsList' element={<NewsList news={news} />}></Route>
          <Route path='/newsList/:id' element={<DetailNews news={news} />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path='/apartments' element={<Apartments apartments={apartments} />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
