<script lang="ts">
  import { onMount } from 'svelte'
  let value: number
  let HTMLCircle: HTMLElement
  let barWidth: number
  let pathWidth: number

  onMount(() => {
    value = (pathWidth * 100) / barWidth
    HTMLCircle.style.transform = `translateX( ${pathWidth} px)`
    //hacer al revés -> que el pathWidth cambie segun donde esté el circulo
  })
</script>

<style lang="scss">
  .container {
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .circle {
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 20px;
      background-color: var(--colorBrandSoft);
      border: 5px solid white;
      z-index: 3;
      cursor: pointer;

      &:hover {
        background-color: var(--colorBrand);
      }
    }

    .bar {
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      position: relative;

      .path {
        position: absolute;
        background-color: var(--colorBrand);
        height: 10px;
        width: 50%;
        z-index: 2;
      }
    }

    .base {
      height: 10px;
      border-radius: 10px;
      background-color: var(--colorBase);
      border: 1px solid var(--colorBorder);
    }
  }
</style>

<div class="container">
  <div class="circle" bind:this={HTMLCircle} />
  <div class="bar" bind:offsetWidth={barWidth}>
    <div class="path" bind:offsetWidth={pathWidth} />
    <div class="base" />
  </div>
</div>
