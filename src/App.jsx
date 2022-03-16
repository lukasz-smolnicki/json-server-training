import GlobalStyles from './index.css';
import { ThemeProvider } from 'styled-components';
import { Navigation } from 'components';
import theme from 'utils/theme';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' }
        ]} />
        <Routes>
          <Route path='' element={'HomePage'} />
          <Route path='/budget' element={'budget'} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
