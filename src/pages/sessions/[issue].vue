<template>
  <Layout>
    <h1 class="dev-card">Sessions</h1>
    <div v-for=" node in sessions" :key="node.id">
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
  query  {
    allSession (sortBy: "slug", order: ASC) {
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
      const { issue } = this.$route.params
      console.log('issue', issue);
      const issueN = Number(issue);
      return this.$page.allSession.edges.map(s=>s.node).filter(s=>s.node.issue === issueN );
    }
  }
};
</script>
