---
title: apiClient
description: Technical reference for src/apiClient.js
---

<a name="module_apiClient"></a>

## apiClient
APIClient Utility
Handles resilient fetching from the NextDNS API, including authentication, retries, and rate limiting.
Implements exponential backoff for network errors and server-side rate limits.


* [apiClient](#module_apiClient)
    * _static_
        * [.apiClient](#module_apiClient.apiClient)
    * _inner_
        * [~APIClient](#module_apiClient..APIClient)
            * [new APIClient([baseURL])](#new_module_apiClient..APIClient_new)
            * [.setStorage(storage)](#module_apiClient..APIClient+setStorage)
            * [.getHeaders()](#module_apiClient..APIClient+getHeaders) ⇒ <code>Promise.&lt;Object&gt;</code>
            * [.fetchWithRetry(endpoint, [options], [retries], [backoffMs])](#module_apiClient..APIClient+fetchWithRetry) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="module_apiClient.apiClient"></a>

### apiClient.apiClient
Single instance of the APIClient exported for project-wide use.

**Kind**: static constant of [<code>apiClient</code>](#module_apiClient)  
<a name="module_apiClient..APIClient"></a>

### apiClient~APIClient
**Kind**: inner class of [<code>apiClient</code>](#module_apiClient)  

* [~APIClient](#module_apiClient..APIClient)
    * [new APIClient([baseURL])](#new_module_apiClient..APIClient_new)
    * [.setStorage(storage)](#module_apiClient..APIClient+setStorage)
    * [.getHeaders()](#module_apiClient..APIClient+getHeaders) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.fetchWithRetry(endpoint, [options], [retries], [backoffMs])](#module_apiClient..APIClient+fetchWithRetry) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_module_apiClient..APIClient_new"></a>

#### new APIClient([baseURL])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [baseURL] | <code>string</code> | <code>&quot;\&quot;https://api.nextdns.io\&quot;&quot;</code> | The base URL for the NextDNS API. |

<a name="module_apiClient..APIClient+setStorage"></a>

#### apiClient.setStorage(storage)
Injects a StorageManager instance to avoid circular imports.
Used for retrieving the API key required for requests.

**Kind**: instance method of [<code>APIClient</code>](#module_apiClient..APIClient)  

| Param | Type | Description |
| --- | --- | --- |
| storage | <code>StorageManager</code> | An instance of the StorageManager. |

<a name="module_apiClient..APIClient+getHeaders"></a>

#### apiClient.getHeaders() ⇒ <code>Promise.&lt;Object&gt;</code>
Generates request headers, including the 'X-Api-Key' fetched from storage.

**Kind**: instance method of [<code>APIClient</code>](#module_apiClient..APIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - An object containing the required headers.  
<a name="module_apiClient..APIClient+fetchWithRetry"></a>

#### apiClient.fetchWithRetry(endpoint, [options], [retries], [backoffMs]) ⇒ <code>Promise.&lt;Object&gt;</code>
Performs a fetch request with automatic retry logic and exponential backoff.
Handles 429 (Rate Limited) and 50x (Server Error) status codes specifically.

**Kind**: instance method of [<code>APIClient</code>](#module_apiClient..APIClient)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A result object containing success status and optional response or error.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| endpoint | <code>string</code> |  | The API endpoint (relative or absolute) to fetch. |
| [options] | <code>Object</code> | <code>{}</code> | Standard fetch options. |
| [retries] | <code>number</code> | <code>3</code> | Maximum number of retry attempts. |
| [backoffMs] | <code>number</code> | <code>1000</code> | Initial delay in milliseconds for backoff. |

