<template>
    <Layout>
                <h3>Sponsor</h3>        
   <ul>
      <li v-for="{ node } in $page.allSponsor.edges" :key="node._id">
          <h2 v-html="node.name"/>
          <p v-html="node.content"/>
      </li>
    </ul>
    </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSponsor (page: $page, sortBy: "name", order: ASC) {
      edges {
        node {
          id
          name
          content
          path    
        }
      }
    }
  }
</page-query>
