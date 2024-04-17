<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  let panel: string = 'Admin'
  let logo: string = 'https://pbs.twimg.com/media/GKWHxTuW0AA5QPc?format=jpg&name=900x900'

  interface IMenuItem {
    item: string
    icon: string
    href: string
    subitem?: IMenuItem[]
  }

  let menuItemsUp: IMenuItem[] = [
    { item: 'About us', icon: 'instagram', href: '' },
    { item: 'Privacy', icon: 'instagram', href: '' },
    { item: 'Imagination', icon: 'instagram', href: '' },
    { item: 'Imagination', icon: 'instagram', href: '' },
  ]

  let menuItemsDown: IMenuItem[] = [
    { item: 'Perfil', icon: 'person', href: '' },
    { item: 'Ajustes', icon: 'settings', href: '' },
  ]

  let expanded: boolean = true
</script>

<style lang="scss">
  .menu-container {
    transition: 0.3s ease;

    height: 100dvh;
    width: 175px;
    background-color: var(--colorBase);
    padding: 10px;
    position: absolute;
    left: 0;

    display: flex;
    flex-direction: column;
    gap: 50px;
    overflow: hidden;

    &.active {
      width: 66px;
      transition: 0.3s ease;

      .logo {
        transition: 0.3s ease;
        width: 46px !important;
      }

      .brand {
        display: none;
      }

      .item {
        transition: 0.3s ease;
        opacity: 0;
      }

      .expand {
        transform: rotate(180deg);
        transition: 0.5s ease;
      }
    }

    .details {
      height: fit-content;
      width: 100%;
      display: flex;
      gap: 15px;

      .logo {
        transition: 0.5s ease;

        height: 60px;
        width: 60px;
        flex-shrink: 0;

        img {
          border-radius: 8px;
          width: 100%;
        }
      }

      .brand {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .company {
          font-weight: 500;
        }

        .panel {
          font-size: 13px;
          font-weight: lighter;
        }
      }
    }

    .menus {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      .menu-items {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .menu-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: 8px;
          font-weight: 300;
          transition: 0.3s ease;

          :global(*) {
            flex-shrink: 0;
          }

          &:hover {
            transition: 0.3s ease;
            box-shadow:
              3px 3px 10px var(--colorBackground),
              -3px -3px 10px var(--colorBase2);
          }
        }

        .expand {
          transition: 0.5s ease;

          width: fit-content;
          padding: 8px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>

<div class="menu-container" class:active={!expanded}>
  <div class="details">
    <div class="logo"><img src={logo} alt="" /></div>
    <div class="brand">
      <span class="company">Tramita</span>
      <div class="panel">{panel}</div>
    </div>
  </div>

  <div class="menus">
    <div class="menu-items">
      {#each menuItemsUp as menuItem}
        <a class="menu-item" href={menuItem.href}>
          <Svg name={menuItem.icon} height="30" width="30" />
          <span class="item">{menuItem.item}</span>
        </a>
      {/each}
    </div>

    <div class="menu-items">
      {#each menuItemsDown as menuItem}
        <a class="menu-item" href={menuItem.href}>
          <Svg name={menuItem.icon} height="30" width="30" />
          <span class="item">{menuItem.item}</span>
        </a>
      {/each}
      <button class="expand" on:click={() => (expanded = !expanded)} title={expanded ? 'Minimizar' : 'Expandir'}>
        <Svg name="arrow2" height="30" width="30" />
      </button>
    </div>
  </div>
</div>
