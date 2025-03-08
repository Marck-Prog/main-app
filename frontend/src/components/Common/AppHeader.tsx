import React, { useEffect } from "react";

// Default metadata
const defaultDesc =
  "Haru Fashion e-commerce developed with React.js. Coded with 🖤 by Sat Naing (satnaing.dev).";
const defaultKeywords = "Haru Fashion, Online Shop, E-commerce";

const AppHeader = ({
  title = "Juan Graphico | Fashion - Shirt - Online Shop",
  desc = defaultDesc,
  keywords = defaultKeywords,
}) => {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", desc);
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", keywords);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", desc);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", desc);
  }, [title, desc, keywords]);

  return null;
};

export default AppHeader;
