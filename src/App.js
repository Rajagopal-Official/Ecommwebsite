import { useEffect } from "react";
import { ThemeProvider } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/Footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/UI";
import SearchBox from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/routes/Home'
import Categories from './components/routes/Categories'
import ProductsPage from './components/routes/ProductsPage'
import ContactUs from './components/routes/ContactUs'
import AboutUs from "./components/drawer/mobiledrawercomponents/AboutUs";

function App() {
  useEffect(() => {
    document.title = "Aesthetic Ecart";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Router>
          <UIProvider>
            <Appbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <Promotions />
                    <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
                      <Typography variant="h4">Our Collections</Typography>
                    </Box>
                    <Products />
                  </>
                }
              />
              <Route path="/home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path='/about_us' element={<AboutUs />}/>
              <Route path="/contact-us" element={<ContactUs />} />

            </Routes>
            <Footer />
            <AppDrawer />
            <SearchBox />
          </UIProvider>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;