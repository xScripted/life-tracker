<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  export let title: string = ''
  export let open: boolean = true
</script>

<style lang="scss">
  .storyboard-dropdown {
    .header {
      position: sticky;
      top: 0;
      background-color: var(--colorBackground);
      z-index: 8;
      width: 100%;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      :global(svg) {
        transition: 0.3s ease;
        transform: rotate(90deg);
      }

      &.open {
        :global(svg) {
          transform: rotate(0deg);
        }
      }

      hr {
        width: 100%;
        height: 1px;
        margin: 0;

        &:nth-child(1) {
          width: 50px;
        }
      }

      h2 {
        color: var(--colorText);
        font-size: 25px;
        padding: 10px 0;
        flex-shrink: 0;
      }

      :global(svg) {
        flex-shrink: 0;
      }
    }
  }
</style>

<div class="storyboard-dropdown">
  <button class="header" class:open on:click={() => (open = !open)}>
    <hr />

    <h2>
      {title}
    </h2>

    <hr />

    <Svg name="arrow" width="50" height="50" />
  </button>

  {#if open}
    <slot />
  {/if}
</div>
