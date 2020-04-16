<template>
  <Layout>
    <h1>{{ $page.session.title }}</h1>
    <p><b>Zeitpunkt:</b> {{ $page.session.date }} {{ $page.session.time }} Uhr</p>
    <ul>
      <li v-for="speaker in $page.session.speakers" :key="speaker._id">
       <b><span v-if="speaker.sex != 'female'">Sprecher:</span>
        <span v-if="speaker.sex == 'female'">Sprecherin:</span></b> &nbsp;
         <router-link :to="speaker.path" v-html="speaker.name" />
      </li>
    </ul>
    <br/>

    <div v-html="$page.session.content"></div>

  </Layout>
</template>

<page-query>
query Session ($path: String) {
  session (path: $path) {
    title
    path
    slug
    content
    description
    date: date (format: "DD.MM.YYYY")
    time: date (format: "HH:mm")
    speakers {
      sex
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
      title: this.$page.session.title,
      description: (this.$page.session.description || '').substring(0,150)
    };
  }
  
};
</script>