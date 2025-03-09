import OverlayContainer from "./OverlayContainer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const GenderCollectionSection = () => {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    setTranslations({
      new_arrivals: "Threads Collection",
      women_collection: "Women Collection",
      men_collection: "Men Collection",
    });
  }, []);

  return (
    <main className="app-max-width -mt-20 px">
      <section className="w-full h-auto py-10">
        <div className="px-4 max-sm:px-0 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="w-full sm:col-span-2 lg:col-span-2">
            <OverlayContainer
              imgSrc="/bg-img/banner_minipage1.jpg"
              imgSrc2="/bg-img/banner_minipage1-tablet.jpg"
              imgAlt="Threads Collection"
            >
              <Link
                to="/collections/all?category=Top Wear"
                className="absolute bottom-7.5 sm:right-11 max-sm:bottom-9 z-20 bg-white text-black px-6 py-2 mr-4.5 hover:bg-gray500 hover:text-white duration-300"
              >
                {translations.new_arrivals}
              </Link>
            </OverlayContainer>
          </div>
          <div className="w-full">
            <OverlayContainer
              imgSrc="/bg-img/banner_minipage2.jpg"
              imgAlt="Women Collection"
            >
              <Link
                to="/collections/all?gender=Women"
                className="absolute bottom-7.5 z-20 bg-white text-black px-6 py-2 hover:bg-gray500 hover:text-white duration-300 max-sm:bottom-9"
              >
                {translations.women_collection}
              </Link>
            </OverlayContainer>
          </div>
          <div className="w-full">
            <OverlayContainer
              imgSrc="/bg-img/banner_minipage3.jpg"
              imgAlt="Men Collection"
            >
              <Link
                to="/collections/all?gender=Men"
                className="absolute bottom-7.5 z-20 bg-white text-black px-6 py-2 hover:bg-gray500 hover:text-white duration-300 max-sm:bottom-9"
              >
                {translations.men_collection}
              </Link>
            </OverlayContainer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GenderCollectionSection;
