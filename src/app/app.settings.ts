/**
 * Created by conan on 6/30/2017.
 */
export interface IEnvVars {
  ENV: string;
  API_URL: string;
  AUTH_CONFIG: {
    clientID: string;
    domain: string;
    responseType: string;
    apiUrl: string;
    redirectUri: string;
  }
}

export const DefaultAppSetting = {
  ENV: '',
  API_URL: "http://192.168.18.89:4233/api/v1",
  // API_URL: "http://127.0.0.1/api/v1",
  AUTH_CONFIG: {
    clientID: 'test',
    domain: '127.0.0.1',
    responseType: 'json',
    apiUrl: 'http://192.168.18.89:4233/auth/token-auth',
    // apiUrl: 'http://127.0.0.1/api/v1/login',
    redirectUri: 'http://192.168.18.89:4233/auth/token-refresh'
  }
}
export class AppSettings {
  public static env_vars: IEnvVars;
}
