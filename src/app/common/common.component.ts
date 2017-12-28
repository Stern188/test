// import { CommonService } from '../common/common.service';
import { AppSettings } from "../app.settings";

export class CommonComponent {
    constructor(/* private commonService: CommonService */) { }
    getSvTime(callback) {
        callback('2017-12-14 18:16:34');
        /* this.commonService
            .get(`${AppSettings.env_vars.API_URL}/systemuptime`)
            .subscribe(res => {
                let projectArr = [];
                res.forEach(function (project) {
                    projectArr.push({
                        id: project.id,
                        text: project.name
                    });
                });
            }); */
    }
    updateFilter(event, temp, self) {
        const val = event.target.value.toLowerCase();
        if (val !== '') {
            temp = temp.filter(function (d) {
                let filterflag;
                for (let key in d) {
                    if (key != 'nofilter' && $.inArray(key, d.nofilter) == -1) {
                        filterflag = filterflag || String(d[key]) == val;
                    }
                }
                return filterflag;
            });
        }
        self.rows = temp;
    }
}
