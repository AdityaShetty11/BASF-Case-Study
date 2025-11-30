import { ModuleRegistry, AllCommunityModule, ColDef } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box, CircularProgress } from '@mui/material';
import { Book } from '../redux/books/types';
import { useNavigate } from 'react-router-dom';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

interface Props {
  books: Book[];
  loading: boolean;
}

const BooksTable: React.FC<Props> = ({ books, loading }) => {
  const navigate = useNavigate();
  const columns: ColDef<Book>[] = [
    { headerName: 'Title', field: 'title', flex: 2 },
    { headerName: 'Author', field: 'author', flex: 2 },
    { headerName: 'Genre', field: 'genre', flex: 1 },
    { headerName: 'Rating', field: 'rating', flex: 1 }
  ];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="ag-theme-material" sx={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={books}
        columnDefs={columns as []}
        pagination={false}
        animateRows
        onRowDoubleClicked={(params) => {
          if(params && params.data && params.data.id) {
            navigate(`/book/${params.data.id}`);
          }
        }}
      />
    </Box>
  );
};

export default BooksTable;
