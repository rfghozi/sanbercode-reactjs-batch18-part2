import React, {useState} from 'react';
import './App.css';
import Tugas15 from "./Tugas-15/Routes";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './/style/theme';
import { GlobalStyles } from './style/global';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

    return(
      <div>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Tugas15 themeToggler={toggleTheme} theme={theme}/>
          <button onClick={toggleTheme}>Toggle theme</button>
        </ThemeProvider>

        {/* <Form />
        <Table />
        <Timer />
        <Table2 /> */}
        {/* <HooksWithAxios /> */}
        {/* <DataBuah /> */}
      </div>
    );
}

export default App;
