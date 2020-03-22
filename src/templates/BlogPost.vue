<template>
  <Layout>
    <h3>{{ $page.blogPost.title }}</h3>

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
