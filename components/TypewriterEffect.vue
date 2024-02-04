<template>
  <span
    class="after:content-[''] after:border-r-6 after:border-r-light after:border-r-solid after:animate-fade-out after:animate-alternate after:animate-ease-in-out after:animate-duration-1000 after:animate-iteration-count-infinite"
    :text-color="color"
    >{{ displayWord }}</span
  >
</template>

<script lang="ts" setup>
interface TypewriterEffectProps {
  /**
   * The words to display
   */
  words: string[];
  /**
   * The time it takes to write a word
   */
  timeToWrite?: number;
  /**
   * The time it takes to delete a word
   */
  timeToDelete?: number;
  /**
   * The time to wait before writing a new word
   */
  waitTimeBeforeNewWord?: number;

  /**
   * The color of the text. If an array is passed, the text color will cycle through the array
   */
  textColor?: string | string[];
}

const props = withDefaults(defineProps<TypewriterEffectProps>(), {
  timeToWrite: 50,
  timeToDelete: 100,
  waitTimeBeforeNewWord: 500,
  textColor: "light",
});

const isColorArray = Array.isArray(props.textColor);
let currentColorIndex = 0;

let color = ref(
  isColorArray ? props.textColor[currentColorIndex] : props.textColor
);

let displayWord = ref(props.words[0]);

// sleep function
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Delete characters from the word until it's empty
 * @param word The word to delete
 * @param target The original word, to keep track of the length
 * @param delay The delay between each deletion
 */
const deleteWord = (word: Ref<string>, target: string, delay: number) => {
  return new Promise(async (resolve) => {
    for (let i = word.value.length; i >= 0; i--) {
      word.value = target.substring(0, i);
      await sleep(delay);
    }
    resolve(true);
  });
};

/**
 * Write characters to the word until it's the same as the target
 * @param word The word to write
 * @param target The target word
 * @param delay The delay between each addition
 */
const writeWord = (word: Ref<string>, target: string, delay: number) => {
  return new Promise(async (resolve) => {
    for (let i = 0; i <= target.length; i++) {
      word.value = target.substring(0, i);
      await sleep(delay);
    }
    resolve(true);
  });
};

/**
 * Recursive function that deletes the current word and writes the next one
 * @param words The words to display
 * @param i The current index
 * @param timeToWrite The time it takes to write a word
 * @param timeToDelete The time it takes to delete a word
 * @param waitTimeBeforeNewWord The time to wait before writing a new word
 */
const deleteAndWriteWords = async (
  words: string[],
  i: number,
  timeToWrite: number,
  timeToDelete: number,
  waitTimeBeforeNewWord: number
) => {
  try {
    // Delete the current word
    await deleteWord(displayWord, words[i], timeToWrite);

    // Cycle the color if a color array was passed
    if (isColorArray) {
      currentColorIndex++;
      if (currentColorIndex === props.textColor.length) {
        currentColorIndex = 0;
      }
      color.value = props.textColor[currentColorIndex];
    }

    // If this is the last word in the array, start over.
    // otherwise, write the next word
    const nextIndex = i === words.length - 1 ? 0 : i + 1;

    // Write the next word
    await writeWord(displayWord, words[nextIndex], timeToDelete);

    // Wait before repeating the process
    setTimeout(() => {
      deleteAndWriteWords(
        words,
        nextIndex,
        timeToWrite,
        timeToDelete,
        waitTimeBeforeNewWord
      );
    }, waitTimeBeforeNewWord);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

onMounted(() => {
  deleteAndWriteWords(
    props.words,
    0,
    props.timeToDelete,
    props.timeToWrite,
    props.waitTimeBeforeNewWord
  );
});
</script>

<style></style>
