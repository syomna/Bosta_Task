import { useTranslation } from 'react-i18next';
import Layout from './pages/Layout';

function App() {

  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <Layout />
  );
}

export default App;
