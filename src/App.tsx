import styles from './App.module.scss';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/root/root';
import Home from './components/home/home';
import About from './components/pages/about/about';
import Shop from './components/pages/shop/shop';
import Spades from './components/pages/spades/spades';
import Stones from './components/pages/stones/stones';
import Visuals from './components/pages/visuals/visuals';
import Kings from './components/pages/kings/kings';
import Essential from './components/pages/essentials/essentials';
import Blog from './components/pages/blog/blog';
import Hearts from './components/pages/hearts/hearts';
import Faq from './components/pages/faq/faq';
import Custom from './components/pages/custom/custom';
import HarlemXPd from './components/pages/harlemXpd/harlemXpd';
import Clubs from './components/pages/clubs/clubs';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/harlemXpd" element={<HarlemXPd/>}/>
    <Route path="/kings" element={<Kings/>}/>
    <Route path="/essential" element={<Essential/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/spades" element={<Spades/>}/>
    <Route path="/hearts" element={<Hearts/>}/>
    <Route path="/clubs" element={<Clubs/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/custom" element={<Custom/>}/>
    <Route path="/stones" element={<Stones/>}/>
    <Route path="/visuals" element={<Visuals/>}/>
    <Route path="/about" element={<About/>}/>
  </Route>
))

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={AppRouter}/>
    </div>
  );
}

export default App;
