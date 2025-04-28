import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

import LoadingFullPage from './components/LoadingFullPage'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import SignUp from './pages/SignUp'

const SearchPage = lazy(() => import('./pages/SearchPage'))
const Cart = lazy(() => import('./pages/Cart'))

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Somatório doa preços novos
  const currentTotal = cart.reduce((sum, item) => {
    const numericValue = parseFloat(item.newPrice.replace(/[^\d,.]/g, '').replace('.', '').replace(',', '.'))
    return sum + numericValue
  }, 0)

  const formattedCurrentTotal = currentTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  // Somatório doa preços antigos
  const oldTotal = cart.reduce((sum, item) => {
    const numericValue = parseFloat(item.oldPrice.replace(/[^\d,.]/g, '').replace('.', '').replace(',', '.'))
    return sum + numericValue
  }, 0)

  const formattedOldTotal = oldTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  })

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<LoadingFullPage />}>
            <Routes>
              <Route
                path='/'
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <SearchPage
                      cart={cart}
                      setCart={setCart}
                      currentTotal={formattedCurrentTotal}
                      oldTotal={formattedOldTotal}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Cart
                      cart={cart}
                      setCart={setCart}
                      currentTotal={formattedCurrentTotal}
                      oldTotal={formattedOldTotal}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <Login
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <SignUp
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#006bff",
              color: "white",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  )
}