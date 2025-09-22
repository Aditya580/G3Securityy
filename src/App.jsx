import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Components/Header/Header";
import Connect from "./Components/Connect/Connect";
import Services from "./Components/Services/Services";

// Service detail pages
import RetailSecurity from "./Components/Services/RetailSecurity";
// import ManpowerServices from "./Components/Services/Details/ManpowerServices";
// import TechnicalManpower from "./Components/Services/Details/TechnicalManpower";
// import Housekeeping from "./Components/Services/Details/Housekeeping";
// import CorporateSecurity from "./Components/Services/Details/CorporateSecurity";
// import LoadingUnloading from "./Components/Services/Details/LoadingUnloading";
// import ConstructionSecurity from "./Components/Services/Details/ConstructionSecurity";

function App() {
  return (
    <Router>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <h1 className="text-3xl font-bold text-center mt-10">
                  Home Page
                </h1>
              </PageWrapper>
            }
          />

          {/* Connect Page */}
          <Route
            path="/connect"
            element={
              <PageWrapper>
                <Connect />
              </PageWrapper>
            }
          />

          {/* Services Grid */}
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />

          {/* Service Details */}
          <Route
            path="/services/retail-security"
            element={
              <PageWrapper>
                <RetailSecurity />
              </PageWrapper>
            }
          />
          <Route
            path="/services/manpower-services"
            element={
              <PageWrapper>
                <ManpowerServices />
              </PageWrapper>
            }
          />
          <Route
            path="/services/technical-manpower"
            element={
              <PageWrapper>
                <TechnicalManpower />
              </PageWrapper>
            }
          />
          <Route
            path="/services/housekeeping"
            element={
              <PageWrapper>
                <Housekeeping />
              </PageWrapper>
            }
          />
          <Route
            path="/services/corporate-security"
            element={
              <PageWrapper>
                <CorporateSecurity />
              </PageWrapper>
            }
          />
          <Route
            path="/services/loading-unloading"
            element={
              <PageWrapper>
                <LoadingUnloading />
              </PageWrapper>
            }
          />
          <Route
            path="/services/construction-security"
            element={
              <PageWrapper>
                <ConstructionSecurity />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

// Wrapper for smooth page transitions
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-20"
    >
      {children}
    </motion.div>
  );
}

export default App;
