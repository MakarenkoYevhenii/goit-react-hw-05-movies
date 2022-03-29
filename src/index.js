import React from 'react';
import {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// const MyComponent = lazy(() => import("./components/App"));
ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter basename="/goit-react-hw-05-movies/">
    <Suspense fallback={<div>Loading...</div>}>

    <App />
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

