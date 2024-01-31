import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppProvider } from './context/AppContext'
import { CookiesProvider } from 'react-cookie'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from "react-toastify"
import { APP_BASE } from "./config"
import 'react-toastify/dist/ReactToastify.css'

// Components
import Home from './pages/Home/Home'

const queryClient = new QueryClient()

function App() {

  return (
    <CookiesProvider>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <Router basename={APP_BASE} future={{ v7_startTransition: true }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppProvider>
    </CookiesProvider>
  )
}

export default App