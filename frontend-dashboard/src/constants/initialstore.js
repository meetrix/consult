import {Branding} from "../../config";

export const STORE_INITIATE_VALUE={
  AUTH_INITIATE:
    {
      user: {
        email:undefined,
        role:undefined,
        phone_number:undefined,
        relatedUsers:[],
        selectSlot:{
          isTimeSlotSelect:undefined,
          timeSlot:undefined
        },
        nextEvent:undefined

      }
    },
  EVENT_INITIALE:{
    events:[]

  },
  SPINNER_INITIATE: {
    value:false

  },
  CONFIG_INITIATE: {
    footer:Branding.footer,
  }




}

