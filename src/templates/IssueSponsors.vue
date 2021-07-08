<template>
  <Layout>
    <h1>Sponsoren</h1>
    <div v-for="{ node } in $page.allSponsor.edges" :key="node._id">
      <Sponsor :name="node.name" :image="node.image" :content="node.content" :url="node.url" />
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSponsor (page: $page, sortBy: "slug", order: ASC) {
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
import Sponsor from '@/components/Sponsor.vue'
export default {
  components: {
    Sponsor
  },
  metaInfo: {
    title: "Sponsoren"
  }
};
</script>