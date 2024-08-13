import Certificates from "pages/Certificates/Certificates"
import Experience from "pages/Experience/Experience"
import Home from "pages/Home/Home"
import Layout from "pages/Layout/Layout"
import CatFacts from "pages/Projects/CatFacts/CatFacts";
import Projects from "pages/Projects/Projects"
import RandomJokes from "pages/Projects/RandomJokes/RandomJokes";
import HomeWeather from "pages/Projects/WeatherApp/HomeWeather/HomeWeather"
import Weather from "pages/Projects/WeatherApp/Weather/Weather"
import Studies from "pages/Studies/Studies"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/weatherApp/home" element={<HomeWeather />} />
          <Route path="/projects/weatherApp/weather" element={<Weather />} />
          <Route path="/projects/catfacts/catfacts" element={<CatFacts />} />
          <Route path="/projects/randomJokes/randomJokes" element={<RandomJokes />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
