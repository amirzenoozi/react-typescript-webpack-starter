/**
 * @param  {string} name
 */
interface IStorage {
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
  clear: (name: string) => void;
}

/**
 * @param  {string} name
 */

class MyLocalStorage implements IStorage {

  get = (name: string) => {
    return localStorage.getItem(name);
  };
  set = (name: string, value: string) => {
    localStorage.setItem(name, value);
  };
  clear = (name: string) => {
    localStorage.setItem(name, '');
  };

}

const localStore: IStorage = new MyLocalStorage();

export { localStore };
