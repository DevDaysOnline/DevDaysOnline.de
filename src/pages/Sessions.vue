<template>
  <Layout>
    <h1 class="dev-card">Sessions</h1>
      <div v-for="{ node } in $page.allSession.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title" />
        </router-link>
        <div class="session" v-html="node.content" />        
      <br/>
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
          content
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