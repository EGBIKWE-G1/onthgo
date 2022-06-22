import store from "./redux/store";
import axios from 'axios'
import { OnLogout } from "./redux/actions/auth";
// import { appGoesOffline } from "./store/modules/error";
// import { scrollToTop } from "./store/modules/notification";
// import { OnLogout } from "./store/module'\s/auth";


//DEVELOPMENT
// export const API_ROOT = "http://localhost:1224/api/v1";
// export const API_ROOT = "https://apis.woozeee.com/api/v1";
export const CLIENT_URL = "http://localhost:3001";
export const API_ROOT = "https://onthego-api-app.herokuapp.com";
// export const API_ROOT = "http://3.140.36.43:4000"
// export const API_ROOT = "http://3.140.36.43:4000";
console.log(API_ROOT, "api link");


const instance = axios.create({
    baseURL: API_ROOT,
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});


export const IMAGE_URL = API_ROOT + "/account/uploads/";

let token = null;
const responseBody = (res) => res.body;

const getAuthToken = () => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    const token = auth ? auth.authToken : null;
    return token;
};

export const tokenPlugin = (req) => {
    const { dispatch } = store();
    token = getAuthToken();

    req.set("Accept", "application/json");
    req.on("response", function (res) {
        if (res.status === 401) {
            dispatch(OnLogout());
        }

        if (res.status === (201 || 200)) {
            // scrollToTop();
        }
    });
    if (token) {
        const bearer = `Bearer ${token}`;
        req.set("Authorization", `Bearer ${token}`);
    }

    req.on("error", (error) => {
        if (error.status === undefined) {
            // dispatch(appGoesOffline());
            console.log("application is offline");

            return;
        }
    });
};

const requests = {
    delete: (url) =>
        instance.delete(`${API_ROOT}${url}`, { headers: { Authorization: getAuthToken() } }).then((responseBody) => {
            return responseBody;
        }),
    get: (url) =>
        instance.get(`${API_ROOT}${url}`, { headers: { Authorization: getAuthToken() } }).then((responseBody) => {
            return responseBody;
        }
        ),
    put: (url, body) =>
        instance
            .put(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .then(responseBody),
    post: (url, body) => {
        // console.log("Bearer", tokenPlugin());
        return instance.post(`${API_ROOT}${url}`, body, { headers: { Authorization: `Bearer ${getAuthToken()}` } }).then((responseBody) => {
            return responseBody;
        })
    }

    // .use(tokenPlugin)
    // .then(responseBody)
    ,
};

const Auth = {
    logError: (data) => requests.post("/v1/log/error", { data }),
    isAuth: () => {
        const token = getAuthToken();
        return !!token;
    },
    setToken: () => {
        const auth = JSON.parse(window.localStorage.getItem("auth"));
        token = auth.token;
    },
    saveAuthData: (_user) => {
        window.localStorage.setItem("auth", JSON.stringify(_user));
        token = _user.token;
    },
    saveFirstTime: () => {
        window.localStorage.setItem("ftime", true);
    },
    loggedInOnce: () => {
        return !!window.localStorage.getItem("ftime");
    },
    logout: () => {
        window.localStorage.removeItem("auth");
        token = null;
    },
    current: () => JSON.parse(window.localStorage.getItem("auth")),
    currentUserDetails: () => {
        const user = window.localStorage.getItem("userData");
        console.log(user, "Current User")
        return JSON.parse(user);
    },
    // isAdmin: () => {
    //     const user = Auth.current();
    //     return user?.accountType === ("Admin" || "Developer");
    // },
    login: (email, password) =>
        requests.post("/account/login", { email, password }),
    register: (data) => requests.post("/account/register", data),
    checkValidEmail: (email) =>
        requests.post(`/account/email/is-valid`, { email }),
    forgotPassword: (email) => requests.get(`/account/forgot-password/${email}`),
    userDetial: () => requests.get(`/user/current/`),
    resendEmail: (email) => requests.get(`/account/resend-verification/${email}`),
    updatePassword: (data) => requests.put(`/account/updatepassword`, data),
    resetPassword: (email, password, token) =>
        requests.post(`/account/reset-password`, { email, password, token }),
    sendResetToken: (email) =>
        requests.post(`/account/password/email`, { email }),
    verifyResetToken: (email, token) =>
        requests.post(`/account/password/verify-token`, { email, token }),
};

const FlightOffer = {
    save: (data) => requests.post("/flight/offers/", data),
    booking: (data) => requests.post("/flight/book/", data),
    load: (amount, months) => requests.get(`/loan/search?amount=${amount}&months=${months}`),
    // edit: (user) => requests.put("/user", user),
    // delete: (id) => requests.del(`/user/${id}`),
    // view: (id) => requests.get(`/user/${id}`),
};




export default {
    Auth,
    FlightOffer,


    setToken: (_token) => {
        token = _token;
    },
};
