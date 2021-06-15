<template>
  <div style="flex: 1; display: flex; flex-direction: column;" :style="[ dynamicStyles ]">
    <div v-if="error" style="margin-bottom: 8px; color: #E0004D;">
      <FontAwesomeIcon
        icon="exclamation-triangle"
      />
      <span style="line-height: 21px; font-size: 14px;">
        {{ error }}
      </span>
    </div>
    <div style="flex: 1; position: relative; display: flex; flex-direction: column; justify-content: flex-end;">
      <label :for="`input-${this.uuid}`" style="margin-bottom: 4px;">{{ label }}</label>
      <input
        :id="`input-${this.uuid}`" 
        :value="value"
        @input="$emit('input', $event.target.value)"
        :disabled="disabled"
        type="text"
        style="margin-top: 4px; width: 100%; padding: 8px 16px; border: 1px solid #B2A6C9; border-radius: 4px; font-family: 'Source Sans Pro', sans-serif; font-size: 16px; line-height: 24px; font-weight: 400;"
      >
      <FontAwesomeIcon
        v-if="help"
        icon="question-circle"
        style="position: absolute; top: 0px; right: 0px; color: #D9D2E7;"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "Validation error.",
    },
    help: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      uuid: null,
    };
  },
  computed: {
    dynamicStyles() {
      return this.error ? {
        paddingLeft: '16px',
        borderLeft: '6px solid red',
      } : {};
    },
  },
  created() {
    this.uuid = this.$uuid.v4();
  }
}
</script>

<style>
input[type="text"]:focus {
  border: 3px solid #9C72F0!important;
}
input:disabled {
  background-color: #F2EFF8;
}
</style>
