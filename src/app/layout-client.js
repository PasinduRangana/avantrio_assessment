'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <div className={inter.className}>
        {children}
      </div>
    </Provider>
  );
}
