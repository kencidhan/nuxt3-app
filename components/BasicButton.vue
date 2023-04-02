<template>
  <NuxtLink :to="href" class="btn btn-outline">{{ text }}</NuxtLink>
</template>

<script>
export default {
  props: ['text', 'href'],

  data() {
    return {}
  }
}
</script>