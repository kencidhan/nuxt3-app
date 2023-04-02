<script setup>

let test = useTest()

function change() {
  store.data = 'ddde'
  test.value = 'bbb'
}

let {user, check} = useAuth()
check()

</script>

<template>
  <div>
    <p>useState: {{user.name}}</p>
    <p>store: {{store.data}}</p>
    <button @click="change">change</button>

  </div>
</template>