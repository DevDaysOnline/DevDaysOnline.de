<template>
  <Layout>
    <h1>{{ $page.speaker.name }}</h1>

  <div class="dev-card">
        <div class="logo" :title="`Bild von ${speaker.name}`">
          <g-image class="rounded-image" :src="speaker.image || ''" immediate="true" />
        </div>
        <div class="text">
          <router-link :to="speaker.path">
            <h2 v-html="speaker.name" />
          </router-link>
          <div v-html="speaker.content" />
          <br/>
          <h3 v-if="speaker.sessions.length > 1">Sessions</h3>
          <h3 v-if="speaker.sessions.length == 1">Session</h3>
          <ul>
            <li v-for="session in speaker.sessions" :key="session.path">
              <router-link :to="session.path">{{session.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
  </Layout>
</template>

<page-query>
query Speaker ($path: String) {
  speaker (path: $path) {
    name
    path
    slug
    content
    image (width: 180, height: 180, quality: 75, fit: cover)
    sessions {
      slug
      path
      title
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.speaker.name,
      description: (this.$page.speaker.description || '').substring(0,150)
    };
  },
  computed: {
    speaker() {
      return this.$page.speaker;
    }
  }
};
</script>