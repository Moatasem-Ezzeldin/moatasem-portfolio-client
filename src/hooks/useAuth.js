
export const useAuth = () => {
  const user =  null;

  return {
    user,
    role: user?.role ?? "guest",
    isAuth: false,
    isInitialLoading: false,
    isLoading: false,
    isFetching: false,
    isError: null,
  };
};