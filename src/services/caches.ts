const getCache = (name = "") => {
  return localStorage.getItem(name)
}

const setCache = (name = "", value) => {
  localStorage.setItem(name, value)
}

const removeCache = (name = "") => {
  localStorage.removeItem(name)
}

export const setToken = (value = "") => {
  value ? setCache(process.env.REACT_APP_TOKEN_NAME, value) : Error("Token not found")
  return true
}

export const getToken = (): string | null => {
  return getCache(process.env.REACT_APP_TOKEN_NAME)
}

export const removeToken = (): void => {
  removeCache(process.env.REACT_APP_TOKEN_NAME)
}