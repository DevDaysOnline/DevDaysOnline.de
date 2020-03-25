<template>
  <Layout>
    <h3>Sessions</h3>

    <ul>
      <li v-for="{ node } in $page.allSession.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title" />
        </router-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSession (page: $page, sortBy: "title", order: ASC) {
      edges {
        node {
          id
          title
          path
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