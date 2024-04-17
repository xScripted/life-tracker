<script lang="ts">
  import { onMount } from 'svelte'
  import Svg from '@/components/essentials/Svg.svelte'

  export let itemWidth: number = 600

  let HTMLslides: HTMLElement
  let index: number = 0

  let disableNext: boolean = false
  let disablePrev: boolean = true
  let onMounted: boolean = false

  $: if (HTMLslides) HTMLslides.style.transform = `translateX(${itemWidth * index}px)`
  $: disablePrev = index >= 0
  $: disableNext = onMounted && -itemWidth < window.innerWidth - HTMLslides.getBoundingClientRect().right

  const previous = () => {
    if (index < 0) {
      index++
      disableNext = false
    }
  }

  const next = () => {
    const sizes = HTMLslides.getBoundingClientRect()

    if (0 > window.innerWidth - sizes.right) index--
  }

  onMount(() => {
    const nItems: number = HTMLslides.children.length
    HTMLslides.style.width = `${nItems * itemWidth}px`
    onMounted = true
  })
</script>

<style lang="scss">
  @import '../../sass/mixins.scss';

  .slider-x {
    height: fit-content;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .arrows {
      display: flex;
      gap: 10px;

      .arrow {
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid var(--colorBase);
        border-radius: 100%;
        transition: 0.3s ease;

        :global(svg) {
          transform: translateX(1px);
        }

        &.disabled {
          opacity: 0.2;
        }

        &.left {
          transform: rotate(180deg);
        }

        &:hover {
          transition: 0.3s ease;
          border: 1px solid var(--colorBorder);
        }
      }
    }

    .slides {
      display: flex;
      transition: 0.3s ease;

      border-right: 5px solid red;
    }
  }
</style>

<div class="slider-x">
  <div class="g-wrapper">
    <div class="slides" bind:this={HTMLslides}>
      <slot />
    </div>

    <div class="arrows">
      <button class="arrow left" class:disabled={disablePrev} on:click={previous}>
        <Svg name="arrowSlim" width="25" height="25" />
      </button>

      <button class="arrow right" class:disabled={disableNext} on:click={next}>
        <Svg name="arrowSlim" width="25" height="25" />
      </button>
    </div>
  </div>
</div>
