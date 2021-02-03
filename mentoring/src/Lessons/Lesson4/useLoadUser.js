import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/todos/";

const useLoadUser = userId => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    let timeOutExec = 0;
    const timedOutSetLoading = setTimeout(() => setLoading(true), 2000);

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      try {
        // setLoading(true);

        await new Promise(resolve => setTimeout(resolve, 1000));
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

    timeOutExec = setTimeout(fetchUser, 500);

    return () => {
      clearTimeout(timeOutExec);
      clearTimeout(timedOutSetLoading);
      ignore = true;
      controller.abort();
    };
  }, [userId]);

  return { data, loading };
};

export default useLoadUser;
