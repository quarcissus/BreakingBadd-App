import { useEffect, useState } from 'react';

const useFetchApi = (url, next, setNext) => {
  const [charact, setCharact] = useState({
    author: '',
    img: '',
    quote: '',
    loading: true,
    error: false,
  });
  useEffect(() => {
    setCharact({
      author: '',
      img: '',
      quote: '',
      loading: true,
      error: false,
    });
    fetch(url[1])
      .then((resp) => resp.json())
      .then((data) => {
        fetch(url[0] + data[0].author)
          .then((resp2) => resp2.json())
          .then((characInfo) => {
            if (characInfo.length > 0) {
              setCharact({
                author: data[0].author,
                img: characInfo[0].img,
                quote: data[0].quote,
                loading: false,
                error: false,
              });
            } else {
              setCharact({
                author: data[0].author,
                loading: false,
                error: true,
              });
            }
            setNext(false);
          });
      });
  }, [next]);

  return charact;
};

export default useFetchApi;
