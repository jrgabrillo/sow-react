import Base from './Base';

const endpoint = 'http://172.20.10.3'

export default class Auth extends Base {
    login = async (email, password) => {
        let def_message = { ok: false, full_name: "", key: "" };
        let response = await this.request({
            path: `${endpoint}/api/login`,
            method: 'POST',
            data: { email, password }
        });

        let { status, token, user } = response.data

        if (status == "success") 
            def_message = { ok: true, user, token };

        return def_message;
    }

    getUser = async () => {
        let response = await this.request({
            path: `${endpoint}/api/user`,
            method: 'POST',
        });
        return response.data.message;
    }

    // will calculate the difference in days between 2 timestamp
    getDateDifference = () => {
        let timein = +sessionStorage.getItem('timein'); // get the saved timestamp during login 
        let now = Date.now(); // get the current timestamp
        let diffInDays = (now - timein) / (1000 * 3600 * 24); // 1000 is miliseconds in 1 minutes; 3600 is number of minues per hour; 24 is the number of hours per day

        return diffInDays;
    }

    checkAuth = () => {
        let checkKey = document.cookie.match("(^|;)\\s*key\\s*=\\s*([^;]+)")

        // check if there is an api in the cookie
        if (!this.isEmpty(checkKey))
            window.location.assign("/dashboard");
    }

    checkSession = () => {
        let checkKey = document.cookie.match("(^|;)\\s*key\\s*=\\s*([^;]+)")

        // check if there is an api in the cookie
        if (isEmpty(checkKey))
            window.location.assign("/");
    }

    logout = () => {
        document.cookie = `key=; max-age=60;path=/`;
        this.checkSession();
    }
}