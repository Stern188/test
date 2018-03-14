import { environment } from "../../../environments/environment"
import { RESTMockApi } from "./../rest-mock-api";
import { isArray } from "util";

class RolesApi extends RESTMockApi {

    onInit() {
        this.UrlApi = '/user-manage/role-manage/:id';
        this.datas = [{
            'name': "超级管理员",
            'description': "管理员权限"
        }, {
            'name': "只读管理员",
            'description': "管理员权限"
        }, {
            'name': "系统管理员",
            'description': "管理员权限"
        }, {
            'name': "普通管理员",
            'description': "管理员权限"
        }, {
            'name': "无权限管理员",
            'description': "管理员权限"
        }];
    }

}

export let rolesApi: RolesApi = Object.assign(new RolesApi(), { UrlPrefix: environment.mock_config.api_prefix });
