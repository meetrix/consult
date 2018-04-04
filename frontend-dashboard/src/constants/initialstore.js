import { Branding } from '../../config';

const STORE_INITIATE_VALUE = {
  AUTH_INITIATE:
    {
    	user: {
    		email: undefined,
    		role: undefined,
    		phone_number: undefined,
    		relatedUsers: [],
    		selectSlot: {
    			isTimeSlotSelect: undefined,
    			timeSlot: undefined,
    		},
    		nextEvent: undefined,

    	},
    },
  EVENT_INITIALE: {
    events: [],
    consultees: { firstName: 'User' },
  },
  SPINNER_INITIATE: {
    value: false,

  },
  CUSTOMIZE_INITIATE: {
    footer: Branding.footer,
  },


};

export default STORE_INITIATE_VALUE;
