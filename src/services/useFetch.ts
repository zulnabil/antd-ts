import { useEffect, useState } from 'react'
import { getToken } from './caches'

declare type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface Options {
  method: methodType
  headers: Headers | string[][]
  body?: string
}

export const useFetchGet = (
  url: string,
  method: methodType = 'GET',
): [boolean, Record<string, unknown>] => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [output, setOutput] = useState<Record<string, unknown>>({})

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  })

  const options: Options = {
    method,
    headers,
  }

  const fetchData = async () => {
    try {
      const res = await fetch(url, options)
      const data = await res.json()
      setOutput(data)
      setIsLoading(false)
    } catch (err) {
      setOutput({ error: err.message })
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [url])

  return [isLoading, output]
}

export const useFetchPost = async (
  url: string,
  method: methodType = "POST",
  body: Record<string, unknown>
): Promise<Record<string, unknown>> => {


  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  })

  const options: Options = {
    method,
    headers,
    body: JSON.stringify(body)
  }

  try {
    const res = await fetch(url, options)
    const data = await res.json()
    return data
  } catch (err) {
    return { error: err.message }
  }
}

