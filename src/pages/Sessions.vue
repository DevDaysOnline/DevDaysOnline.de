<template>
    <Layout>
        <h3>Sessions</h3>
        
   <ul>
      <li v-for="{ node } in $page.allSession.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
      </li>
    </ul>
    </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSession (page: $page) {
      edges {
        node {
          id
          title
          content
          path
        }
      }
    }
  }
</page-query>
