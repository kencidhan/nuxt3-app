<template>
  <button :class="resClass">{{ text }}</button>
</template>

<script>
export default {
  props: ['text', 'class'],

  data() {
    return {
      oriClass: 'btn btn-secondary', 
      resClass: ''
    }
  },

  created() {
    this.resClass = this.oriClass + ' ' + this.class
  }
}
</script>