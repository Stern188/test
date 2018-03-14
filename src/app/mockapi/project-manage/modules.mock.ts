import { environment } from "../../../environments/environment"
import { RESTMockApi } from "./../rest-mock-api";
import { isArray } from "util";

class ModulesApi extends RESTMockApi {

    onInit() {
        this.UrlApi = '/project-manage/modules/:id';
        this.datas = [{
            'name': "检测器",
            'version': "1.0",
            'parent_module': "用户管理",
            'submodule': "角色管理",
            'person': "张三",
            'operate_time': '2018-2-27 13:38:11',
            'description': "检测器相关描述"
        }, {
            'name': "检测器管理中心",
            'version': "1.0",
            'parent_module': "项目管理",
            'submodule': "版本管理",
            'person': "李四",
            'operate_time': '2018-2-27 13:38:11',
            'description': "检测器管理中心相关描述"
        }, {
            'name': "数据库系统",
            'version': "1.0",
            'parent_module': "日志管理",
            'submodule': "操作日志",
            'person': "王五",
            'operate_time': '2018-2-27 13:38:11',
            'description': "数据库系统相关描述"
        }, {
            'name': "自测系统",
            'version': "1.0",
            'parent_module': "首页",
            'submodule': "",
            'person': "马六",
            'operate_time': '2018-2-27 13:38:11',
            'description': "自测系统相关描述"
        }, {
            'name': "检测器管理中心",
            'version': "1.0",
            'parent_module': "项目管理",
            'submodule': "版本管理",
            'person': "李四",
            'operate_time': '2018-2-27 13:38:11',
            'description': "检测器管理中心相关描述"
        }, {
            'name': "数据库系统",
            'version': "1.0",
            'parent_module': "日志管理",
            'submodule': "操作日志",
            'person': "王五",
            'operate_time': '2018-2-27 13:38:11',
            'description': "数据库系统相关描述"
        }, {
            'name': "自测系统",
            'version': "1.0",
            'parent_module': "首页",
            'submodule': "",
            'person': "马六",
            'operate_time': '2018-2-27 13:38:11',
            'description': "自测系统相关描述"
        }, {
            'name': "检测器管理中心",
            'version': "1.0",
            'parent_module': "项目管理",
            'submodule': "版本管理",
            'person': "李四",
            'operate_time': '2018-2-27 13:38:11',
            'description': "检测器管理中心相关描述"
        }, {
            'name': "数据库系统",
            'version': "1.0",
            'parent_module': "日志管理",
            'submodule': "操作日志",
            'person': "王五",
            'operate_time': '2018-2-27 13:38:11',
            'description': "数据库系统相关描述"
        }, {
            'name': "自测系统",
            'version': "1.0",
            'parent_module': "首页",
            'submodule': "",
            'person': "马六",
            'operate_time': '2018-2-27 13:38:11',
            'description': "自测系统相关描述"
        }, {
            'name': "检测器管理中心",
            'version': "1.0",
            'parent_module': "项目管理",
            'submodule': "版本管理",
            'person': "李四",
            'operate_time': '2018-2-27 13:38:11',
            'description': "检测器管理中心相关描述"
        }, {
            'name': "数据库系统",
            'version': "1.0",
            'parent_module': "日志管理",
            'submodule': "操作日志",
            'person': "王五",
            'operate_time': '2018-2-27 13:38:11',
            'description': "数据库系统相关描述"
        }, {
            'name': "自测系统",
            'version': "1.0",
            'parent_module': "首页",
            'submodule': "",
            'person': "马六",
            'operate_time': '2018-2-27 13:38:11',
            'description': "自测系统相关描述"
        }];
    }

}

export let modulesApi: ModulesApi = Object.assign(new ModulesApi(), { UrlPrefix: environment.mock_config.api_prefix });
