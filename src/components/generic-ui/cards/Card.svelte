<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  export let title: string = ''
  export let description: string = ''
  export let icon: string = ''
  export let image: string = ''
  export let href: string = ''
  export let horizontal: boolean = false
  export let reverse: boolean = false
</script>

<style lang="scss">
  @import '../../../sass/mixins.scss';

  .card {
    border: 1px solid var(--colorBorder);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: var(--radius);
    width: 100%;

    &.reverse {
      flex-direction: column-reverse;
    }

    &.horizontal {
      &.reverse {
        flex-direction: row-reverse;

        @include notDesktop {
          flex-direction: column-reverse;
        }
      }

      @include desktop {
        flex-direction: row;

        img {
          max-width: 200px;
        }
      }
    }

    img {
      width: 100%;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;

      .title {
        font-size: 24px;
        color: var(--colorText);
      }
      .description {
        color: var(--colorText2);
      }
    }
  }
</style>

<svelte:element this={href ? 'a' : 'div'} href={href ? href : null} title={href ? title : null} class="card" class:horizontal class:reverse>
  {#if image}
    <img src={image} alt="card-image" loading="lazy" />
  {/if}

  <div class="content">
    {#if icon}
      <Svg name={icon} />
    {/if}
    {#if title}
      <h3 class="title">{title}</h3>
    {/if}

    {#if description}
      <div class="description">
        {description}
      </div>
    {/if}

    <slot />
  </div>
</svelte:element>
