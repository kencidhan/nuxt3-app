import axios from 'axios';
axios.defaults.withCredentials = true;

export default function() {
    const appConfig = useAppConfig();

    const user = getUser();
    const hasLogin = useHasLogin()

    // 인증체크
    const check = () => {
        axios.get(appConfig.apiServer + '/loginCheck')
            .then(({ data }) => {
                if (data.status == 'success') {
                    user.value = data.user
                    hasLogin.value = true
                } else {
                    hasLogin.value = false
                }
                return hasLogin.value
            })
            .catch(function ({ response }) {

            });
    }

    // 로그인
    const login = async ({ email, password, errorCallback }) => {
        await axios.get(appConfig.sanctumTokenURL);

        return axios.post(appConfig.apiServer + '/login', {
            email: email,
            password: password
        })
        .then(({ data }) => {
            if(data.status == 'success') {
                hasLogin.value = true;
                user.value = data.user
            }
            return data
        })
    }

    // 로그아웃
    const logout = () => {
        axios.get(appConfig.apiServer + '/logout')
            .then(() => {
                hasLogin.value = false;
        })
        .catch(function ({ response }) {
            alert(response.data.message);
        });
    }

    return { check, login, logout, user, hasLogin }
}
