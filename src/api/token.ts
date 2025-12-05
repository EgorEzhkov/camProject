let accessToken: string | null = null;

const tokenHandler = {
  get() {
    return accessToken;
  },

  set(token: string) {
    accessToken = token;
  },

  clear() {
    accessToken = null;
  },
};

export default tokenHandler;
