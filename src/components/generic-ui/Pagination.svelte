<script lang="ts">
  import { onMount } from 'svelte'

  export let currentPage: number
  export let totalPages: number

  let pathName: string = '/blog'

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const queryPage = Number(urlParams.get('page'))

    if (queryPage) currentPage = queryPage

    pathName = window.location.pathname
  })
</script>

<style lang="scss">
  .pagination {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 10px;

    .active {
      color: var(--colorBrand);
      font-weight: bold;
    }

    .hidden {
      visibility: hidden;
    }

    .tools {
      display: flex;

      &.prev {
        justify-self: start;
      }

      &.next {
        justify-self: end;
      }

      a {
        padding: 20px;
        color: var(--colorText2);
      }
    }

    .numbers {
      display: flex;
      justify-content: center;
      width: 100%;

      a,
      .active {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px;
        width: 100%;
        max-width: 60px;
      }
    }
  }
</style>

<div class="pagination">
  <div class="tools prev" class:hidden={currentPage <= 1}>
    <a href={pathName} title="">Primero</a>
    <a href="{pathName}?page={currentPage - 1}">Anterior</a>
  </div>

  <div class="numbers">
    {#each [3, 2, 1] as i}
      {#if currentPage - i > 0}
        <a href="{pathName}?page={currentPage - i}">{currentPage - i}</a>
      {/if}
    {/each}

    <span class="active">{currentPage}</span>

    {#each Array(3) as _, i}
      {#if currentPage + (i + 1) <= totalPages}
        <a href="{pathName}?page={currentPage + (i + 1)}">
          {currentPage + (i + 1)}
        </a>
      {/if}
    {/each}
  </div>

  <div class="tools next" class:hidden={currentPage > totalPages}>
    <a href="{pathName}?page={currentPage + 1}">Siguiente</a>
    <a href="{pathName}?page={totalPages}">Último</a>
  </div>
</div>
