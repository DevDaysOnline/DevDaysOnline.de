<template>
  <Layout>
    <h1>Sprecherinnen und Sprecher 2</h1>
    <div v-for="speaker in speakers" :key="speaker._id">
      <div class="dev-card">
        <div class="logo" :title="`Bild von ${speaker.name}`">
          <g-image class="rounded-image" :src="speaker.image || ''" immediate="true" />
        </div>
        <div class="text">
          <router-link :to="speaker.path">
            <h2 v-html="speaker.name" />
          </router-link>
          <div v-html="speaker.description" />
          <router-link class="more" :to="speaker.path">mehr...</router-link>
          <br />
          <h3 v-if="speaker.sessions.length > 1">Sessions</h3>
          <h3 v-if="speaker.sessions.length == 1">Session</h3>
          <ul>
            <li v-for="session in speaker.sessions" :key="session.path">
              <router-link :to="session.path">{{session.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  </Layout>
</template>

<page-query>
  query SpeakerList {
    allSpeaker (sortBy: "slug", order: ASC) {
      edges {
        node {
          id
          name
          path,
          image  (width: 180, height: 180, quality: 75, fit: cover),
          description,
          sessions  {
            slug
            title,
            path,
            issue
          }
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: "Sprecher/innen",
  },
  computed: {
    speakers() {
      const { issue } = this.$context;
      const issueN = Number(issue);
      const speakers = this.$page
          .allSpeaker
          .edges.map(s=>s.node);

      for (let speaker of speakers) {
        speaker.sessions = speaker.sessions.filter(s=>s.issue === issueN);
      }
      return speakers.filter(s=>s.sessions.length > 0);
    },
  },
};
</script>
