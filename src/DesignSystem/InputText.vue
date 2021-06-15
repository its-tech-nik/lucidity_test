<template>
  <div style="flex: 1; position: relative; ">
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
  created() {
    this.uuid = this.$uuid.v4();
  }
}
</script>

<style>
input[type="text"]:focus {
  border: 3px solid #9C72F0!important;
}
</style>
