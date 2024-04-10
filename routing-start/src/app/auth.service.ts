export class AuthService {
  loggerIn = false;

  isAuthenticated() {
    const promise = new Promise<boolean>(
      (resolve, reject) => {
        setTimeout(() => {resolve(this.loggerIn);}, 1000);
      });
    return promise;
  }

  login() {
    this.loggerIn = true;
  }

  logout() {
    this.loggerIn = false;
  }
}
