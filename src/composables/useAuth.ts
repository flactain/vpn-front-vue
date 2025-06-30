export const useAuth = () => {
  const login = () => {
    window.location.href = import.meta.env.VITE_APP_API_URL + '/auth/login'
  }

  return {login}
}
