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
      <a
        href="https://www.dotnet-day-franken.de"
      >.NET Day Franken</a>,
      der
      <a href="https://dotnet-cologne.de">dotnet Cologne</a>
      den
      <a href="https://md-devdays.de/">Magdeburger Developer Days</a>
      zu unterstützen.
    </p>
    <p>
      Alle Einnahmen der <b>dev-days-online</b> kommen den Veranstaltern der Konferenzen zu Gute, da in der Vorbereitung nicht unerheblich kosten angefallen sind. Wenn Du selber auch helfen willst. Dann schaue
      <g-link to="/support/">hier nach wie</g-link>.
    </p>

    <div class="stream">
      <div class="abox"><iframe
    src="https://player.twitch.tv/?channel=deralbertlive&parent=localhost:8080&parent=www.dev-days-online.de"
    height="240"
    width="427"
    autoplay="true"
    scrolling="no"
    allowfullscreen="false">
</iframe></div>
      <div class="abox highlight"><h2>Live Stream</h2>
      <p>Jeden Tag um 09:00 Uhr startet der Live Stream, im <a href="/agenda">Zeitplan</a> kannst Du sehen wann 
      die jeweiligen Sessions starten.</p>
      <p>Am besten schaust Du auf direkt auf <a href="https://twitch.tv/DerAlbertLive">Twitch</a> dafür brauchst Du 
      kein Konto, zum Chatten schon. Und wir empfehlen die Beteiligung per Chat.</p>
      <p>Du musst wahrscheinlich manuell die Stream Auflösung auf 1080p stellen um ein scharfes Bild zu erhalten.</p>
      </div>

    </div>

    <div v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
      <h2 v-html="node.date" />
      <div class="session">
        <router-link :to="node.path">
          <h3 v-html="node.title" />
        </router-link>
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
