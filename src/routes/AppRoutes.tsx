import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import BooksPage from '../pages/BooksPage';
import PrivateRoute from '../components/PrivateRoutes';
import BookDetailPage from '../pages/BookDetailPage';

const AppRoutes: React.FC = () => {
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/books"
          element={
            // <PrivateRoute>
              <BooksPage />
            // </PrivateRoute>
          }
        />
        <Route
          path="/book/:id"
          element={
            // <PrivateRoute>
              <BookDetailPage />
            // </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
