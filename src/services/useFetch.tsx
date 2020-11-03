import { useEffect, useState } from 'react'

declare type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface Options {
  method: methodType
  headers: Headers | string[][]
  body?: string
}

const useFetch = (
  url: string,
  method: methodType = 'GET',
  body?: Record<string, unknown>
): [boolean, Record<string, unknown>] => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [output, setOutput] = useState<Record<string, unknown>>({})

  const headers = new Headers({
    'Content-Type': 'application/json',
  })

  const options: Options = {
    method,
    headers,
  }

  if (body) options.body = JSON.stringify(body)

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

export default useFetch
