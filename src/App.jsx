import { useState } from 'react'
import Nav from './components/Nav'
import store from './utils/store'
import Body from './components/Body'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Watch from './components/Watch'

function App() {
  const [count, setCount] = useState(0)
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      children:[
        {
          path: '/',
          element:<MainContainer/>
        },
        {
          path: '/watch',
          element:<Watch/>
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <Nav />
      <RouterProvider router={AppRouter}/>
    </Provider>

  )
}

export default App
