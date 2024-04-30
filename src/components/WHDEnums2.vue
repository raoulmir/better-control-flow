<template>
  <div>
    <section class="flex flex-col justify-center gap-4">
      <header>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-3xl">WHD Disclaimer</span>
      </header>
      <div id="region-controls" class="flex gap-2">
        <button
            @click="selectOption('EngAndWales')"
            :class="'bg-green-' + (disclaimerRegion === 'EngAndWales' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          England & Wales
        </button>
        <button
            @click="selectOption('Scotland')"
            :class="'bg-green-' + (disclaimerRegion === 'Scotland' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Scotland
        </button>
      </div>

      <div v-if="currentState !== state.SELECTING_REGION" class="flex gap-2">
        <button
            @click="selectOption('Core')"
            :class="'bg-green-' + (disclaimerGroup === 'Core' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Core Group
        </button>
        <button
            @click="selectOption('Broader')"
            :class="'bg-green-' + (disclaimerGroup === 'Broader' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Broader Group
        </button>
      </div>

      <div v-if="currentState === state.SELECTING_LENGTH" class="flex gap-2">
        <button
            @click="selectOption('Long')"
            :class="'bg-green-' + (disclaimerLength === 'Long' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          More Information
        </button>
        <button
            @click="selectOption( 'Short')"
            :class="'bg-green-' + (disclaimerLength === 'Short' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Less Information
        </button>
      </div>

      <section class="flex flex-col gap-5">
        <article :class="`bg-${disclaimerObject.bgColor}-400 p-4`">
          <h1 class="">{{ disclaimerObject.title }}</h1>
          <p>{{ disclaimerObject.text }}</p>
        </article>
      </section>

    </section>

  </div>


</template>
<script setup>

import { ref } from "vue";

let disclaimerRegion = ref(''),
    disclaimerGroup = ref(''),
    disclaimerLength = ref('');

let disclaimerObject = ref({
  text: '',
  bgColor: ''
});

let currentState = 'selectingRegion';

const state = {
  SELECTING_REGION: 'selectingRegion',
  SELECTING_GROUP: 'selectingGroup',
  SELECTING_LENGTH: 'selectingLength'
}

const disclaimerState = {
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

function selectOption(value) {
  switch (currentState) {
    case state.SELECTING_REGION:
      disclaimerRegion.value = value;
      currentState = 'selectingGroup';
      break;
    case state.SELECTING_GROUP:
      disclaimerGroup.value = value;
      currentState = 'selectingLength';
      break;
    case state.SELECTING_LENGTH:
      disclaimerLength.value = value;
      currentState = 'selectingRegion'
      break;
    default:
      disclaimerRegion.value = disclaimerGroup.value = disclaimerLength.value = null;
      currentState = 'selectingRegion'
  }

  const disclaimerName = disclaimerRegion.value + disclaimerGroup.value + disclaimerLength.value;

  if (disclaimerRegion.value && disclaimerGroup.value && disclaimerLength.value) {
    updateDisclaimer(disclaimerName);
  }
}
function updateDisclaimer(disclaimerName) {
  Object.assign(disclaimerObject.value, disclaimerState[disclaimerName]())
}

</script>

<style scoped>

</style>