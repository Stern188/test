import { environment } from "../../environments/environment"
import { RESTMockApi } from "./rest-mock-api";
import { isArray } from "util";

class IndexApi extends RESTMockApi {

    onInit() {
        this.UrlApi = '/index/:id';
        this.datas = [{
            'username': "豆莎莎",
            'projectName': "taw-esd"
        }];
    }

}

export let indexApi: IndexApi = Object.assign(new IndexApi(), { UrlPrefix: environment.mock_config.api_prefix });
