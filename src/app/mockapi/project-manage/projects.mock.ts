import { environment } from "../../../environments/environment"
import { RESTMockApi } from "./../rest-mock-api";
import { isArray } from "util";

class ProjectsApi extends RESTMockApi {

    onInit() {
        this.UrlApi = '/project-manage/projects/:id';
        this.datas = [{
            'name': "检测器",
            'version':"1.0",
            'operate_time':'2018-2-27 13:38:11',
            'description': "检测器相关描述"
        }, {
            'name': "检测器管理中心",
            'version':"1.0",
            'operate_time':'2018-2-27 13:38:11',
            'description': "检测器管理中心相关描述"
        }, {
            'name': "数据库系统",
            'version':"1.0",
            'operate_time':'2018-2-27 13:38:11',
            'description': "数据库系统相关描述"
        }, {
            'name': "自测系统",
            'version':"1.0",
            'operate_time':'2018-2-27 13:38:11',
            'description': "自测系统相关描述"
        }];
    }

}

export let projectsApi: ProjectsApi = Object.assign(new ProjectsApi(), { UrlPrefix: environment.mock_config.api_prefix });
