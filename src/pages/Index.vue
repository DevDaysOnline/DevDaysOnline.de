<template>
  <Layout>
    <h1>Willkommen bei dev-days-online.</h1>
    <p>dev-days-online ist die Online Community Software Enwickler Konferenz am <b>17. April 2020</b> und <b>18. April 2020</b>.</p>
    <p>Sie werden präsentiert vom <a href="https://www.dotnet-day-franken.de">.NET Day Franken</a>, 
      der <a href="https://dotnet-cologne.de">dotnet Cologne</a>
      den <a href="https://md-devdays.de/">Magdeburger Developer Days</a>.</p>
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <span v-html="node.date" /> &nbsp;
        <router-link :to="node.path">
          <b v-html="node.title" />
        </router-link>
        <div v-html="node.description" />
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
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
