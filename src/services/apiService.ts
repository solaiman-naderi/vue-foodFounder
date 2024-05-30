import axios, { type AxiosInstance } from 'axios'

class ApiService {
  private apiClient: AxiosInstance

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://themealdb.com/api/json/v1/1/',
      timeout: 2000,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  public async getData(url: string) {
    try {
      const response = await this.apiClient.get(url)
      return response.data
    } catch (error: any) {
      throw new Error(error.response ? error.response.data : 'Network Error')
    }
  }
  public async postData(url: string, data: any) {
    try {
      const response = await this.apiClient.post(url, data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response ? error.response.data : 'Network Error')
    }
  }
}

export default new ApiService()
