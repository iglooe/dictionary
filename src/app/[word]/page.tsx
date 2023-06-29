"use client";
// import { FC } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// interface pageProps {}

// const page: FC<pageProps> = ({}) => {
//   // const router = useRouter();
//   // const { term } = router.query;
//   return <div>You searched for the term: {term}</div>;
// };

// export default page;

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Word() {
  const { word } = useParams(); // get the word from the URL
  const [data, setData] = useState(null); // state for storing the response data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GET request to the dictionary API
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setData(response.data); // set the data state with the response data
        setLoading(false); // set the loading state to false
      } catch (err) {
        setError(error); // set the error state with the error object
        setLoading(false); // set the loading state to false
      }
    }
    fetchData();
  }, [word]); // run the effect whenever the word changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data) {
    return (
      <div>
        <h1>You searched: {word}</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div>No results found</div> // shouldn't happen
    );
  }
}
