import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {ThemeContextProvider} from "./themeContext"

function App(props) {

  
    return (
      <>
        <ThemeContextProvider>
          <Header />
          <Body />
          <Footer />
        </ThemeContextProvider>
      </>
    );
}

export default App;
