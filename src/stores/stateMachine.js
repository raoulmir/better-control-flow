import { defineStore } from 'pinia';

export const useStateMachineStore = defineStore('stateMachine', {
  state: () => ({
    currentState: 'SELECTING_REGION',
    disclaimerName: {
      region: null,
      group: null,
      length: null
    },
    disclaimer: {},
    disclaimers: {
      ScotlandCoreLong() {
        return {
          title: 'Scotland Disclaimer Core',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
          bgColor: 'blue'
        }
      },
      ScotlandCoreShort() {
        return Object.assign(
            this.ScotlandCoreLong(),
            {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        )
      }
      ,
      ScotlandBroaderLong() {
        return {
          title: 'Scotland Disclaimer Broader',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
          bgColor: 'blue'
        }
      },
      ScotlandBroaderShort() {
        return Object.assign(
            this.ScotlandBroaderLong(),
            {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        )
      },
      EngAndWalesCoreLong() {
        return {
          title: 'England & Wales Disclaimer Core',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
          bgColor: 'red'
        }
      },
      EngAndWalesCoreShort() {
        return Object.assign(
            this.EngAndWalesCoreLong(),
            {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        )
      },
      EngAndWalesBroaderLong() {
        return {
          title: 'England & Wales Disclaimer Broader',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
          bgColor: 'red'
        }
      },
      EngAndWalesBroaderShort() {
        return Object.assign(
            this.EngAndWalesBroaderLong(),
            {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        )
      }
    }
  }),
  actions: {
    transitionToNextState(event, value) {
      this.disclaimer = '';
      switch (this.currentState) {
        case 'SELECTING_REGION':
          if (event === 'SELECTED_REGION') {
            this.currentState = 'SELECTING_GROUP';
            this.disclaimerName.region = value;
          }

          break;
        case 'SELECTING_GROUP':
          if (event === 'SELECTED_GROUP') {
            this.currentState = 'SELECTING_LENGTH';
            this.disclaimerName.group = value;
          }

          if (event === 'SELECTED_REGION') {
            this.currentState = 'SELECTING_REGION';
            this.disclaimerName.group = null;
            this.transitionToNextState('SELECTED_REGION', value)
          }

          break;
        case 'SELECTING_LENGTH':
          if (event === 'SELECTED_LENGTH') {
            this.disclaimerName.length = value;
            this.disclaimer = this.disclaimers[Object.values(this.disclaimerName).join('')]();
          }

          if (event === 'SELECTED_GROUP') {
            this.currentState = 'SELECTING_LENGTH';
            this.disclaimerName.length = null;
            this.disclaimerName.group = value;
          }

          if (event === 'SELECTED_REGION') {
            this.currentState = 'SELECTING_REGION';
            this.disclaimerName.length = null;
            this.disclaimerName.group = null;
            this.transitionToNextState('SELECTED_REGION', value)
          }

          break;
        default:
          this.reset();
      }
    },
    reset() {
      this.currentState = 'SELECTING_REGION';
      this.disclaimer = {};
      this.disclaimerName = {
        region: null,
        group: null,
        length: null
      }
    }
  },
});
