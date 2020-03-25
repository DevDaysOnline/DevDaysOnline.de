<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">
          <img class="logo" src="/dev-days-online-logo.png" alt="Logo Dev Days" />
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Startseite</g-link>
        <g-link class="nav__link" to="/sessions/">Sessions</g-link>
        <g-link class="nav__link" to="/speakers/">Sprecher/Innen</g-link>
        <g-link class="nav__link" to="/sponsors/">Sponsoren</g-link>
        <g-link class="nav__link" to="/imprint/">Impressum</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName,
    year
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

a {
  color: #f77f00
}
a:hover {
  color: #fcbf49
}
a:active {
  color: #fcbf49
}
a:visited {
  color: #f77f00
}


.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.logo {
  width: 6em
}

ul {
  list-style-type: none;
}

h1, h2, h3, h4 {
  color: #f77f00
}
h1 {
  font-size: 1.3em;
}
h2 {
  font-size: 1.2em;

}

h3 {
  font-size: 1.1em;

}

h4 {
  font-size: 1em;
}
.dev-days-list img {
  float: right;
  width: 10em;
  margin: 0 0 1em 1em;
  padding: 0;
}

.dev-days-list h2 {
  background-color: #f77f0020;
  padding: 0.5em;
}
</style>
