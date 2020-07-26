<template>
  <Layout>
    <h1>Sponsoren</h1>
    <div v-for="sponsor in sponsors" :key="sponsor._id">
      <Sponsor :name="sponsor.name" :image="sponsor.image" :content="sponsor.content" :url="sponsor.url" />
    </div>
  </Layout>
</template>

<page-query>
  query SponsorList ($issue: Int) {
    allSponsor (filter: { issues: { containsAny: [$issue] } }, sortBy: "slug", order: ASC) {
      edges {
        node {
          id
          image
          url
          name
          content
          path,
          issues
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
  },
  computed: {
    sponsors() {
      return this.$page.allSponsor
          .edges
          .map(e=>e.node);
    }
  }
};
</script>
