<template>
  <div>
    <section class="flex flex-col justify-center gap-4">
      <header>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-3xl">WHD Disclaimer</span>
      </header>
      <div id="region-controls" class="flex gap-2">
        <button
            @click="isInEngAndWales = isInEngAndWales ? false : true"
            :class="'bg-green-' + (isInEngAndWales ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          England & Wales
        </button>
        <button
            @click="isInScotland = isInScotland ? false : true"
            :class="'bg-green-' + (isInScotland ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Scotland
        </button>
      </div>

      <div v-if="isInEngAndWales || isInScotland" class="flex gap-2">
        <button
            @click="isCore = isCore ? false : true"
            :class="'bg-green-' + (isCore ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Core Group
        </button>
        <button
            @click="isBroader = isBroader ? false : true"
            :class="'bg-green-' + (isBroader ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          Broader Group
        </button>
      </div>

      <div v-if="(isInEngAndWales || isInScotland) && (isCore || isBroader)" class="flex gap-2">
        <button
            @click="wantsMoreInfo = wantsMoreInfo ? false : true"
            :class="'bg-green-' + (wantsMoreInfo ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
          More Information
        </button>
        <button
            @click="wantsLessInfo = wantsLessInfo ? false : true"
            :class="'bg-green-' + (wantsLessInfo ? '800' : '400') + ' p-2 text-black hover:bg-green-300'">
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

import {ref, watch} from "vue";

const isInScotland = ref(false);
const isInEngAndWales = ref(false);
const isCore = ref(false);
const isBroader = ref(false);
const wantsMoreInfo = ref(false);
const wantsLessInfo = ref(false);

let disclaimerObject = ref({
  text: '',
  bgColor: ''
});



function updateDisclaimer() {
  if (isInScotland.value) {

    if (isCore.value) {

      const text = wantsLessInfo.value ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' :
          wantsMoreInfo.value ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni' :
              'No disclaimer'
      Object.assign(disclaimerObject.value, {
        title: 'Scotland Disclaimer Core',
        text: text,
        bgColor: 'blue'
      });

    } else if (isBroader.value) {

      const text = wantsLessInfo.value ? 'Lorem ipsum dolor sit amet.' :
          wantsMoreInfo.value ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni' :
              'No disclaimer'

      Object.assign(disclaimerObject.value, {
        title: 'Scotland Disclaimer Broader',
        text: text,
        bgColor: 'blue'
      });

    } else {

      console.error('Something went wrong 😵‍💫')

    }

  } else if (isInEngAndWales.value) {

    if (isCore.value) {

      const text = wantsLessInfo.value ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' :
          wantsMoreInfo.value ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni' :
              'No disclaimer'
      Object.assign(disclaimerObject.value, {
        title: 'England & Wales Disclaimer Core',
        text: text,
        bgColor: 'red'
      });

    } else if (isBroader.value) {

      const text = wantsLessInfo.value ? 'Lorem ipsum dolor sit amet.' :
          wantsMoreInfo.value ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi, deleniti dicta, ea, harum iste magni' :
              'No disclaimer'

      Object.assign(disclaimerObject.value, {
        title: 'England & Wales Disclaimer Broader',
        text: text,
        bgColor: 'red'
      });

    } else {

      console.error('Something went wrong 😵‍💫')

    }

  }

  isInScotland.value = false;
  isInEngAndWales.value = false;
  isCore.value = false;
  isBroader.value = false;
  wantsMoreInfo.value = false;
  wantsLessInfo.value = false;

}

</script>

<style scoped>

</style>