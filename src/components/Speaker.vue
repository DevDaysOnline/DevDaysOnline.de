<template>
  <div>
    <div class="dev-card">
      <div class="logo" :title="`Logo von ${name}`">
        <g-image :src="image" immediate="true" />
      </div>
      <div class="text">
        <h2 v-html="name" />
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



