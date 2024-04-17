<script lang="ts">
  interface IMenuItem {
    href: string
    title: string
    dropdown?: IMenuItem[]
  }

  const items: IMenuItem[] = [
    {
      href: '/',
      title: 'Element 1',
      dropdown: [
        {
          href: '/',
          title: 'Sub Element 1',
        },
        {
          href: '/',
          title: 'Sub Element 2',
        },
        {
          href: '/',
          title: 'Sub Element 3',
        },
      ],
    },
    {
      href: '/',
      title: 'Element 2',
    },
    {
      href: '/',
      title: 'Element 3',
      dropdown: [
        {
          href: '/',
          title: 'Sub Element 1-3',
        },
        {
          href: '/',
          title: 'Sub Element 2-3',
        },
        {
          href: '/',
          title: 'Sub Element 3-3',
        },
      ],
    },
  ]

  let open: boolean = false
</script>

<style lang="scss">
  @import '../../../sass/mixins.scss';

  $menuHeight: 80px;
  .menu {
    background-color: var(--colorBackground);
    border-bottom: 1px solid var(--colorBorder);
    height: $menuHeight;
    z-index: 7;

    .g-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .items {
        display: flex;

        .item-group {
          padding: 27px;

          &:hover .dropdown {
            display: flex;
          }

          .item {
            color: var(--colorText);

            &:hover {
              color: var(--colorBrand);
            }
          }

          .dropdown {
            display: none;
            position: absolute;
            overflow: hidden;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
            padding: 20px;
            background-color: var(--colorBackground);
            border: 1px solid var(--colorBorder);
            border-radius: var(--radius);
          }
        }
      }

      .items-mobile,
      .burger {
        display: none;
      }

      @include notDesktop {
        .items {
          display: none;
        }

        .items-mobile {
          display: none;
          position: absolute;
          flex-direction: column;
          width: 100%;
          padding: 20px;
          height: calc(100dvh - $menuHeight);
          top: 0px;
          left: 0;
          background-color: var(--colorBase);

          &.open {
            display: flex;
          }

          .item,
          .sub-item {
            padding: 10px;
          }

          .sub-item {
            color: var(--colorText2);
            padding-left: 20px;
          }
        }

        .burger {
          display: block;
          margin-top: 2px;
        }
      }
    }
  }
</style>

<div class="menu">
  <div class="g-wrapper">
    <a href="/" class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Logo" height="40px" />
      <span>Pinterest</span>
    </a>

    <div class="items">
      {#each items as item}
        <div class="item-group">
          <a class="item" href={item.href} title={item.title}>{item.title}</a>

          {#if item.dropdown}
            <div class="dropdown">
              {#each item.dropdown as subItem}
                <a class="item" href={subItem.href} title={subItem.title}>{subItem.title}</a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <button class="burger" on:click={() => (open = !open)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="var(--colorText)" viewBox="0 -960 960 960"
        ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg
      >
    </button>

    <div class="items-mobile" class:open>
      {#each items as item}
        <a class="item" href={item.href} title={item.title}>{item.title}</a>

        {#if item.dropdown}
          {#each item.dropdown as subItem}
            <a class="sub-item" href={subItem.href} title={subItem.title}>{subItem.title}</a>
          {/each}
        {/if}
      {/each}
    </div>
  </div>
</div>
