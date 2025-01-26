
const devUrl = 'http://localhost:4000/';
const prodUrl = 'https://hackathone-backend-repo.vercel.app/';

export const BASE_URL = prodUrl

export const AppRoutes = {
    signup: BASE_URL + "auth/signup",
    login: BASE_URL + "auth/login",
    logout: BASE_URL + "auth/logout",
    update: BASE_URL + "user/updateUser",
    applyLoan: BASE_URL + "loan/apply"
}


export const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dd2alel5h/image/upload';
export const CLOUDINARY_CLOUD_NAME = 'dd2alel5h';
export const CLOUDINARY_UPLOAD_PRESET = 'Saylani';