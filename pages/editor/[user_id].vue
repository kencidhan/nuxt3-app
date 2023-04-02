<template>
  <NuxtLayout>
    <div v-if="hasLogin">
      <div class="title"><input v-model.lazy.trim="title" placeholder="게시글 제목을 적어주세요." /></div>
      <div class="content"><textarea v-model.lazy.trim="content" placeholder="게시글 내용을 적어주세요." /></div>
      <div class="title"><button class="btn btn-accent" @click="postSumit">제출</button></div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import axios from 'axios';
axios.defaults.withCredentials = true;

/* 로그인 체크 */
const hasLogin = useHasLogin();
watch(hasLogin, (hasLogin) => {
  if (!hasLogin && hasLogin !== null) {
    alert('로그인이 필요한 페이지입니다.');
    router.back()
  }
});

// 전역 설정객체 appConfig
const appConfig = useAppConfig()
// 라우트
const router = useRouter()
const route = useRoute()

let title = '';
let content = '';

/* 작성 게시글 제출 */
async function postSumit() {
    const url = appConfig.apiServer + '/create';
    const data = {
        board_id: 1,
        user_id: route.params.user_id,
        title: title,
        content: content
    }
    const { data: res } = await axios.post(url, data);
    if(res.status == 'success') {
        router.push({ path: "/" })
    }
    else {
        alert(res.msg)
    }
}
</script>