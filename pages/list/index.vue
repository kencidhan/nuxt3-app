<template>
  <NuxtLayout>
      <div class="w-full max-w-2xl">
        <BasicButton v-if="hasLogin" text="글쓰기" :href="'/editor/' + user.id" />
        <Posts :data="data" @post-removed="loadPosts" />
      </div>
  </NuxtLayout>
</template>

<script>

export default {
  name: 'ContentList',
  data() {
    return {
      data: {},
      user: getUser(),
      hasLogin: useHasLogin()
    }
  },

  methods: {
    async loadPosts() {
      let response = await fetch(useAppConfig().apiServer + '/contentList/1')
      const {data} = await response.json();
      this.data = data;
    }
  },

  mounted() {
    this.loadPosts();
  }
}

</script>
