import {
    DynamicSelectModel
} from "@ng-dynamic-forms/core";

export const IS_SELECT_FORM_MODEL = [
    new DynamicSelectModel<string>({

        id: "isSelect",
        placeholder: "是否全选",
        options: [
            {
                label: "全选只读",
                value: "r"
            },
            {
                label: "全选读写",
                value: "rw",
            },
            {
                label: "取消全选",
                value: "none"
            }
        ]
    })
];