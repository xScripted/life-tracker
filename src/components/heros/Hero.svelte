<script lang="ts">
  import { animReveal } from '@/utils/reveal'
  import { onMount } from 'svelte'

  onMount(() => {
    animReveal()
  })
</script>

<style lang="scss">
  .hero {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    background-color: var(--colorBackground);

    h2 {
      color: var(--colorText2);
      font-weight: 100;
    }
    h1 {
      font-size: 50px;
      font-weight: bold;
      color: var(--colorText);
    }
  }
</style>

<div class="hero">
  <h2 reveal="1">Únete a la Tokyo Manji</h2>
  <h1 reveal="2">Una nueva era para <br /> los rufianes</h1>
</div>
