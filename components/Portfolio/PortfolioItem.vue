<template>
  <article flex flex-col sm:flex-row gap-8>
    <figure m-a mb-12 sm:m-0>
      <NuxtImg :src="image" :alt="title" placeholder w-28 h-28 rounded-full />
    </figure>
    <div>
      <header>
        <h3 font="normal" text-size-6 my-0>{{ title }}</h3>
        <p italic mt-2 mb-0 text-secondary>{{ year }}</p>
        <p italic mt-2 mb-4 text-secondary>
          {{ categories.join(", ") }}
        </p>
      </header>
      <div>
        <template
          v-if="description"
          v-for="paragraph in parseDescription(description)"
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
        <p v-else mt-0>{{ summary }}</p>

        <nav v-if="url || gitUrl">
          <ul list-none p0>
            <li v-if="url" mb-4>
              &gt;
              <DottedLink
                :href="url"
                :text="urlLabel ?? $t('open')"
                target="_blank"
                rel="noopener"
              />
            </li>

            <li v-if="gitUrl">
              &gt;
              <DottedLink
                :href="gitUrl"
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
const { locale } = useI18n();

export interface IProject {
  title: string;
  summary: string;
  description?: string[];
  categories: string[];
  year: number;
  image: string;
  url?: string;
  urlLabel?: string;
  gitUrl?: string;
}

const props = defineProps<IProject>();
</script>

<style></style>
