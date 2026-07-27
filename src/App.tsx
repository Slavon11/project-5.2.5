import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { JobList } from './components/JobList';
import { VacancyDetailPage } from './components/VacancyDetailPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/vacancies" replace />} />
        <Route path="/vacancies" element={<JobList />} />
        <Route path="/vacancies/:id" element={<VacancyDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
