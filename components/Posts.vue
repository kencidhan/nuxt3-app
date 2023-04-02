<template>
  <div class="flex flex-col w-full border-opacity-50">
    <div v-for="row in props.data">

      <div class="grid h-20 card bg-base-100 rounded-box place-items-center">
        <NuxtLink :to="'/content/' + row.id">{{ row.title }}</NuxtLink>
        <span>{{ row.date }}</span>
        <button @click="removeContent(row.id)">삭제</button>
      </div>

      <div class="divider"></div>

    </div>
  </div>
</template>

<script setup>
// import {} from 'vue';

const props = defineProps({data: Object});
// const state = reactive({ data: {} })
/* 사용할 이벤트 선언*/
const emit = defineEmits(['postRemoved'])

// 게시글 삭제
async function removeContent(content_uid) {
  if(!confirm('삭제하시겠습니까?')) return;

  const url = useAppConfig().apiServer + '/destroy';
  const options = {
    method: 'POST',
    body: {
        content_uid: content_uid
    }
  }
  const { data: res } = $useFetch(url, options);
  watch(res, (res) => {
    if(res.status == 'success') {
      /* 게시글이 삭제완료 하였음을 부모컴포넌트에 알림*/
      emit('postRemoved')
    }
    else {
        alert(res.msg)
    }
  })

}
</script>