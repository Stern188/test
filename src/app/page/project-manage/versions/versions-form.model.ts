import {
    DynamicInputModel,
    DynamicSelectModel,
    DynamicTextAreaModel
} from "@ng-dynamic-forms/core";

export const VERSION_FORM_MODEL = [
    new DynamicSelectModel<string>({

        id: "projectSelect",
        placeholder: "选择项目",
        options: [
            {
                label: "检测器",
                value: "1"
            },
            {
                label: "检测器管理中心",
                value: "2",
            },
            {
                label: "数据库系统",
                value: "3"
            },
            {
                label: "自测系统",
                value: "4"
            }
        ],
        validators: {
            required: null
        },
        errorMessages: {
            required: "必填项"
        }
    }),
    new DynamicInputModel({

        id: "name",
        placeholder: "版本名称",
        validators: {
            required: null
        },
        errorMessages: {
            required: "必填项"
        }
    }),
    new DynamicTextAreaModel({

        id: "description",
        rows: 3,
        placeholder: "描述"
    }),
];