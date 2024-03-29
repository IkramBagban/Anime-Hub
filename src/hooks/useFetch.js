import axios from "axios";
import { useEffect, useState } from "react";
// const API = "http://192.168.10.35:3000";
const API = "https://ml-database.vercel.app";

const useFetch = (endpoint) => {
  const [dataState, setDataState] = useState({
    data: null,
    isLoading: true,
    isError: false,
    error: null,
  });

  useEffect(() => {
    console.log("USING VERceL DATA")
    const fetchData = async () => {
      try {
        const response = await axios.get(API + endpoint);
        if (response.status === 200) {
          setDataState({
            data: response,
            isLoading: false,
            isError: false,
            error: null,
          });
        } else {
          setDataState({
            data: response,
            isLoading: false,
            isError: true,
            error: "Something went wrong",
          });
        }
      } catch (error) {
        console.log(error);
        setDataState({
          data: null,
          isLoading: false,
          isError: true,
          error: error,
        });
      }
    };

    fetchData();
  }, [endpoint]);

  return dataState;
};

export default useFetch;
