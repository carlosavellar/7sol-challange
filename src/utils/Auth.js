export async function AuthServices(setAuth) {
  await function login(userName, password) {
    try {
      if (userName === 'sol@planatest.com' && password === '123456') {
        setAuth(true);
      }
    } catch (error) {
      return 'Not looged';
    }
  };
}
