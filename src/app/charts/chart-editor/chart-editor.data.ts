/**
 * Created by conan on 2017/8/7.
 */

export const CHART_EDITOR_CFG={

  basic:{
    common:{
      form_config:[
        {
          "id": "chart_height",
          "label": "图高度",
          "name": "chart_height",
          "value": 200,
          "type": "SLIDER",
          "max": 1024,
          "min": 0,
          "step": 1
        },
        {
          "id": "chart_type",
          "label": "图形样式",
          "name": "chart_type",
          "required": true,
          "value": "line",
          "options": [
            {
              "label": "线状图",
              "value": "line"
            },
            {
              "label": "柱状图",
              "value": "bar"
            }
          ],
          "type": "RADIO_GROUP"
        },
        {
          id:"line_smoth",
          label:"线状图为平滑曲线",
          type:"SWITCH",
          relation: [{
              action: "DISABLE",
              when: [
                {
                  id: "chart_type",
                  value:"bar"
                }
              ]
          }]
        },
        {
          "id": "chart_spot_size",
          "label": "图标记点大小",
          "name": "chart_spot_size",
          "value": 1,
          "type": "SLIDER",
          "max": 200,
          "min": 0,
          "step": 1
        }

      ]
    },
    advance:{
    },
    series:[
    ]
  },
  title:{
    label:{

    },
    style:{

    }
  },
  view:{
    position:{

    },
    appearance:{
    }
  },
  x:{
    common:{

    },
    axis:{

    },
    label:{

    },
    scale:{

    },
    separator:{

    },
    spacer:{

    }
  },
  y:{
    common:{

    },
    axis:{

    },
    label:{

    },
    scale:{

    },
    separator:{

    },
    spacer:{

    }
  },
  legend:{
    common:{

    }
  },
  tips:{
    common:{

    },

    series:[]
  },
  tools:{
    common:{

    }
  }
};


export const CHART_EDITOR_SERIE_TEMPLATE={
  basic:{},
  tips:{}
}
