<template>
  <NuxtLayout>
      <div class="w-full max-w-2xl">
        <BasicButton text="글쓰기" :href="'/editor/' + user_id" />
        
        <div class="flex flex-col w-full border-opacity-50">
            <div v-for="row in state.data">

            <div class="grid h-20 card bg-base-100 rounded-box place-items-center">
                <NuxtLink :to="'/content/' + row.id">{{ row.title }}</NuxtLink>
                <span>{{ row.created_at }}</span>
                <button @click="removeContent(row.id)">삭제</button>
            </div>

            <div class="divider"></div>

            </div>
        </div>
      </div>
  </NuxtLayout>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import cheerio from 'cheerio';
import axios from 'axios';

axios.defaults.withCredentials = true;

const state = reactive({ data: {} })

/* 앱 마운트 훅 */
onMounted(() => {
  loadPosts()
});

// 게시글 리스트 로딩
async function loadPosts() {
    await axios.get(useAppConfig().apiServer + '/test')
    .then(({ data:html }) => {
        const $ = cheerio.load(html);
        const title = $('h3.sub-tit-color').text();
        console.log(title)

    });
    // state.data = await response.json()
}

</script>
