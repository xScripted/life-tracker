<script lang="ts">
  import { onMount } from 'svelte'

  interface IAttributes {
    done?: boolean
    hydrate?: boolean
    experimental?: boolean
    bugs?: boolean
    responsive?: boolean
    expand?: boolean
  }

  export let name: string = ''
  export let importName: string = ''
  export let sample: boolean = false
  export let attributes: IAttributes = {}
  let expanded: boolean = false

  const copyToClipboard = () => {
    navigator.clipboard.writeText(importName)
  }

  const onKeyDown = (ev) => {
    if (ev.keyCode === 27) expanded = false
  }

  let overflow = () => {}

  $: expanded, overflow()

  onMount(() => {
    overflow = () => {
      document.body.style.overflowY = expanded ? 'hidden' : 'auto'
    }
  })
</script>

<style lang="scss">
  .component {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.2);
    background-color: var(--colorBase);
    overflow: auto;

    &:not(.expanded) {
      padding: 20px;
      border-radius: 10px;
    }

    &.sample {
      :global(.header + div) {
        max-height: 500px;
      }
    }

    &.expanded {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100dvh;
      z-index: 99;
    }

    .header {
      grid-column: span 2;

      text-align: center;

      .name {
        font-weight: bold;
        font-size: 20px;
        color: var(--colorText);
      }

      .importName {
        transition: 0.3s ease;
        cursor: pointer;
        opacity: 0.5;
        padding: 10px;
        font-size: 10px;
        color: var(--colorText2);

        &:hover {
          transition: 0.3s ease;
          opacity: 1;
        }
      }

      .attributes {
        position: absolute;
        display: flex;
        gap: 0px;
        right: 10px;
        top: 10px;
        cursor: default;
      }
    }
  }
</style>

<div class="component c-{name.split('.svelte')[0]}" class:expanded class:sample>
  {#if !expanded}
    <div class="header">
      <div class="name">{name}</div>
      <button class="importName" on:click={copyToClipboard}>{importName}</button>

      <div class="attributes">
        <div title={attributes.done ? 'Done!' : 'In progress'}>{attributes.done ? '✅' : '⚙️'}</div>

        {#if attributes.hydrate}
          <div title="Needs to hydrate client:load">💧</div>
        {/if}

        {#if attributes.bugs}
          <div title="Has bugs to repair">🪳</div>
        {/if}

        {#if attributes.responsive}
          <div title="Responsive tested & approved!">📱</div>
        {/if}

        <button title="Expand full window" on:click={() => (expanded = true)}>🖥️</button>
      </div>
    </div>
  {/if}

  <slot />
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
