<template>
  <Layout>
    <div class="agenda">
    <h1 >Zeitplan</h1>
    <p>Der virtuelle Einlass unter <a href="https://twitch.tv/DerAlbertLive">twitch.tv/DerAlbertLive</a> ist jeden Tag im 09:00 Uhr</p>
    <div v-for="date in dates" :key="date">
      <h2>{{ date }}</h2>
      <table>
    <tr v-for="session in sessions(date)" :key="session._id">
          <td valign="top">{{ session.time }}<td>
         <td> <router-link :to="session.path">
           <b>{{ session. title }}</b><br/>
        <span v-for="speaker in session.speakers" :key="speaker._id">
          <router-link :to="speaker.path" v-html="speaker.name" />
        </span>
      </router-link></td>
    </tr>
      </table>
    </div>
    <p>Die Agenda kann sich jederzeit ändern.</p>
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allSession (page: $page, sortBy: "date", order: ASC) {
      edges {
        node {
          id
          title
          path,
          slug,
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
    }
  }
</page-query>

<script>

function arrayUniqueFilter(value, index, self) {
  if (value === undefined) {
    return false;
  }

  return self.indexOf(value) === index;
}
export default {
  metaInfo: {
    title: "Zeitplan"
  },
  methods: {
    sessions(date) {
      return this.$page.allSession.edges
        .map(s=>s.node)
        .filter(s=> s.date === date);
    }

  },
  computed: {
    dates() {
      return this.$page.allSession.edges
        .map(s=>s.node)
        .map(s=>s.date)
        .filter(arrayUniqueFilter);
    },
  }
};
</script>