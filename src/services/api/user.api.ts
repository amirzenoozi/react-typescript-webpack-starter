import { Observable } from 'rxjs';
import api from 'src/helpers/api';

const userLogin = ( formFields: any ): Observable<any> => {
  return api.post<any>({
    url: 'api/token/',
    body: formFields,
    shouldAuth: false,
  }) as Observable<any>;
};

const getProfile = (): Observable<any> => {
  return api.get<any>({
    url: 'api/v1/user/profile/',
    shouldAuth: true,
  }) as Observable<any>;
};

export {
  userLogin,
  getProfile,
};
