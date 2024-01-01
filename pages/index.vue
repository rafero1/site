<template>
  <div class="text-center p-5">
    <p class="mt-10">~ {{ $t("welcome") }} ~</p>
    <h1 class="mt-20 font-size-12 text-green">Rafael Avilar</h1>
    <pre class="font-size-3.5 text-gray">
      88888888888888888888888888888888888888888888888888888888888888888888888
      88.._|      | `-.  | `.  -_-_ _-_  _-  _- -_ -  .'|   |.'|     |  _..88
      88   `-.._  |    |`!  |`.  -_ -__ -_ _- _-_-  .'  |.;'   |   _.!-'|  88
      88      | `-!._  |  `;!  ;. _______________ ,'| .-' |   _!.i'     |  88
      88..__  |     |`-!._ | `.| |_______________||."'|  _!.;'   |     _|..88
      88   |``"..__ |    |`";.| i|_|MMMMMMMMMMM|_|'| _!-|   |   _|..-|'    88
      88   |      |``--..|_ | `;!|l|MMoMMMMoMMM|1|.'j   |_..!-'|     |     88
      88   |      |    |   |`-,!_|_|MMMMP'YMMMM|_||.!-;'  |    |     |     88
      88___|______|____!.,.!,.!,!|d|MMMo * loMM|p|,!,.!.,.!..__|_____|_____88
      88      |     |    |  |  | |_|MMMMb,dMMMM|_|| |   |   |    |      |  88
      88      |     |    |..!-;'i|r|MPYMoMMMMoM|r| |`-..|   |    |      |  88
      88      |    _!.-j'  | _!,"|_|M&lt;&gt;MMMMoMMM|_||!._|  `i-!.._ |      |  88
      88     _!.-'|    | _."|  !;|1|MbdMMoMMMMM|l|`.| `-._|    |``-.._  |  88
      88..-i'     |  _.''|  !-| !|_|MMMoMMMMoMM|_|.|`-. | ``._ |     |``"..88
      88   |      |.|    |.|  !| |u|MoMMMMoMMMM|n||`. |`!   | `".    |     88
      88   |  _.-'  |  .'  |.' |/|_|MMMMoMMMMoM|_|! |`!  `,.|    |-._|     88
      88  _!"'|     !.'|  .'| .'|[@]MMMMMMMMMMM[@] \|  `. | `._  |   `-._  88
      88-'    |   .'   |.|  |/| /                 \|`.  |`!    |.|      |`-88
      88      |_.'|   .' | .' |/                   \  \ |  `.  | `._-Lee|  88
      88     .'   | .'   |/|  /                     \ |`!   |`.|    `.  |  88
      88  _.'     !'|   .' | /                       \|  `  |  `.    |`.|  88
      88 vanishing point 888888888888888888888888888888888888888888888(FL)888
    </pre>
    <p class="mt-10">{{ $t("introMsg") }}</p>
    <nav class="mt-10 flex flex-justify-center">
      <ul class="list-none p0">
        <li class="m-3">
          <SimpleLink url="/about" msg="aboutMe" />
        </li>
        <li class="m-3">
          <SimpleLink url="/fun" msg="funStuff" />
        </li>
        <li class="m-3">
          <SimpleLink url="/portfolio" msg="portfolio" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
