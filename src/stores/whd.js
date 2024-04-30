import { defineStore } from 'pinia';

export const useStateMachineStore = defineStore('stateMachine', {
  state: () => ({
    currentState: 'SELECTING_REGION',
    disclaimerName: '',
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
    transitionToNextState(value) {
      switch (this.currentState) {
        case 'SELECTING_REGION':
          this.disclaimerName = value;
          this.currentState = 'SELECTING_GROUP';
          break;
        case 'SELECTING_GROUP':
          this.disclaimerName = this.disclaimerName + value;
          this.currentState = 'SELECTING_LENGTH';
          break;
        case 'SELECTING_LENGTH':
          this.disclaimerName = this.disclaimerName + value;
          this.disclaimer = this.disclaimers[this.disclaimerName]();
          this.currentState = 'COMPLETE';
          break;
        default:
          this.reset();
      }
    },
    reset() {
      this.currentState = 'SELECTING_REGION';
      this.disclaimer = {};
      this.disclaimerName = ''
    }
  },
});
