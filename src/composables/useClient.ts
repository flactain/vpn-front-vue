import axios from 'axios'

export const useClient = () => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL_VPN
  })

  return {client}
}
