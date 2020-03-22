<template>
  <Layout>
    <h3>{{ $page.speaker.name }}</h3>

    <div v-html="$page.speaker.content"></div>

    <h4>Sessions</h4>

    <ul>
      <li v-for="session in $page.speaker.sessions" :key="session._id">
        <router-link :to="session.path" v-html="session.title" />
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Speaker ($path: String) {
  speaker (path: $path) {
    name
    path
    slug
    content
    sessions {
      slug
      path
      title
    }
  }
}
</page-query>
