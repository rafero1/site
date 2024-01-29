<template>
  <PrimaryBar :path="route.path"></PrimaryBar>
  <div class="p-5 text-center">
    <pre
      class="mt-20 text-green text-left w-max mx-a font-size-2 sm:font-size-4"
      aria-hidden="true"
    >
 ,ggggggggggg,
dP"""88""""""Y8,              ,dPYb,                      ,dPYb,
Yb,  88      `8b              IP'`Yb                      IP'`Yb
 `"  88      ,8P              I8  8I                      I8  8I
     88aaaad8P"               I8  8'                      I8  8'
     88""""Yb,      ,gggg,gg  I8 dP    ,gggg,gg   ,ggg,   I8 dP
     88     "8b    dP"  "Y8I  I8dP    dP"  "Y8I  i8" "8i  I8dP
     88      `8i  i8'    ,8I  I8P    i8'    ,8I  I8, ,8I  I8P
     88       Yb,,d8,   ,d8b,,d8b,_ ,d8,   ,d8b, `YbadP' ,d8b,_
     88        Y8P"Y8888P"`Y8PI8"888P"Y8888P"`Y8888P"Y8888P'"Y88
                              I8 `8,
                              I8  `8,
                              I8   8I
                              I8   8I
                              I8, ,8'
                               "Y8P'
           ,ggg,
          dP""8I                      ,dPYb,
         dP   88                      IP'`Yb
        dP    88                 gg   I8  8I
       ,8'    88                 ""   I8  8'
       d88888888      ggg    gg  gg   I8 dP    ,gggg,gg   ,gggggg,
 __   ,8"     88     d8"Yb   88bg88   I8dP    dP"  "Y8I   dP""""8I
dP"  ,8P      Y8    dP  I8   8I  88   I8P    i8'    ,8I  ,8'    8I
Yb,_,dP       `8b,,dP   I8, ,8I_,88,_,d8b,_ ,d8,   ,d8b,,dP     Y8,
 "Y8P"         `Y88"     "Y8P" 8P""Y88P'"Y88P"Y8888P"`Y88P      `Y8</pre
    >
    <p class="mt-30 italic">~ {{ $t("welcome") }} ~</p>
    <p class="mt-10">{{ $t("intro") }}</p>
    <p>{{ $t("intro2") }}</p>
    <nav class="mt-10 flex flex-justify-center">
      <ul class="list-none p0">
        <li class="m-3">
          <SimpleLink url="/portfolio" msg="portfolio" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

useHead({
  bodyAttrs: {
    class: "m0 font-mono bg-darker text-light min-h-screen",
  },
});
</script>
