import GlobalStyles from './index.css';
import { ThemeProvider } from 'styled-components';
import { Navigation, Wrapper } from 'components';
import theme from 'utils/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' }
        ]}
          RightElement={[
            <div>
              <button></button>
              <button></button>
            </div>
          ]} />
        <Wrapper>
          <Routes>
            <Route path='' element={'HomePage'} />
            <Route path='/budget' element={'budget'} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
