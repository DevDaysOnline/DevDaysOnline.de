<template>
  <div class="container dev-container">
    <header>
      <nav>
        <div class="img-container">
          <img src="/dev-days-online-logo.png" alt="Logo Dev Days" />
        </div>
        <div class="nav-container">
          <div>
            <g-link to="/">Startseite</g-link>
            <g-link to="/sessions/">Sessions</g-link>
            <g-link to="/speakers/">Sprecher/Innen</g-link>
            <g-link to="/sponsors/">Sponsoren</g-link>
            <g-link to="/support/">Unterstützen</g-link>
            <g-link to="/imprint/">Impressum</g-link>
          </div>
        </div>
      </nav>
    </header>
    <slot />
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
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

header nav {
  @apply flex items-center justify-between flex-wrap p-6;
}

nav .nav-container {
  @apply w-full block flex-grow;
}

nav .nav-container div {
  @apply text-sm;
}

nav a { 
  @apply block mr-4;
}
nav .img-container {
  @apply flex  flex-shrink-0 text-white mr-6
}

nav img {
  @apply fill-current fill-current  w-20 mr-2
}

@media (min-width: 768px) {
nav a {
 @apply  inline-block mt-0;
}
  nav .nav-container {
  @apply flex items-center w-auto
}
nav .nav-container div {
  @apply flex-grow
}
}

@media (min-width: 640px) {
nav a {
 @apply mt-4;
}
  
}

a {
  color: #f77f00;
}
a:hover {
  color: #fcbf49;
}
a:active {
  color: #fcbf49;
}
a:visited {
  color: #f77f00;
}

.dev-container {
  @apply mx-auto;
}


ul {
  list-style-type: none;
}

h1,
h2,
h3,
h4 {
  color: #f77f00;
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
p {
  margin-bottom: 1em;
}

div.dev-card
{
  @apply max-w-sm w-full;
}

.dev-card .logo {
    @apply h-auto flex-none bg-cover rounded-t text-center overflow-hidden
}

.dev-card .text {
 @apply border-r border-b border-l border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal
}

.dev-card .text h2 {
  @apply mb-2 font-bold
}

.dev-card .text div {
  @apply text-gray-900
}
@media (min-width: 768px) {
  div.dev-card {
    @apply max-w-full flex;
  }
  .dev-card .logo {
   @apply w-48 rounded-t-none rounded-l 
}
  .dev-card .text {
      @apply border-l-0 border-t border-gray-400  rounded-b-none rounded-r 
  }
}

form {
  @apply max-w-sm rounded overflow-hidden shadow-lg
}
</style>
