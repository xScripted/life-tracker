<script lang="ts">
  import Svg from '@/components/essentials/Svg.svelte'
  export let company: string = 'Company name'
  export let logo: string = ''

  const socials = [
    {
      name: 'twitter',
      url: 'url',
    },
    {
      name: 'whatsapp',
      url: 'url',
    },
    {
      name: 'instagram',
      url: 'url',
    },
  ]

  const links = [
    {
      title: 'About me',
      href: '',
    },
    {
      title: 'Contact',
      href: '',
    },
    {
      title: 'FAQs',
      href: '',
    },
  ]
</script>

<style lang="scss">
  .footer {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    background-color: var(--colorBase);

    .details {
      width: 75%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 25px;

      .logo {
        height: 50px;

        img {
          height: 100%;
        }
      }

      .links {
        display: flex;
        align-items: center;
        gap: 50px;

        .link {
          font-size: 15px;

          &:hover {
            color: var(--colorBrand);
          }
        }
      }

      .socials {
        display: flex;
        gap: 10px;

        //same width as logo
        width: 150px;

        .social {
          display: flex;
          align-items: center;
        }
      }
    }

    .legal-section {
      display: flex;
      align-items: center;
      gap: 20px;

      transform: scale(0.85);
      font-size: 13px;
      margin-bottom: 10px;

      color: var(--colorText2);

      a {
        &:hover {
          color: var(--colorBrand);
        }
      }
    }
  }
</style>

<div class="footer">
  <div class="details g-wrapper">
    <div class="logo">
      <img src={logo} alt="" />
    </div>

    <div class="links">
      {#each links as link}
        <div class="link">
          <a href={link.href}>{link.title}</a>
        </div>
      {/each}
    </div>

    <div class="socials">
      {#each socials as social}
        <a href={social.url} class="social">
          <Svg
            name={social.name}
            fill="var(--colorText2)"
            height={social.name === 'twitter' ? '20' : '25'}
            width={social.name === 'twitter' ? '20' : '25'}
          />
        </a>
      {/each}
    </div>
  </div>

  <div class="legal-section">
    <div>© {new Date().getFullYear()} {company}</div>
    <a href="/politica-de-privacidad/" title="Política de Privacidad"> Política de Privacidad </a>
    <a href="/politica-de-cookies/" title="Política de Cookies">Política de Cookies</a>
  </div>
</div>
