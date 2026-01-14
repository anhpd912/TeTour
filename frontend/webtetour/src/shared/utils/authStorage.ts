const isBrowser = () => typeof window !== 'undefined';

const getStoragePair = (): [Storage, Storage] | null => {
  if (!isBrowser()) {
    return null;
  }

  return [window.localStorage, window.sessionStorage];
};

const getPreferredStorage = (): Storage | null => {
  if (!isBrowser()) {
    return null;
  }

  if (window.localStorage.getItem('refreshToken')) {
    return window.localStorage;
  }

  if (window.sessionStorage.getItem('refreshToken')) {
    return window.sessionStorage;
  }

  if (window.localStorage.getItem('authToken')) {
    return window.localStorage;
  }

  if (window.sessionStorage.getItem('authToken')) {
    return window.sessionStorage;
  }

  return window.localStorage;
};

export const authStorage = {
  setTokens: (token: string, refreshToken?: string, rememberMe = true): void => {
    const storagePair = getStoragePair();
    if (!storagePair) {
      return;
    }

    const [local, session] = storagePair;
    const target = rememberMe ? local : session;
    const fallback = rememberMe ? session : local;

    target.setItem('authToken', token);
    if (refreshToken) {
      target.setItem('refreshToken', refreshToken);
    } else {
      target.removeItem('refreshToken');
    }

    fallback.removeItem('authToken');
    fallback.removeItem('refreshToken');
  },

  persistAccessToken: (token: string, refreshToken?: string): void => {
    const preferred = getPreferredStorage();
    if (!preferred) {
      return;
    }

    preferred.setItem('authToken', token);
    if (refreshToken) {
      preferred.setItem('refreshToken', refreshToken);
    }
  },

  getAccessToken: (): string | null => {
    if (!isBrowser()) {
      return null;
    }

    return window.localStorage.getItem('authToken') ?? window.sessionStorage.getItem('authToken');
  },

  getRefreshToken: (): string | null => {
    if (!isBrowser()) {
      return null;
    }

    return window.localStorage.getItem('refreshToken') ?? window.sessionStorage.getItem('refreshToken');
  },

  clearTokens: (): void => {
    if (!isBrowser()) {
      return;
    }

    window.localStorage.removeItem('authToken');
    window.localStorage.removeItem('refreshToken');
    window.sessionStorage.removeItem('authToken');
    window.sessionStorage.removeItem('refreshToken');
  },
};
