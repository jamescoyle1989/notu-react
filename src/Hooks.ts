import { Notu, NotuCache, NotuHttpCacheFetcher, NotuHttpClient } from 'notu';
import { useState, useEffect } from 'react';


export function useNotu(
    apiUrl: string,
    token: string,
    callback: ((notu: Notu) => void) = null
): Notu {

    const [notu, setNotu] = useState<Notu>(null);

    useEffect(() => {
        async function loadCache() {
            const client = new NotuHttpClient(apiUrl);
            client.token = token;
            const output = new Notu(client, new NotuCache(new NotuHttpCacheFetcher(apiUrl, token)));
            await output.cache.populate();
            setNotu(output);
            if (!!callback)
                callback(output);
        }
        loadCache();
    }, []);

    return notu;
}


export function useManualRefresh(): () => void {
    const [refreshTrigger, setRefreshTrigger] = useState(false);

    const triggerFunc = () => {
        setRefreshTrigger(!refreshTrigger);
    }

    return triggerFunc;
}