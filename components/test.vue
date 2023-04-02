<script setup>
let test = useTest()

</script>

<template>
  <div>
    <p>{{'useState: ' + test}}</p>
    <p>{{'Store: ' + store.data}}</p>
  </div>
</template>