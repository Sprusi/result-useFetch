import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(uri) {
  const [params, setParams] = useState({});
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!uri) return;
    setError(undefined);
    setIsLoading(true);
    axios
      .get(uri, params)
      .then(({ data }) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [uri, params]);

  const refetch = (p) => setParams(p);

  return { data, isLoading, error, refetch };
}
