import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Payments from './pages/Payments';
import Offers from './pages/Offers';
import Users from './pages/Users';
import Chat from './pages/Chat';
import Delivery from './pages/Delivery';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import AdminAccess from './pages/AdminAccess';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-900 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/users" element={<Users />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin-access" element={<AdminAccess />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
