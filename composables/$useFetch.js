export default (url, options) => {
    const xsrfToken = useCookie('XSRF-TOKEN')
    const newOptions = {
        headers: {'X-XSRF-TOKEN': xsrfToken.value},
        credentials: 'include',
        ...options,
    }
    return useFetch(url, newOptions)
}