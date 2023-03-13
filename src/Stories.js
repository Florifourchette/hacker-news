import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import LoadingPage from "./LoadingPage";
import PostsList from "./PostsList";

const Stories = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setpage] = useState(1);

  const URL = "https://hn.algolia.com/api/v1/search_by_date";

  const fetchingURL = () =>
    fetch(`${URL}?query=${query}`)
      .then((response) => {
        // setIsLoading(true);
        console.log(isLoading);
        return response.json();
      })
      .then(({ hits }) => {
        setIsLoading(false);
        console.log(isLoading);
        return setPosts(hits);
      })
      .catch((e) => {
        alert(
          "data has not been fetch, please contact the owner of the website"
        );
        console.log(e);
      });

  useEffect(() => {
    setIsLoading(true);
    fetchingURL();
    // setIsLoading(false);
  }, [query]);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <PostsList
          query={query}
          setQuery={setQuery}
          posts={posts}
          setPosts={setPosts}
        />
      )}
    </>
  );
};

export default Stories;
