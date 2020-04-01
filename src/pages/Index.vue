<template>
  <Layout>
    <h1>Willkommen bei dev-days-online.</h1>
    <p>
      dev-days-online ist die Online Community Software Enwickler Konferenz am
      <b>17. April 2020</b> und
      <b>18. April 2020</b>.
    </p>
    <p>
      Die
      <b>dev-days-online</b> wurden ins Leben gerufen, um einerseits Sprechern und Wissensdurstigen
      eine Plattform zu bieten, die nicht vom Virus betroffen ist. Andererseits, um die betroffenen Community-Konferenzen 
        <a href="https://www.dotnet-day-franken.de">.NET Day Franken</a>,
      der
      <a href="https://dotnet-cologne.de">dotnet Cologne</a>
      den
      <a href="https://md-devdays.de/">Magdeburger Developer Days</a>
      zu unterstützen.
    </p>
    <p>Alle Einnahmen der Konferenz kommen den Veranstaltern der Konferenzen zu Gute, wenn Du selber auch helfen willst. Dann schaue <g-link to="/support/">hier nach wie</g-link>.</p>

      <div v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link :to="node.path">
        <h2 v-html="node.date" />
      </router-link>
      <div class="session">
        <h3 v-html="node.title" />
        <div v-html="node.description" />
        <router-link class="more" :to="node.path">mehr...</router-link>
      </div>
      <br />
      </div>
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
    title: "Startseite"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
