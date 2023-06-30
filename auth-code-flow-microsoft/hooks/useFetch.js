import { useState, useEffect } from "react";

export const useFetch = (url, accessToken) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url, accessToken]);

  return { response, error, isLoading };
};

export const useFetchImage = (url, accessToken) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        })
        .then(validateResponse)
        .then(res => res.blob())
        .then(blob => URL.createObjectURL(blob));

        console.log("image:",res);

        setResponse(res);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url, accessToken]);

  return { response, error, isLoading };
};