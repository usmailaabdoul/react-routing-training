import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  CharacterDetails,
  Characters,
  About
} from './pages';

import {
  Layout
} from './components';

function App() {
  const router = createBrowserRouter([
    {
      // parent route layout component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          children: [
            {
              path: "/",
              element: <Characters />,
            },
            {
              path: "/:characterId/:characterName",
              element: <CharacterDetails />,
            },
          ],
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App;
