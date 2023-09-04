import { useRoutes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';

function MainRouter() {
  return useRoutes(
    [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <AboutMe />,
        path: '/aboutme',
      },
    ]
  )
}

export default MainRouter
