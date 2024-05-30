import { ref, type Ref } from 'vue'
import apiService from '@/services/apiService'

interface UseFetchItems {
  items: Ref
  loading: Ref<boolean>
  error: Ref<string | null>
  refresh: (url: string) => Promise<void>
}

export function useFetchApi(url: string): UseFetchItems {
  const items = ref([])
  const loading = ref<boolean>(true)
  const error = ref<string | null>(null)

  const fetchData = async (url: string) => {
    loading.value = true
    error.value = null
    try {
      const response = await apiService.getData(url)
      console.log(response.meals)

      if (response && response.meals) {
        items.value = response.meals
      } else {
        items.value = []
      }
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  fetchData(url)

  return {
    items,
    loading,
    error,
    refresh: fetchData
  }
}
