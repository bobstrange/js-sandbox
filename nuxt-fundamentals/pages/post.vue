<template>
  <div class="containter">
    <article>
      <h1 class="title">This is a post</h1>
      <p>Sample post text</p>
    </article>
  </div>
</template>

<script>
export default {

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


