import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login, {action as loginAction} from './components/Login'
import SignUp from './components/SignUp'
import Home, {action as homeAction} from './components/Home'
import ProductPage, {action as productLoader} from './components/ProductPage'
import ErrorPage from './components/ErrorPage'
import RootLayout from './components/RootLayout'
import CartModal from './components/CartModal'
import ProductBySelection from './components/ProductBySelection'

function App() {

  const router = createBrowserRouter([
    { path: "/", 
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, 
          element: <Login />,
          loader: homeAction,
        },
        {
          path: 'product',
          children: [
            {
              index:true,
              element: <ProductPage />,
              loader: productLoader,
            },
            {
              path: ':productId',
              id: 'productId',
              element: <ProductBySelection />,
            }
          ]
        },
        { 
          path: 'login', 
          element: <Login />,
          action: loginAction,
        },
        { path: 'signup', element: <SignUp />},
        { path: 'home', 
          element: <Home />,
          loader: homeAction,
        },
        {
          path: 'cart',
          element: <CartModal />,
        }
      ]
    },
    
  ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
