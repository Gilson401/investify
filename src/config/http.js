import axios from 'axios'
// const res = await axios.get('https://httpbin.org/get?answer=42');

const http = axios.create({
   
    baseURL:   `https://localhost:3005/`
    
})

http.defaults.headers['Content-type'] = 'application/json'
http.defaults.headers["x-forwarded-proto"] = "http"

http.interceptors.response.use(
    response => response,
    error => {
 
        const { response: { status } } = error

        if (error.message === 'Network Error' && !error.message) {
            alert('você está sem internet...reconecte !!!!!')
        }

        switch (status) { 
            case 401:

                break;

            case 500:

                break;

            case 404:

                    break;
            default:
              
                break;
        }

        // axios.interceptors.response.eject(interceptors) // global
        return Promise.reject(error)
    }
)

export default http;
