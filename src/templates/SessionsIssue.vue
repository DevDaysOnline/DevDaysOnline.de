<template>
  <Layout>
    <h1 class="dev-card">Sessions</h1>
    <div v-for="session in sessions" :key="session.id">
      <router-link :to="session.path">
        <h2 v-html="session.title" />
      </router-link>
      <div class="session">
        <div v-html="session.description" />
        <router-link class="more" :to="session.path">mehr...</router-link>
      </div>
      <br />
    </div>
  </Layout>
</template>

<page-query>
  query SessionList($issue: Int) {
    allSession (filter: {issue: { eq: $issue} }, sortBy: "slug", order: ASC) {
      edges {
        node {
          id
          title
          path,
          issue
          description
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Sessions"
  },
  computed: {
    sessions() {
      return this.$page.allSession.edges
      .map(s=>s.node);
    }
  }
};
</script>
