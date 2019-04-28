export const LOADER_SET = 'loader/SET'
export const TOAST_SET = 'toast/SET'
export const INTERNET_CONN_SET = 'internet/SET'


// action creators

export const loaderSet = state => ({
    type: LOADER_SET,
    state
});

export const toastSet = text => ({
    type: TOAST_SET,
    text
});

export const internetConnSet = state => ({
    type: INTERNET_CONN_SET,
    state
});

