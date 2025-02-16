
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SnapshotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
