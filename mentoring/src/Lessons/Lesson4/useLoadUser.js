import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/todos/";

const useLoadUser = userId => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    let timeOutExec = 0;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      const timedOutSetLoading = setTimeout(() => setLoading(true), 100);
      try {
        // setLoading(true);

        // await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await (
          await fetch(`${url}${userId}`, { signal })
        ).json();

        if (!ignore) setData(response);
      } catch (err) {
        console.error("4to proishodit?");
      } finally {
        clearTimeout(timedOutSetLoading);
        setLoading(false);
      }
    };

    timeOutExec = setTimeout(fetchUser, 50);

    return () => {
      clearTimeout(timeOutExec);
      ignore = true;
      controller.abort();
    };
  }, [userId]);

  return { data, loading };
};

export default useLoadUser;
