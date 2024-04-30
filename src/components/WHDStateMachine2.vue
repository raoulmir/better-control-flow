<template>
  <div>
    <section class="flex flex-col justify-center gap-4">
      <header>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-3xl">WHD Disclaimer</span>
      </header>
      <div id="region-controls" class="flex gap-2">
        <button
            @click="transitionToNextState('SELECTED_REGION','EngAndWales')"
            :class="'bg-green-' + (disclaimerName.region === 'EngAndWales' ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          England & Wales
        </button>
        <button
            @click="transitionToNextState('SELECTED_REGION', 'Scotland')"
            :class="'bg-green-' + (disclaimerName.region === 'Scotland' ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Scotland
        </button>
      </div>

      <div v-if="currentState !== 'SELECTING_REGION'" class="flex gap-2">
        <button
            @click="transitionToNextState('SELECTED_GROUP', 'Core')"
            :class="'bg-green-' + (disclaimerName.group === 'Core' ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Core Group
        </button>
        <button
            @click="transitionToNextState('SELECTED_GROUP', 'Broader')"
            :class="'bg-green-' + (disclaimerName.group === 'Broader' ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Broader Group
        </button>
      </div>

      <div v-if="['SELECTING_LENGTH', 'COMPLETE'].includes(currentState)" class="flex gap-2">
        <button
            @click="transitionToNextState('SELECTED_LENGTH', 'Long')"
            :class="'bg-green-' + (disclaimerName.length === 'Long' ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          More Information
        </button>
        <button
            @click="transitionToNextState('SELECTED_LENGTH', 'Short')"
            :class="'bg-green-' + (disclaimerName.length === 'Short' ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Less Information
        </button>
      </div>

      <section v-if="disclaimer" class="flex flex-col gap-5">
        <article :class="`bg-${disclaimer.bgColor}-400 p-4`">
          <h1 class="">{{ disclaimer.title }}</h1>
          <p>{{ disclaimer.text }}</p>

          {{ currentState }}
        </article>
      </section>

      <section>
        <button
            v-bind:disabled="currentState === 'SELECTING_REGION'"
            @click="reset()"
            class="bg-blue-400 p-2 text-black hover:bg-blue-300 disabled:opacity-75"
        >Reset</button>
      </section>

    </section>

  </div>


</template>
<script setup>
import { useStateMachineStore } from '@/stores/stateMachine';
import {storeToRefs} from "pinia";

const { transitionToNextState, reset } = useStateMachineStore();
const stateMachine = useStateMachineStore();

const { currentState, disclaimer, disclaimerName } = storeToRefs(stateMachine);

</script>

<style scoped>

</style>