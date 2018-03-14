import { environment } from "../../../environments/environment"
import { RESTMockApi } from "./../rest-mock-api";
import { isArray } from "util";

class RolesPriApi extends RESTMockApi {

    onInit() {
        this.UrlApi = '/user-manage/role-privilege/:id';
        this.datas = [{
            "module_id": "role_manage", "module_name": "角色管理"
        }, {
            "module_id": "members", "module_name": "用户管理"
        }, {
            "module_id": "projects", "module_name": "项目管理"
        }, {
            "module_id": "versions", "module_name": "版本管理"
        }, {
            "module_id": "5", "module_name": "密码设置"
        }, {
            "module_id": "134", "module_name": "登录日志"
        }, {
            "module_id": "140", "module_name": "操作日志"
        }];
    }

}

export let rolesPriApi: RolesPriApi = Object.assign(new RolesPriApi(), { UrlPrefix: environment.mock_config.api_prefix });
