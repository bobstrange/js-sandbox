<template>
  <div class="containter">
    <article>
      <h1 class="title">{{ this.post.title }}</h1>
      <p>{{ this.post.content }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: [
        {
          id: 'foo',
          title: 'Foo',
          content: 'Foo content'
        },
        {
          id: 'bar',
          title: 'Bar',
          content: 'Bar content'
        }
      ]
    }
  },
  computed: {
    post() {
      return this.posts.find(post => post.id === this.id)
    }
  }
}
</script>

<style scoped>
  .containter {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }

  article * {
    margin-bottom: 1rem;
  }

  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }

  .title {
    font-size: 2rem;
  }
</style>


