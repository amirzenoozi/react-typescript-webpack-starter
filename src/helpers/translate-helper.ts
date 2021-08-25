import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import Backend from 'i18next-chained-backend';
import { initReactI18next } from 'react-i18next';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { environment } from '../../environments/environment';
import { localStore } from './storage-helper';

i18next
    .use(Backend)
    .use(initReactI18next)
    .init(
        {
          backend: {
            backends: [ LocalStorageBackend, XHR ],
            backendOptions: [
              {
                prefix: 'dashboard_',
                expirationTime: 0, // 7 * 24 * 60 * 60 * 1000,
                store: window.localStorage,
                versions: {
                  en: '1.1.1',
                  fa: '1.1.1',
                },
              },
              {
                loadPath: '/locales/{{lng}}/{{ns}}.json',
              },
            ],
          },
          lng: localStore.get('lng') || environment.initialLang.lng,
          react: { useSuspense: true },
          fallbackLng: [ 'fa', 'en' ],
          ns: ['common'],
          defaultNS: 'common',
          debug: !environment.production,
        },
        (err, t) => {
          if (err) return console.warn('something went wrong loading', err);
        }
    );

export default i18next;
