
export const getUser = () => useState<object>('userData', () => { return {} })
export const useTest = () => useState<boolean>('test', () => true)

export const useHasLogin = () => useState<boolean|null>('hasLogin', () => null)
export const authUser = () => useState<object>('authUser', () => {return {}})
