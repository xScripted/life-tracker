<script lang="ts">
  import { BREAKPOINT } from '@/constants/globalVariables'
  import { onMount } from 'svelte'
  export let showedItems: number = 1
  export let autoSlide: boolean = true

  let HTMLSlider: HTMLElement
  let sliderContainerWidth: number
  let nItems: number = 0
  let currentDot: number = 0

  const sliding = (index) => {
    HTMLSlider.style.transform = `translateX(-${sliderContainerWidth * index}px)`

    currentDot = index
  }

  const slidingScroll = (ev) => (currentDot = ev.target.scrollLeft / sliderContainerWidth)
  const calcWidth = (): string => (sliderContainerWidth * nItems) / showedItems + 'px'

  let intervalId

  const interval = () => {
    if (autoSlide) {
      return setInterval(() => {
        const nextIndex = currentDot < Math.floor(nItems / showedItems) - 1 ? currentDot + 1 : 0
        sliding(nextIndex)
      }, 5000)
    }
  }

  onMount(() => {
    autoSlide = BREAKPOINT < window.innerWidth && autoSlide
    nItems = HTMLSlider.children.length
    HTMLSlider.style.width = calcWidth()

    window.addEventListener('resize', () => (HTMLSlider.style.width = calcWidth()))

    intervalId = interval()
  })
</script>

<style lang="scss">
  @import '../../sass/mixins.scss';

  .g-wrapper {
    width: 100%;
    padding: 0;

    .slider-container {
      overflow: hidden;
      padding: 0;
      scroll-snap-type: x mandatory;

      @include notDesktop {
        overflow: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      .slider {
        transition: 0.8s ease;
        display: flex;
        width: 100%;
      }

      :global(.slider > *) {
        scroll-snap-align: start;
      }
    }
    .dots {
      display: flex;
      justify-content: center;
      padding: 20px;
      gap: 10px;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background-color: var(--colorBorder);
        overflow: hidden;
        transition: 0.3s;

        cursor: pointer;
        filter: brightness(0.9);

        .base {
          height: 100%;
          width: 0%;
          background-color: var(--colorBrand);
          border-radius: 15px;
        }

        &.active {
          width: 30px;

          &.autoSlide {
            .base {
              transition: 5s linear;
            }
          }

          .base {
            width: 100%;
          }
        }
      }
    }
  }
</style>

<div class="g-wrapper">
  <div class="slider-container" bind:offsetWidth={sliderContainerWidth} on:scroll={slidingScroll}>
    <div class="slider" bind:this={HTMLSlider}>
      <slot />
    </div>
  </div>

  <div class="dots">
    {#each new Array(Math.ceil(nItems / showedItems)) as _, index}
      <button
        class="dot"
        class:active={currentDot === index}
        class:autoSlide
        on:click={() => {
          sliding(index)
          clearInterval(intervalId)
          intervalId = interval()
        }}
      >
        <div class="base" />
      </button>
    {/each}
  </div>
</div>
