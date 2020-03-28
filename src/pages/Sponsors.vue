<template>
  <Layout>
    <h1>Sponsoren</h1>
    <div v-for="{ node } in $page.allSponsor.edges" :key="node._id">
      <div class="dev-card">
        <div
          class="logo"
          :title="`Logo von ${node.name}`"
        >
          <g-image :src="node.image" />
        </div>
        <div
          class="text"
        >
          <a :href="node.url">
            <h2 v-html="node.name" />
          </a>
          <div v-html="node.content" />
        </div>
      </div>
      <br />
    </div>
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