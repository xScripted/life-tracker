<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'

  export let profilePicture: string = 'https://pbs.twimg.com/media/GKWHxTuW0AA5QPc?format=jpg&name=900x900'

  interface ILink {
    title: string
    href: string
  }

  let links: ILink[] = [
    { title: 'Ninfomanía', href: '' },
    { title: 'Osteopatía', href: '' },
    { title: 'Esclerosis', href: '' },
  ]

  let options: ILink[] = [
    { title: 'Honolulu', href: '' },
    { title: 'Honolulu', href: '' },
    { title: 'Honolulu', href: '' },
  ]

  let notifications: ILink[] = [
    { title: 'Honolulu', href: '' },
    { title: 'Honolulu', href: '' },
    { title: 'Honolulu', href: '' },
  ]
</script>

<style lang="scss">
  .menu {
    width: 100%;
    height: 80px;
    padding: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--colorBase);

    .left {
      width: fit-content;
      display: flex;
      gap: 10px;

      .link {
        padding: 8px 18px;
        border-radius: 8px;
        transition: 0.3s ease;

        &:hover {
          transition: 0.3s ease;
          box-shadow:
            3px 3px 10px var(--colorBackground),
            -3px -3px 10px var(--colorBase2);
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 20px;

      .profile {
        position: relative;
        height: 50px;
        width: 50px;

        .profile-picture {
          height: 100%;
          width: 100%;
          border-radius: 50px;
          display: flex;
          overflow: hidden;

          box-shadow:
            3px 3px 10px var(--colorBackground),
            -3px -3px 10px var(--colorBase2);

          cursor: pointer;

          img {
            height: 100%;
          }
        }

        &:hover {
          .dropdown-container {
            display: block;
          }
        }
      }

      .notifications {
        transition: 0.3s ease;

        height: 40px;
        width: 40px;
        padding: 5px;
        border-radius: 8px;
        position: relative;

        .bell {
          height: 100%;
          width: 100%;

          cursor: pointer;
        }

        .dropdown-container {
          padding-top: 10px;
          top: 40px;

          .dropdown {
            padding: 10px;

            .options {
              width: 100%;
              margin-right: 0;
              margin-bottom: 0;

              .option {
                padding: 5px 10px;
                border-radius: 8px;
                border: 1px solid var(--colorBase2);

                &:hover {
                  border: 1px solid var(--colorBorder);
                  color: var(--colorText);
                }
              }
            }
          }
        }

        &:hover {
          transition: 0.3s ease;
          box-shadow:
            3px 3px 10px var(--colorBackground),
            -3px -3px 10px var(--colorBase2);

          .dropdown-container {
            display: block;
          }
        }
      }

      .dropdown-container {
        width: fit-content;
        height: fit-content;
        padding-top: 20px;
        position: absolute;

        right: 0px;
        top: 45px;
        display: none;

        .dropdown {
          min-width: 130px;
          padding: 10px 15px;

          background-color: var(--colorBase2);
          border-radius: 8px;

          display: flex;
          flex-direction: column;
          align-items: end;

          .options {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            margin-right: 5px;
            width: fit-content;
            gap: 5px;
          }

          .option:hover {
            color: var(--colorBrand);
          }

          .divisor {
            width: 100%;
            height: 1px;
            background-color: var(--colorBorder);
            margin: 5px 0;
          }

          .sign-out {
            font-size: 13px;
            color: var(--colorText2);

            &:hover {
              color: var(--colorBrand);
            }
          }
        }
      }
    }
  }
</style>

<div class="menu">
  <div class="left">
    {#each links as link}
      <a href={link.href} class="link">{link.title}</a>
    {/each}
  </div>

  <div class="right">
    <div class="notifications">
      <div class="bell">
        <Svg name="bellOff" height="30" width="30" />
      </div>
      <div class="dropdown-container">
        <div class="dropdown">
          <div class="options">
            {#each notifications as notification}
              <a href={notification.href} class="option">{notification.title}</a>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="profile">
      <a class="profile-picture" href="añksdj">
        <img src={profilePicture} alt="" />
      </a>
      <div class="dropdown-container">
        <div class="dropdown">
          <div class="options">
            {#each options as option}
              <a href={option.href} class="option">{option.title}</a>
            {/each}
          </div>
          <div class="divisor" />
          <button class="sign-out">Cerrar sesión</button>
        </div>
      </div>
    </div>
  </div>
</div>
