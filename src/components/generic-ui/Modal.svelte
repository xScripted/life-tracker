<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  import { onMount } from 'svelte'

  export let open: boolean = false
  export let maxWidth: number = 500
  export let id: string = ''
  export let padding: string = ''

  const close = () => (open = false)

  let bodyOverflow

  onMount(() => {
    bodyOverflow = () => (document.body.style.overflowY = open ? 'hidden' : 'auto')
  })

  $: {
    open
    if (bodyOverflow) bodyOverflow()
  }
</script>

<style lang="scss">
  @import '../../sass/mixins.scss';
  $headerHeight: 65px;
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;

    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-background {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: -1;

      @include notDesktop {
        background-color: white;
      }
    }

    .modal {
      background-color: var(--colorBase);
      height: fit-content;
      width: 100%;
      max-height: calc(100dvh - 40px);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @include notDesktop {
        max-width: 100%;
        max-height: 100dvh;
        height: 100dvh;
        border: 0;
        border-radius: 0;
      }

      .modal-header {
        position: relative;
        min-height: $headerHeight;
        display: flex;
        align-items: center;
        padding: 0 20px;
        padding-right: 55px;
        font-weight: bold;
        flex-shrink: 0;

        .close {
          transition: 0.3s ease;
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 0;
          padding: 20px;
          opacity: 0.4;

          &:hover {
            transition: 0.3s ease;
            opacity: 1;
          }
        }
      }

      .modal-content {
        min-height: 300px;
        max-height: calc(100dvh - $headerHeight - 40px);
        overflow-y: auto;

        @include notDesktop {
          max-height: calc(100dvh - $headerHeight);
        }
      }
    }
  }
</style>

{#if open}
  <div class="modal-container" {id}>
    <button class="modal-background" on:click={close} />
    <div class="modal" style="max-width: {maxWidth}px">
      <div class="modal-header">
        <slot name="modal-header" />

        <button class="close" on:click={close}>
          <Svg name="close" />
        </button>
      </div>

      <div class="modal-content" style="padding: {padding}">
        <slot />
      </div>
    </div>
  </div>
{/if}
