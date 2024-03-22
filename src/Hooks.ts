import { CachedClient, HttpClient } from 'notu';
import { useState, useEffect } from 'react';


export function useNotuCache(
    notuClient: HttpClient,
    spaceId: number = 0,
    callback: ((cache: CachedClient) => void) = null
): CachedClient {
    if (!notuClient)
        throw new Error('Cannot pass in a null reference for notuClient');

    const [cache, setCache] = useState<CachedClient>(null);

    useEffect(() => {
        async function loadCache() {
            const client = new CachedClient(notuClient);
            await client.cacheAll(spaceId);
            setCache(client);
            if (!!callback)
                callback(client);
        }
        loadCache();
    }, []);

    return cache;
}