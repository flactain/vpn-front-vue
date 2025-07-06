export const useStorage = () => {
  const clearToken = () => {
    localStorage.removeItem('idToken')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userInfo')
    console.log("clear localStorage");
  }

  const getToken = () => {
    const storedIdToken = localStorage.getItem('idToken')
    const storedAccessToken = localStorage.getItem('accessToken')
    const storedUserInfo = localStorage.getItem('userInfo')
    if (
      storedIdToken &&
      storedIdToken !== 'undefined' &&
      storedAccessToken &&
      storedAccessToken !== 'undefined' &&
      storedUserInfo &&
      storedUserInfo !== 'undefined'
    ) {
      console.log("there are stored infomation");
      return {storedIdToken, storedAccessToken, storedUserInfo}
    }else{
      console.log("there are NOT stored information")
      return {storedIdToken: null, storedAccessToken:null, storedUserInfo:null}
    }
  }

  const setToken = (decodedIdToken, accessToken, userInfo) =>{
    if(decodedIdToken && accessToken && userInfo)
      localStorage.setItem('idToken', JSON.stringify(decodedIdToken))
      localStorage.setItem('accessToken', accessToken.value)
      localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
  }
  return { clearToken, getToken, setToken}
}
