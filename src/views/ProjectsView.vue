<template>
  <div class="projects">
    <ul>
      <li v-for="project in projects" :key="project.name">
        <router-link :to="'/' + project.url">{{ project.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      projects: [
        { url: "projects/1", name: "Dashboard Design Concept (Community) by Daria Pchelintseva" }
      ],
    };
  },
});
</script>

<style lang="scss"></style>
