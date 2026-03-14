export default class Base {
    async request({ path, method = "GET", data = null, headers = {} }) {

        const config = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        };

        if (method !== "GET" && data) 
            config.body = JSON.stringify(data);

        try {
            const response = await fetch(path, config);

            let responseData;

            try {
                responseData = await response.json();
            } 
            catch {
                responseData = await response.text();
            }

            return {
                ok: response.ok,
                data: responseData,
                status: response.status,
                statusMessage: this.getStatusMessage(response.status)
            };

        } 
        catch (err) {

            if (err.message?.includes("Network request failed")) {
                return {
                    ok: false,
                    network_error: true,
                    statusMessage: "Failed to establish connection"
                };
            }

            return {
                ok: false,
                error: err.message
            };
        }
    }

    getStatusMessage(status) {
        return Base.STATUS_MESSAGES[status] || `Something went wrong: ${status}`;
    }

    isEmpty(data) {
        return (
            data === null ||
            data === undefined ||
            data === "" ||
            (Array.isArray(data) && data.length === 0)
        );
    }
}

/* Static HTTP status dictionary (faster than switch) */
Base.STATUS_MESSAGES = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    204: "No Content",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    304: "Not Modified",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    408: "Request Timeout",
    409: "Conflict",
    413: "Payload Too Large",
    415: "Unsupported Media Type",
    422: "Unprocessable Entity",
    429: "Too Many Requests",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout"
};