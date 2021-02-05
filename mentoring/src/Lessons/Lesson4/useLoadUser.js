import useLoading from "./useLoading";

const url = "https://jsonplaceholder.typicode.com/todos/";

const useLoadUser = userId => useLoading([`${url}${userId}`]);

export default useLoadUser;
