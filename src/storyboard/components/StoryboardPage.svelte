<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Essentials from '@/storyboard/components/sections/StoryboardEssentials.svelte'
  import GenericUI from '@/storyboard/components/sections/StoryboardGenericUI.svelte'
  import Miscellaneous from '@/storyboard/components/sections/StoryboardMiscellaneous.svelte'
  import Heros from '@/storyboard/components/sections/StoryboardHeros.svelte'
  import Templates from '@/storyboard/components/sections/StoryboardTemplates.svelte'
  import Animations from '@/storyboard/components/sections/StoryboardAnimations.svelte'
  import ScrollZero from '@/components/generic-ui/ScrollZero.svelte'
</script>

<style lang="scss">
  @import '../../sass/mixins.scss';
  .storyboard {
    display: flex;

    h1 {
      font-weight: bold;
    }

    :global(.storyboard-title) {
      font-size: 20px;
      color: var(--colorText2);
      text-align: center;
      padding-top: 20px;
      padding-bottom: 10px;
    }

    .container {
      padding: 10px;
      width: 100%;

      :global(.auto-columns) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px 0;
      }

      :global(.auto-columns.wide) {
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));

        @include notDesktop {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
      }

      :global(.notes) {
        font-size: 10px;
        color: var(--colorText2);
        text-align: center;
        grid-column: span 2;
        opacity: 0.5;
      }

      /* Component slots*/

      :global(.flex-around) {
        display: flex;
        justify-content: space-around;
        padding: 25px 0;
      }

      .tasks {
        padding: 50px 0 500px 0;

        .task {
          display: grid;
          align-items: start;
          grid-template-columns: 200px 1fr;
          gap: 20px;
          padding: 20px;
          .component {
            color: var(--colorBrand);
            font-weight: bold;
          }
          .issue {
            color: var(--colorText2);
          }
        }
      }
    }
  }
</style>

<div class="storyboard">
  <div class="container">
    <h1 class="g-title center">STORYBOARD</h1>

    <Essentials />

    <GenericUI />

    <Miscellaneous />

    <Animations />

    <Heros />

    <Templates />

    <Dropdown title="🌐 Interest pages"></Dropdown>

    <Dropdown title="📌 Tasks">
      <div class="tasks">
        <div class="task">
          <div class="component">Generica</div>
          <div class="issue">Componentes responsive & dark mode ready</div>
        </div>

        <div class="task">
          <div class="component">Generica</div>
          <div class="issue">Importar componentes que valgan la pena del Storyboard antiguo</div>
        </div>

        <div class="task">
          <div class="component">Map.svelte</div>
          <div class="issue">Al poner darkmode los botones de +/- se modifican pero el bg no</div>
        </div>

        <div class="task">
          <div class="component">Modal.svelte</div>
          <div class="issue">Poder bloquear el scroll del body sin que haga el salto</div>
        </div>

        <div class="task">
          <div class="component">DarkMode.svelte</div>
          <div class="issue">Cuando cargas la page en dark hay un blink blanco</div>
        </div>

        <div class="task">
          <div class="component">AccodrionGallery.svelte</div>
          <div class="issue">Bajar el brightness a las fotos que no estén selected</div>
        </div>

        <div class="task">
          <div class="component">Hero.svelte</div>
          <div class="issue">Mejorar hero</div>
        </div>

        <div class="task">
          <div class="component">Footer.svelte</div>
          <div class="issue">Hacer el footer</div>
        </div>
      </div>
    </Dropdown>
  </div>

  <ScrollZero />
</div>
