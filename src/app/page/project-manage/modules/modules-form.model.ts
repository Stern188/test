import {
    DynamicInputModel,
    DynamicSelectModel,
    DynamicTextAreaModel
} from "@ng-dynamic-forms/core";

export const MODULES_FORM_MODEL = [
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
    new DynamicSelectModel<string>({

        id: "versionSelect",
        placeholder: "选择项目版本号",
        options: [
            {
                label: "1.0",
                value: "1"
            },
            {
                label: "2.0",
                value: "2",
            },
            {
                label: "3.0",
                value: "3"
            },
            {
                label: "4.0",
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

        id: "parentmodule",
        placeholder: "父模块",
        validators: {
            required: null
        },
        errorMessages: {
            required: "必填项"
        }
    }),
    new DynamicInputModel({

        id: "submodule",
        placeholder: "子模块"
    }),
    new DynamicSelectModel<string>({

        id: "personSelect",
        placeholder: "选择责任人",
        options: [
            {
                label: "张三",
                value: "1"
            },
            {
                label: "李四",
                value: "2",
            },
            {
                label: "王五",
                value: "3"
            },
            {
                label: "马六",
                value: "4"
            }
        ],
        multiple: true,
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