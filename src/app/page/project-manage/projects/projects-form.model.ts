import {
    DynamicInputModel,
    DynamicTextAreaModel
} from "@ng-dynamic-forms/core";

export const PROJECT_FORM_MODEL = [
    new DynamicInputModel({

        id: "name",
        placeholder: "项目名称",
        validators: {
            required: null
        },
        errorMessages: {
            required: "必填项"
        }
    }),
    new DynamicInputModel({

        id: "version",
        placeholder: "版本号",
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