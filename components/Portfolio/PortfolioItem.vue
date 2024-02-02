<template>
  <article flex flex-col sm:flex-row gap-8>
    <figure m-a sm:m-0>
      <img :src="image" :alt="title" w-28 h-28 cursor-pointer />
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
              <DottedLink
                :href="url"
                text="Access"
                target="_blank"
                rel="noopener"
              />
            </li>

            <li v-if="gitUrl">
              <DottedLink
                :href="gitUrl"
                text="Source Code"
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
interface IPortfolioItem {
  title: string;
  summary: string;
  description?: string[];
  categories: string[];
  year: number;
  image: string;
  url?: string;
  gitUrl?: string;
}

const props = defineProps<IPortfolioItem>();
</script>

<style></style>
