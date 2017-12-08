import { IDashboardItem } from "./dashboard-item";
/**
 * Created by conan on 2017/7/26.
 */

export interface IDashboardScene {
  name: string;
  id: string;
  dashboard: IDashboardItem[];
};
