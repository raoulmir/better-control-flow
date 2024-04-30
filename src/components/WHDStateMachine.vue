<template>
  <div>
    <section class="flex flex-col justify-center gap-4">
      <header>
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-3xl">WHD Disclaimer</span>
      </header>
      <div id="region-controls" class="flex gap-2">
        <button
            v-bind:disabled="stateMachine.currentState !== 'SELECTING_REGION'"
            @click="selectOption('EngAndWales')"
            :class="'bg-green-' + (stateMachine.disclaimerName.includes('EngAndWales') ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          England & Wales
        </button>
        <button
            v-bind:disabled="stateMachine.currentState !== 'SELECTING_REGION'"
            @click="selectOption('Scotland')"
            :class="'bg-green-' + (stateMachine.disclaimerName.includes('Scotland') ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Scotland
        </button>
      </div>

      <div v-if="stateMachine.currentState !== 'SELECTING_REGION'" class="flex gap-2">
        <button
            @click="selectOption('Core')"
            v-bind:disabled="stateMachine.currentState !== 'SELECTING_GROUP'"
            :class="'bg-green-' + (stateMachine.disclaimerName.includes('Core') ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Core Group
        </button>
        <button
            @click="selectOption('Broader')"
            v-bind:disabled="stateMachine.currentState !== 'SELECTING_GROUP'"
            :class="'bg-green-' + (stateMachine.disclaimerName.includes('Broader') ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Broader Group
        </button>
      </div>

      <div v-if="['SELECTING_LENGTH', 'COMPLETE'].includes(stateMachine.currentState)" class="flex gap-2">
        <button
            @click="selectOption('Long')"
            v-bind:disabled="stateMachine.currentState !== 'SELECTING_LENGTH'"
            :class="'bg-green-' + (stateMachine.disclaimerName.includes('Long') ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          More Information
        </button>
        <button
            @click="selectOption( 'Short')"
            v-bind:disabled="stateMachine.currentState !== 'SELECTING_LENGTH'"
            :class="'bg-green-' + (stateMachine.disclaimerName.includes('Short') ? '800' : '400') + ' p-2 text-black hover:bg-green-300 disabled:opacity-75'">
          Less Information
        </button>
      </div>

      <section v-if="stateMachine.disclaimer" class="flex flex-col gap-5">
        <article :class="`bg-${stateMachine.disclaimer.bgColor}-400 p-4`">
          <h1 class="">{{ stateMachine.disclaimer.title }}</h1>
          <p>{{ stateMachine.disclaimer.text }}</p>

          {{ stateMachine.currentState }}
        </article>
      </section>

      <section>
        <button
            v-bind:disabled="stateMachine.currentState === 'SELECTING_REGION'"
            @click="stateMachine.reset()"
            class="bg-blue-400 p-2 text-black hover:bg-blue-300 disabled:opacity-75"
        >Reset</button>
      </section>

    </section>

  </div>


</template>
<script setup>
import { useStateMachineStore } from '@/stores/whd';

const stateMachine = useStateMachineStore();

function selectOption(value) {
  stateMachine.transitionToNextState(value)
}

</script>

<style scoped>

</style>