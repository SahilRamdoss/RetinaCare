import { backendFetch } from "./client";

export async function login(credentials) {
    const response = await backendFetch("login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })

    if (!response.ok){
        throw new Error("Could not authenticate user");
    }

    return response.json()
}