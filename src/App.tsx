import GlobalStyles from 'globalStyles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/layout/Loyout';
import Home from 'pages/Home/Home';
import Weiterbildung from 'pages/Weiterbildung/Weiterbildung';
import BeruflicheErfahrung from 'pages/BeruflicheErfahrung/BeruflicheErfahrung';
import Studium from 'pages/Studium/Studium';
import Skills from 'pages/Skills/Skills';
import Interessen from 'pages/Interessen/Interessen';
import Zertifikate from 'pages/Zertifikate/Zertifikate';


function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Layout>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/weiterbildung" element={<Weiterbildung/>} />
      <Route path="/beruflicheErfahrung" element={<BeruflicheErfahrung/>} />
      <Route path="/studium" element={<Studium/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/interessen" element={<Interessen/>} />
      <Route path="/zertifikate" element={<Zertifikate/>} />
      <Route path="*" element="Seite nicht gefunden" />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
