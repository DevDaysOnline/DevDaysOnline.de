<template>
  <Layout>
    <h1 class="dev-card">Sessions</h1>
    <div v-for="{ node } in $page.allSession.edges" :key="node._id">
      <router-link :to="node.path">
        <h2 v-html="node.title" />
      </router-link>
      <div class="session">
        <div v-html="node.description" />
        <router-link class="more" :to="node.path">mehr...</router-link>
      </div>
      <br />
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSession (page: $page, sortBy: "slug", order: ASC) {
      edges {
        node {
          id
          title
          path
          description,
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Sessions"
  }
};
</script>
