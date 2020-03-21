<template>
  <Layout>
    <h1>Willkommen bei dev-days-online!</h1>

    <p>dev-days-online ist die Online Community Software
       Enwickler Konferenz.</p>

      
   <p>Sie findet statt vom VON bis BIS</p> 

   <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <span v-html="node.date"/>
        <div v-html="node.description"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          id
          title
          date (format: "DD.MM.YYYY")
          description
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
