<template>
  <div class="fact">
    <div class="fact-svg">
      <div
        v-if="wip"
        class="wip"
      >
        WIP
      </div>
      <img :src="`/images/facts/${emoji}.svg`">
    </div>
    <div class="flex flex-col fact-text">
      <div class="text-base font-bold lg:text-base xl:text-xl">
        {{ title }}
      </div>
      <div
        class="text-sm lg:text-md xl:text-base"
        v-html="description"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Fact',
  props: {
    emoji: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: undefined
    },
    wip: {
      type: Boolean,
      required: false
    }
  }
}
</script>
