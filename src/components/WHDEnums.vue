<template>
  <div>
    <section class="flex flex-col justify-center gap-4">
      <header>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-3xl">WHD Disclaimer</span>
      </header>
      <div id="region-controls" class="flex gap-2">
        <button
            @click="disclaimerRegion = 'EngAndWales'"
            :class="'bg-green-' + (disclaimerRegion === 'EngAndWales' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          England & Wales
        </button>
        <button
            @click="disclaimerRegion = 'Scotland'"
            :class="'bg-green-' + (disclaimerRegion === 'Scotland' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Scotland
        </button>
      </div>

      <div v-if="disclaimerRegion.length" class="flex gap-2">
        <button
            @click="disclaimerGroup = 'Core'"
            :class="'bg-green-' + (disclaimerGroup === 'Core' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Core Group
        </button>
        <button
            @click="disclaimerGroup = 'Broader'"
            :class="'bg-green-' + (disclaimerGroup === 'Broader' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Broader Group
        </button>
      </div>

      <div v-if="disclaimerRegion.length && disclaimerGroup.length" class="flex gap-2">
        <button
            @click="disclaimerLength = 'Long'"
            :class="'bg-green-' + (disclaimerLength === 'Long' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          More Information
        </button>
        <button
            @click="disclaimerLength = 'Short'"
            :class="'bg-green-' + (disclaimerLength === 'Short' ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Less Information
        </button>
      </div>

      <button class="p-2 bg-blue-400 text-black hover:bg-blue-300" @click="updateDisclaimer()">Get Disclaimer</button>

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

const state = {
  ScotlandCoreLong: 'ScotlandCoreLong',
  ScotlandCoreShort: 'ScotlandCoreShort',
  ScotlandBroaderLong: 'ScotlandBroaderLong',
  ScotlandBroaderShort: 'ScotlandBroaderShort',
  EngAndWalesCoreLong: 'EngAndWalesCoreLong',
  EngAndWalesCoreShort: 'EngAndWalesCoreShort',
  EngAndWalesBroaderLong: 'EngAndWalesBroaderLong',
  EngAndWalesBroaderShort: 'EngAndWalesBroaderShort'
}


function updateDisclaimer() {
  const disclaimerName = disclaimerRegion.value + disclaimerGroup.value + disclaimerLength.value;

  console.log(disclaimerName)
  Object.assign(disclaimerObject.value, selectDisclaimer(disclaimerName))
  disclaimerRegion.value = disclaimerGroup.value = disclaimerLength.value = ''
}

function selectDisclaimer(disclaimer) {
  switch (disclaimer) {
    case state.ScotlandCoreLong:
      return {
        title: 'Scotland Disclaimer Core',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
        bgColor: 'blue'
      }
      break;
    case state.ScotlandCoreShort:
      return {
        title: 'Scotland Disclaimer Core',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        bgColor: 'blue'
      }
      break;
    case state.ScotlandBroaderLong:
      return {
        title: 'Scotland Disclaimer Broader',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
        bgColor: 'blue'
      }
      break;
    case state.ScotlandBroaderShort:
      return {
        title: 'Scotland Disclaimer Broader',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        bgColor: 'blue'
      }
      break;
    case state.EngAndWalesCoreLong:
      return {
        title: 'England & Wales Disclaimer Core',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
        bgColor: 'red'
      }
      break;
    case state.EngAndWalesCoreShort:
      return {
        title: 'England & Wales Disclaimer Core',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        bgColor: 'red'
      }
      break;
    case state.EngAndWalesBroaderLong:
      return {
        title: 'England & Wales Disclaimer Broader',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni',
        bgColor: 'red'
      }
      break;
    case state.EngAndWalesBroaderShort:
      return {
        title: 'England & Wales Disclaimer Broader',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        bgColor: 'red'
      }
      break;
    default:
      return null
  }
}

</script>

<style scoped>

</style>