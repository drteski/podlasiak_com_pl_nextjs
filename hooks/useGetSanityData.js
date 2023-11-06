import { useEffect, useState } from "react";
import { client } from "@/lib/SanityClient";

const useGetSanityData = (query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async (query) => {
      setIsError(false);
      setIsLoading(true);
      await client
        .fetch(query)
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch((e) => {
          setError(e);
          setIsError(true);
        });
    };
    getData(query);
  }, [query]);
  return { data, isLoading, isError, error };
};

export default useGetSanityData;
