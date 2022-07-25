const ErrorCode = {
    common: {},
    auth: {
        E_INVALID_AUTHORIZATION_HEADER: "E_INVALID_AUTHORIZATION_HEADER",
        E_TOKEN_INVALID: "E_TOKEN_INVALID",
        E_TOKEN_EXPIRED: "E_TOKEN_EXPIRED",
        E_USER_NOT_FOUND: "E_USER_NOT_FOUND",
        E_REFRESH_TOKEN_INVALID: "E_REFRESH_TOKEN_INVALID",
    },
};

export default ErrorCode;
