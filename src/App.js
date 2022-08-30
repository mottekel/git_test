
import './App.css';
import 'antd/dist/antd.min.css'
import { HashRouter } from 'react-router-dom';
import MRouter from './router';

function App() {
  return (
    <HashRouter>
      <MRouter></MRouter>
    </HashRouter>
  );
}

export default App;
