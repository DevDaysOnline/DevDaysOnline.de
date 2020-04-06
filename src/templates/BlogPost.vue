<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>

    <div v-html="$page.blogPost.content"></div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String) {
  blogPost (path: $path) {
    title
    path
    slug
    datetime: date (format: "DD.MM.YYYY")
    content
    description
  }
}
</page-query>

<script>
import { getDescription } from '~/services/helper.js';

export default {
  metaInfo() {
    const post = this.$page.blogPost;
    return {
      title: post.title,
      meta: [
        { 
          name: 'description',
          const: getDescription(post.description, post.content)
        }
      ]

    };
  }
};
</script>