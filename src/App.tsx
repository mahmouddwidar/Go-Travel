// Page
import Page from "./components/Page";

// Header
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

// Main
import Main from "./components/Main";
import Steps from "./components/Steps/Steps";
import Services from "./components/Services/Services";
import News from "./components/News/News";
import ExploreMore from "./components/ExploreMore/ExploreMore";
import FrequentTraveler from "./components/FrequentTraveler";
import Testimonials from "./components/Testimonials/Testimonials";

// Footer
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Mobile Menu
import MobileMenu from "./components/Navigation/MobileMenu";
import MenuContextProvider from "../context/MobileMenuContext";
import { useEffect } from "react";

// Google Analytics
import { initGoogleAnalytics, logPageView } from "./components/analytics";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    initGoogleAnalytics();
    logPageView();
  }, []);

  return (
    <MenuContextProvider>
      <QueryClientProvider client={queryClient}>
        <Page>
          <Header>
            <Navigation />
            <Hero />
            <MobileMenu />
          </Header>
          <Main>
            <Steps />
            <Services />
            <News />
            <ExploreMore />
            <FrequentTraveler />
            <Testimonials />
          </Main>
          <Footer />
        </Page>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </MenuContextProvider>
  );
}

export default App;
