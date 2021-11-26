import { createContext, useEffect, useState } from "react";

export const UnsplashContext = createContext();

export const UnsplashContextComponent = ({ children }) => {
  const [listPhotos, setListPhotos] = useState([]);

  useEffect(() => {
    try {
      async function getData(term) {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${term}&orientation=portrait&per_page=6&client_id=S3KxwI9Mb1m1CJs7hzu8wKjSxQAUbAtaWdtPb4yn11A&client_secret=2mxN5QESwh6WWwe0_D2r6QEbMkOY02crd-cZVe6iV08`
        );
        const data = await response.json();
        setListPhotos(data.results);
      }

      getData("home");
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <UnsplashContext.Provider value={{ listPhotos }}>
      {children}
    </UnsplashContext.Provider>
  );
};
