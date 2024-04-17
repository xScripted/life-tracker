<script lang="ts">
  export let image: string = ''
  export let title: string = ''
  export let subtitle: string = ''
  export let description: string = ''
  export let href: string = ''
</script>

<style lang="scss">
  .card-minimalist {
    img {
      width: 100%;
      border-radius: var(--radius);
      object-fit: cover;
    }

    .title {
      color: var(--colorBrand);
    }

    .subtitle {
      color: var(--colorText2);
      font-size: 14px;
    }
  }
</style>

<svelte:element this={href ? 'a' : 'div'} href={href ? href : null} title={href ? title : null} class="card-minimalist">
  <img src={image} alt={title} loading="lazy" />
  <h5 class="title">{title}</h5>
  <span class="subtitle">{subtitle}</span>
  <span class="description">{description}</span>
</svelte:element>
