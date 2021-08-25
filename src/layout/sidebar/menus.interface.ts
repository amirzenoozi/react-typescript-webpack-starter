import { RouteName } from 'src/pages/dashboard/dashborad.routes';

export interface IMenuItem {
  label: string;
  icon: any;
  path: RouteName;
  submenus?: ISubmenuItem[];
}

interface ISubmenuItem {
  label: string;
  path: string;
}
