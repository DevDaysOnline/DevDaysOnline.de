<template>
  <Layout>
    <h3>{{ $page.session.title }}</h3>

    <div v-html="$page.session.content"></div>

    <h4>Sprecher/Innen</h4>
    <ul>
      <li v-for="speaker in $page.session.speakers" :key="speaker._id">
        <router-link :to="speaker.path" v-html="speaker.name" />
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Session ($path: String) {
  session (path: $path) {
    title
    path
    slug
    content
    speakers {
      slug
      path
      name
    }
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.session.title
    };
  }
};
</script>