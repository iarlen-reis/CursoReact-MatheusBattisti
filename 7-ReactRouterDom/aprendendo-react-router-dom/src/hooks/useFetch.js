import { useEffect, useState } from "react";

// Custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatorando o post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // Loading

  const [loading, setLoading] = useState(false);

  // Tratando erros

  const [error, setError] = useState(null);

  // Pegando if

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "content-Type": "application/json",
        },
      });

      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    // loading

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const json = await response.json();

        setData(json);
      } catch (error) {
        setError("Houve algum error ao carregar o dados.");
      }
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // Refatorando post:

  useEffect(() => {
    let json;
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const response = await fetch(...fetchOptions);

        json = response.json();

        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const response = await fetch(deleteUrl, config);

        json = await response.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error };
};
