const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function backendFetch(endpoint, options = {}) {
    return fetch(`${BACKEND_URL}/${endpoint}`, options);
}