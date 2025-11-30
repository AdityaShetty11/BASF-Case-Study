import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout, getUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import BookList from '../components/BookList';

const BooksPage: React.FC = () => {
  const initials = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Book Recommender
          </Typography>
          <Typography sx={{ mr: 2 }}>{initials}</Typography>
          <Button color="inherit" startIcon={<LogoutIcon />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <BookList />
      </Box>
    </Box>
  );
};

export default BooksPage;
