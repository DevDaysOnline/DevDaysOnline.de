<template>
    <Layout>
                <h3>Speakers</h3>        
   <ul>
      <li v-for="{ node } in $page.allSpeaker.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.name"/>
        </router-link>
      </li>
    </ul>
    </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSpeaker (page: $page, sortBy: "name", order: ASC) {
      edges {
        node {
          id
          name
          path
          sessions {
            slug
            title
          }
    
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Sprecher/innen'
  }
};
</script>