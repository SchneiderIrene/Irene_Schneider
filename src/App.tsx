import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

const App = () => {
  return (
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='*' element="Page not found"/>
    </Routes>
  </Layout>
  </BrowserRouter>
)
}

export default App;
