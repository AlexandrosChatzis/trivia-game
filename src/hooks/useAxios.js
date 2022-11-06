import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = ({ requests }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
        await axios.all(requests.map((request) => axios.get(request))).then(
            (res) => setResponse(res[0].data.results.concat(res[1].data.results,res[2].data.results)
          ))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();

  }, []);
  return { response, error, loading };
};

export default useAxios;
