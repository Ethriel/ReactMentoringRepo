import { useState, useEffect } from "react";

const useLoadingWrap = (
  fetchConfig,
  {
    debounceRequest = 200,
    debounceLoading = 100,
    needCancel = true,
    fetchApi = fetch,
  } = {}
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    let timeOutExec = 0;
    let timedOutSetLoading = 0;

    const controller = needCancel ? new AbortController() : {};
    const { signal } = controller;

    const fetchUser = async () => {
      try {
        timedOutSetLoading = setTimeout(
          () => setLoading(true),
          debounceLoading
        );

        const response = await (
          await fetchApi(fetchConfig[0], { ...(fetchConfig[1] ?? {}), signal })
        ).json();

        if (!ignore) setData(response);
      } catch (err) {
        if (!err.name === "AbortError") {
          console.error("4to proishodit?");
        }
      } finally {
        clearTimeout(timedOutSetLoading);
        setLoading(false);
      }
    };

    timeOutExec = setTimeout(fetchUser, debounceRequest);

    return () => {
      clearTimeout(timeOutExec);
      clearTimeout(timedOutSetLoading);
      ignore = true;
      controller?.abort?.();
    };
  }, [fetchConfig[0]]);

  return { data, loading };
};

export default useLoadingWrap;
