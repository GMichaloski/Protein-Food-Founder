import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import RecipePage from './routes/RecipePage';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Outlet />}>
          <Route path="/:page" element={<Home />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
