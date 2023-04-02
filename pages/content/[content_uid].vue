<template>
  <NuxtLayout>
      <div class="w-full max-w-2xl">
        <h3>{{ state.data.title }}</h3>
        <div>{{ state.data.date }}</div>
        <div class="divider"></div>
        <div>{{ state.data.content }}</div>
      </div>
  </NuxtLayout>
</template>

<script setup>
import {onMounted, reactive} from 'vue';

const state = reactive({ data: {} })

/* 앱 마운트 훅 */
onMounted(() => {
  loadContent();
});

// 게시글 내용 로딩
async function loadContent() {
  const response = await fetch(useAppConfig().apiServer + '/content/' + useRoute().params.content_uid)
  const res = await response.json()
  if(res.status = 'success') {
    state.data = res.data
  } else {
    alert(res.msg)
  }
}

</script>