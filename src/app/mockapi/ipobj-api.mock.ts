/**
 * Created by conan on 2017/8/23.
 */
import {environment} from "../../environments/environment"
import {RESTMockApi} from "./rest-mock-api";
import {isArray} from "util";

class IPobjApi extends RESTMockApi{

  onInit(){
    this.UrlApi='/object/ipobj/:id';
    this.datas=[
      {
        refered: 0,
        child_value: 0,
        type_value: 1,
        name: "del_1",
        family: 2,
        ip: "123.0.0.1",
        shared: true,
        id: 15990
      }, {
        refered: 0,
        child_value: 0,
        type_value: 1,
        name: "del_2",
        family: 2,
        ip: "123.0.0.1,123.0.0.2",
        shared: false,
        id: 15991
      }, {
        refered: 0,
        child_value: 0,
        type_value: 3,
        name: "del_3",
        family: 2,
        ip: "123.0.0.1-123.0.0.123",
        shared: false,
        id: 15992
      }, {
        refered: 0,
        child_value: 0,
        type_value: 2,
        name: "50",
        family: 2,
        format: 1,
        ip: "172.19.11.0",
        mask: "255.255.255.0",
        shared: false,
        id: 15988
      }, {
        refered: 0,
        mac: "11:11:11:11:11:11",
        type_value: 4,
        name: "del_4",
        shared: false,
        id: 15993
      }

    ];
  }

}

export let ipobjApi:IPobjApi= Object.assign(new IPobjApi(), {UrlPrefix:environment.mock_config.api_prefix} );
