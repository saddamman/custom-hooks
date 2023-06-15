import React, { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setEroor] = useState(false);
  const [isLoading, setLoading] = useState("false");

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      setLoading(true);
      setEroor(null);

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Some thing went wrong!!");
      }
      const data = await response.json();
      applyData(data);

      setLoading(false);
    } catch (error) {
      setEroor(error);
    }
    setLoading(false);
  }, []);

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
