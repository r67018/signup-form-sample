<template>
  <div class="control">
    <input
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ['update:modelValue']
}
</script>
