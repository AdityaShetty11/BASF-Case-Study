# Book Recommendation System

A modern web application for browsing, searching, and reviewing books. Built with React, TypeScript, and Redux Toolkit, this app provides a seamless experience for book enthusiasts to discover and rate their favorite reads.

## 🚀 Features

- **User Authentication**
  - Simple login page with username and password
  - "Remember me" functionality (localStorage vs sessionStorage)
  - Protected routes with router guards
  - Session persistence across browser sessions

- **Book Browsing**
  - Browse books fetched from Google Books API
  - Search books by title or author
  - Paginated book list with 20 items per page
  - Interactive data grid with AG Grid

- **Book Details & Reviews**
  - View detailed information about any book
  - Rate books from 1 to 5 stars
  - Write and save text reviews
  - Double-click any book row to view details

- **State Management**
  - Centralized state management with Redux Toolkit
  - Persistent book reviews (lost on page reload as per requirements)
  - Efficient data fetching with async thunks

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **State Management**: Redux Toolkit 2.11.0
- **UI Library**: Material-UI (MUI) 7.3.5
- **Data Grid**: AG Grid Community 34.3.1
- **Routing**: React Router DOM 7.9.6
- **Styling**: Styled Components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BASF-Case-Study
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Project Structure

```
BASF-Case-Study/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BookList.tsx     # Main book listing with search & pagination
│   │   ├── BooksTable.tsx   # AG Grid table for displaying books
│   │   └── PrivateRoutes.tsx # Route guard component
│   ├── pages/               # Page components
│   │   ├── LoginPage.tsx    # User authentication page
│   │   ├── BooksPage.tsx    # Main books page with header
│   │   └── BookDetailPage.tsx # Book details with review/rating
│   ├── redux/               # Redux state management
│   │   ├── store.ts         # Redux store configuration
│   │   ├── hooks.ts         # Typed Redux hooks
│   │   └── books/           # Books-related Redux logic
│   │       ├── booksSlice.ts    # Books state slice
│   │       ├── booksThunks.ts   # Async API calls
│   │       ├── reviewSlice.ts   # Reviews & ratings slice
│   │       └── types.ts        # TypeScript types
│   ├── routes/              # Application routing
│   │   └── AppRoutes.tsx    # Route definitions
│   ├── utils/               # Utility functions
│   │   └── auth.ts           # Authentication helpers
│   ├── App.tsx              # Root component with Redux Provider
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔑 Key Features Explained

### Authentication
- Login credentials are stored in `localStorage` (if "Remember me" is checked) or `sessionStorage` (if unchecked)
- Router guards prevent unauthorized access to protected routes
- Logout clears both storage types

### Book Data
- Books are fetched from the Google Books API
- Default query: `subject:fiction` (fetches fiction books)
- Search functionality filters books by title or author locally

### Reviews & Ratings
- User reviews and ratings are stored in Redux state
- Data is lost on page reload
- Each book can have one review and rating per user session

## 📡 API Integration

This application uses the [Google Books API](https://developers.google.com/books/docs/v1/using) to fetch book data.

**Endpoint**: `https://www.googleapis.com/books/v1/volumes`

**Example Query**: `?q=subject:fiction`

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔒 Protected Routes

The following routes require authentication:
- `/books` - Main books listing page
- `/book/:id` - Individual book detail page

Unauthenticated users are redirected to `/` (login page).

## 🎨 UI Components

- **Material-UI**: Used for buttons, text fields, ratings, and layout components
- **AG Grid**: Professional data grid for displaying books in a table format
- **Responsive Design**: Mobile-friendly layout with Material-UI's responsive system

## 📝 Notes

- Reviews and ratings are stored in Redux state only (not persisted to browser storage)
- Book data is fetched from Google Books API on component mount
- The "Remember me" feature determines storage type (localStorage vs sessionStorage)

## 🚧 Future Improvements

- [ ] Add user registration functionality
- [ ] Implement backend API for persistent reviews
- [ ] Add book favorites/wishlist feature
- [ ] Implement advanced filtering (by genre, rating, etc.)
- [ ] Add book cover images to the table
- [ ] Implement infinite scroll or virtual scrolling
- [ ] Add unit and integration tests

## 📄 License

ISC

## 👤 Author

Built as a case study project for book recommendation and review management.

---

**Happy Reading! 📚**
