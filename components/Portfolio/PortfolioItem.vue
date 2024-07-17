<template>
  <article flex flex-col sm:flex-row gap-8>
    <figure m-a mb-12 sm:m-0>
      <NuxtImg :src="project.image" alt="" placeholder w-28 h-28 rounded-full />
    </figure>
    <div>
      <header>
        <h3 font="normal" text-size-6 my-0>{{ project.title }}</h3>
        <p italic mt-2 mb-0 text-secondary>{{ project.year }}</p>
        <p italic mt-2 mb-4 text-secondary>
          {{ project.categories.join(", ") }}
        </p>
      </header>
      <div>
        <template
          v-if="project.description"
          v-for="paragraph in parseDescription(project.description)"
        >
          <p mt-0>
            <template v-for="sentence in paragraph">
              <template v-if="sentence.type === 'text'">{{
                sentence.text
              }}</template>
              <DottedLink
                v-else-if="sentence.type === 'link' && sentence.href"
                :href="sentence.href"
                :text="sentence.text"
                target="_blank"
                rel="noopener"
              />
            </template>
          </p>
        </template>
        <p v-else mt-0>{{ project.summary }}</p>

        <nav v-if="project.url || project.gitUrl">
          <ul list-none p0>
            <li v-if="project.url" mb-4>
              &gt;
              <DottedLink
                :href="project.url"
                :text="project.urlLabel ?? $t('open')"
                target="_blank"
                rel="noopener"
              />
            </li>

            <li v-if="project.gitUrl">
              &gt;
              <DottedLink
                :href="project.gitUrl"
                :text="$t('sourceCode')"
                target="_blank"
                rel="noopener"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { IProject } from "./../../types/IProject";

const { locale } = useI18n();

const props = defineProps<{
  /**
   * The project to display
   */
  project: IProject;
}>();
</script>

<style></style>
