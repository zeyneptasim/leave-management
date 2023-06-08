import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import BookingPage from './pages/BookingPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="userinfo" element={<ProfilePage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
