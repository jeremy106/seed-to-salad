/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import BedManager from './components/BedManager'

const router = createBrowserRouter(
  createRoutesFromElements([
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="/beds" element={<BedManager />}/>
  </Route>
])
)

export default router
