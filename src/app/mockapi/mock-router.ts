/**
 *
 * Created by conan on 2017/7/28.
 */
import { BaseMockApi } from "./mock-api";
import { authApi } from "./auth-api.mock";
import { dashboardApi } from "./dashboard-api.mock";
import { statisticsApi } from "./statistics-api.mock";
import { ipobjApi } from "./ipobj-api.mock";
import { rolesApi } from "./user-manage/role-manage.mock";
import { rolesPriApi } from "./user-manage/role-privilege.mock";
import { indexApi } from "./index.mock";
import { projectsApi } from "./project-manage/projects.mock";
import { versionsApi } from "./project-manage/versions.mock";
import { modulesApi } from "./project-manage/modules.mock";


interface MockRouters {
  timeout: number;
  routers: BaseMockApi[];
}


//reg mock API here
export const mockRouters: MockRouters = {
  'timeout': 200,
  'routers': [
    authApi,
    dashboardApi,
    statisticsApi,
    ipobjApi,
    rolesApi,
    rolesPriApi,
    indexApi,
    projectsApi,
    versionsApi,
    modulesApi
  ]
};
