// Page
import Page from "./components/Page";

// Header
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Main>
        
      </Main>
    </Page>
  );
}

export default App;
