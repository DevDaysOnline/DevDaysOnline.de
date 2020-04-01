<template>
  <div>
    <div class="dev-card">
      <div class="logo" :title="`Logo von ${name}`">
        <g-image :src="image" immediate="true" />
      </div>
      <div class="text">
        <a :href="url">
          <h2 v-html="name" />
        </a>
        <div v-html="content" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: ["name", "image", "url", "content"]
};
</script>



