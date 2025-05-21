import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set('access_token', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveToStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
		Cookies.remove('access_token')
	Cookies.remove('refreshToken')
}