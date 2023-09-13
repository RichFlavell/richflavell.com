export default <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => fn(...args), waitFor)
  }

  return debounced as (...args: Parameters<T>) => ReturnType<T>
}
