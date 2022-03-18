import fetch from "node-fetch";

export default async function fetchMinecraftAPI(username: string) {
    try {
        const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
        if (!response.ok) throw new Error("Unable to fetch data https://api.mojang.com/users/profiles/minecraft/${username}");
        const data = await response.json();
        return data;
    } catch(err) {console.error(err)};
}