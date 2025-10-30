import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

import { API_BASE_URL } from '@shared/config'

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: `${API_BASE_URL}/api/`,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response?.status === 401) {
      throw new Error('Please login to continue.')
    }

    return Promise.reject(error)
  }
)

interface ApiRequest extends AxiosRequestConfig {
  errorMessage: string
}

/**
 * Generic function to handle API requests
 * @param config - Axios request configuration
 * @param errorMessage - Default error message in case of failure
 */
const axios = async <T>(config: ApiRequest): Promise<T> => {
  try {
    const response = await axiosInstance(config)

    return response.data
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data?.message
        : error instanceof Error
          ? error.message
          : 'An unknown error occurred'
    throw new Error(message || config.errorMessage)
  }
}

export default axios
