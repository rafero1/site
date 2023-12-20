<script lang="ts" setup>
function getAverageBrightness(pixelData: string | any[] | Uint8ClampedArray) {
  let sum = 0;
  for (let i = 0; i < pixelData.length; i += 4) {
    // Assuming grayscale image; for colored images, compute brightness using weighted RGB values
    sum += (pixelData[i] + pixelData[i + 1] + pixelData[i + 2]) / 3;
  }
  return sum / (pixelData.length / 4);
}

function getAsciiChar(brightness: number) {
  const asciiChars = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];
  return asciiChars[Math.floor(brightness / 25.5)];
}

function convertImageToAscii(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  let asciiData = "";

  for (let y = 0; y < height; y += 8) {
    for (let x = 0; x < width; x += 4) {
      const pixelData = ctx.getImageData(x, y, 4, 8).data;
      const averageBrightness = getAverageBrightness(pixelData);

      asciiData += getAsciiChar(averageBrightness);
    }
    asciiData += "\n";
  }

  return asciiData;
}

function drawAscii(img: HTMLImageElement, width: number, height: number) {
  // Get canvas context
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  // Draw the image on canvas
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Convert the image to ASCII
  const asciiData = convertImageToAscii(ctx, canvas.width, canvas.height);

  // Display the ASCII data
  var output = document.getElementById("asciiOutput");

  if (output) {
    output.textContent = asciiData;
  }
}

// Load the PNG image
const img = new Image();
img.src = "img/world.png";

img.onload = () => drawAscii(img, img.width, img.height);
</script>

<template>
  <pre id="asciiOutput"></pre>
</template>

<style scoped></style>
