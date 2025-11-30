import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
