import { CachedClient, HttpClient } from 'notu';
import { useState, useEffect } from 'react';


function isServerSide(): boolean {
    let output = false;
    try {
        const wnd = window;
    } catch {
        output = true;
    }
    return output;
}


export function useNotuCache(
    notuClient: HttpClient,
    spaceId: number = 0,
    callback: ((cache: CachedClient) => void) = null
): CachedClient {
    const [cache, setCache] = useState<CachedClient>(null);

    useEffect(() => {
        async function loadCache() {
            const client = isServerSide() ? null : new CachedClient(notuClient);
            if (!!client) {
                await client.cacheAll(spaceId);
                setCache(client);
                if (!!callback)
                    callback(client);
            }
        }
        loadCache();
    }, []);

    return cache;
}