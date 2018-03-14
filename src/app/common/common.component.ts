// import { CommonService } from '../common/common.service';
import { AppSettings } from "../app.settings";

export class CommonComponent {
    /* 表格初始化开始 */
    messages: object = {
        emptyMessage: '尚无数据可以显示',
        totalMessage: `条数据`
    };//label国际化
    pageSize: number = 10;//每页默认显示条数
    pageSizeOptions: number[] = [5, 10, 25, 100];//每页可设置的条数
    showFirstLastButtons: boolean = true;//是否显示首页、尾页button
    footerHeight: number = 56;//底部栏高度
    headerHeight: number = 50;//头部栏高度
    columnMode: string = 'force';//列布局
    rowHeight: number = 40;//列高度
    offset: number = 0;//页面偏移量
    getNumberOfPages($event) {
        this.offset = $event.pageIndex;
    }
    /* 表格初始化结束 */
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
                        filterflag = filterflag || (String(d[key]).indexOf(val) >= 0);
                    }
                }
                return filterflag;
            });
        }
        self.rows = temp;
    }
}
