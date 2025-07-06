import React from "react";
import { Outlet, useNavigation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

import "./style.scss";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="page-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="loader-box"
              initial={{ scale: 0.5, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className={isLoading ? "opacity-50 pointer-events-none" : ""}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
