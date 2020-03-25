<template>
  <Layout>
    <h1>Sponsor</h1>
    <ul class="dev-days-list">
      <li v-for="{ node } in $page.allSponsor.edges" :key="node._id">
        <a :href="node.url"><h2 v-html="node.name" /></a>
        <a :href="node.url"><g-image :src="node.image" /></a>
        <p v-html="node.content" />
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSponsor (page: $page, sortBy: "name", order: ASC) {
      edges {
        node {
          id
          image
          url
          name
          content
          path    
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: "Sponsoren"
  }
};
</script>