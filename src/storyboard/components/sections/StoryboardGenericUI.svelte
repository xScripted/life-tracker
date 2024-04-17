<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'
  import Button from '@/components/essentials/Button.svelte'

  /*🧩 Generic UI*/
  import Card from '@/components/generic-ui/cards/Card.svelte'
  import CardMinimalist from '@/components/generic-ui/cards/CardMinimalist.svelte'
  import Modal from '@/components/generic-ui/Modal.svelte'
  import Map from '@/components/generic-ui/Map.svelte'
  import Opinions from '@/components/generic-ui/Opinions.svelte'
  import Pagination from '@/components/generic-ui/Pagination.svelte'
  import Faqs from '@/components/generic-ui/Faqs.svelte'
  import FaqsCategory from '@/components/generic-ui/FaqsCategory.svelte'
  import Gallery from '@/components/generic-ui/Gallery.svelte'
  import ContactForm from '@/components/generic-ui/ContactForm.svelte'
  import Slider from '@/components/generic-ui/Slider.svelte'
  import SliderX from '@/components/generic-ui/SliderX.svelte'

  let modal: boolean = false

  const faqsCategoryData = [
    {
      question: '¿Cómo puedo programar una visita a una propiedad?',
      answer:
        'Puedes programar una visita a través de nuestra página web, seleccionando la propiedad de tu interés y eligiendo la fecha y hora que mejor te convenga. También puedes llamar a nuestra oficina para agendar una visita.',
      category: 'Visitas',
    },
    {
      question: '¿Qué necesito para poder alquilar una propiedad?',
      answer:
        'Para alquilar una propiedad, necesitarás presentar una identificación válida, prueba de ingresos, referencias de alquiler anteriores y, en algunos casos, un informe de crédito. Nuestro equipo te guiará a través del proceso de aplicación.',
      category: 'Alquilar',
    },
    {
      question: '¿Puedo comprar una propiedad si soy extranjero?',
      answer:
        'Sí, los extranjeros pueden comprar propiedades en nuestra región. Sin embargo, hay algunos requisitos adicionales y es posible que necesites asistencia legal. Nuestro equipo está aquí para ayudarte en cada paso del proceso.',
      category: 'Compra',
    },
    {
      question: '¿Qué gastos adicionales debo considerar al comprar una casa?',
      answer:
        'Al comprar una casa, debes considerar gastos adicionales como impuestos de transmisión, gastos de notaría, tasas de registro, y posiblemente, costos de renovación o reparación. Te proporcionaremos una estimación detallada de estos costos para la propiedad de tu interés.',
      category: 'Compra',
    },
    {
      question: '¿Cómo puedo listar mi propiedad para la venta o alquiler?',
      answer:
        'Para listar tu propiedad con nosotros, simplemente contacta a nuestra oficina y uno de nuestros agentes se pondrá en contacto contigo para programar una evaluación de tu propiedad y discutir los siguientes pasos.',
      category: 'Alquilar',
    },
  ]
</script>

<style lang="scss">
  .slot-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding-bottom: 20px;

    :global(.card) {
      height: fit-content;
    }
  }

  .row-span {
    grid-row: span 2;
  }

  .padding {
    padding: 20px;
    width: 100%;
  }

  .slot-cards-hor {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>

<Dropdown title="🧩 Generic UI">
  <div class="auto-columns wide">
    <div class="row-span">
      <Component name="Card.svelte" importName="import Card from '@/components/generic-ui/cards/Card.svelte'">
        <div class="slot-cards">
          <Card title="Noteworthy technology acquisitions 2021" />
          <Card
            title="Noteworthy technology acquisitions 2021"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Card
            href="/"
            icon="twitter"
            title="Noteworthy technology acquisitions 2021"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Card
            icon="twitter"
            title="Noteworthy technology acquisitions 2021"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Card
            image="https://flowbite-svelte.com/images/image-1.webp"
            icon="twitter"
            title="Noteworthy technology acquisitions 2021"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Card
            image="https://flowbite-svelte.com/images/image-1.webp"
            title="Noteworthy technology acquisitions 2021"
            reverse
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Card
            title="Noteworthy technology acquisitions 2021"
            reverse
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          >
            <Button>Button example</Button>
          </Card>
        </div>

        <div class="slot-cards-hor">
          <Card
            image="https://flowbite-svelte.com/images/image-1.webp"
            horizontal
            icon="twitter"
            title="Noteworthy technology acquisitions 2021"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />

          <Card
            image="https://flowbite-svelte.com/images/image-1.webp"
            horizontal
            reverse
            icon="twitter"
            title="Noteworthy technology acquisitions 2021"
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />
        </div>
      </Component>
    </div>

    <Component
      name="FaqsCategory.svelte"
      importName="import FaqsCategory from '@/components/generic-ui/FaqsCategory.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true }}
    >
      <FaqsCategory faqsCategories={faqsCategoryData} />
    </Component>

    <Component
      name="Map.svelte"
      importName="import Map from '@/components/generic-ui/Map.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true, bugs: true }}
    >
      <Map lat={41.390205} long={2.154007} zoom={11} />
    </Component>

    <Component name="Faqs.svelte" importName="import Faqs from '@/components/generic-ui/Faqs.svelte'">
      <Faqs />
    </Component>

    <Component
      name="CardMinimalist.svelte"
      importName="import Modal from '@/components/generic-ui/CardMinimalist.svelte'"
      attributes={{ done: false, responsive: true }}
    >
      <div class="slot-cards">
        <CardMinimalist
          image="https://static.wikia.nocookie.net/valorant/images/5/5c/Loading_Screen_Sunset.png"
          title="Sunset"
          subtitle="The new valorant map unveiled at valorant champions"
        />

        <CardMinimalist
          href="/"
          image="https://static.wikia.nocookie.net/valorant/images/5/5c/Loading_Screen_Sunset.png"
          title="Sunset"
          subtitle="The new valorant map unveiled at valorant champions"
        />
        <CardMinimalist
          image="https://static.wikia.nocookie.net/valorant/images/5/5c/Loading_Screen_Sunset.png"
          title="Sunset"
          subtitle="The new valorant map unveiled at valorant champions"
        />
      </div>
    </Component>

    <Component
      name="Modal.svelte"
      importName="import Modal from '@/components/generic-ui/Modal.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true, bugs: true }}
    >
      <Modal bind:open={modal} padding="20px">
        <div slot="modal-header">
          <h2>Example modal title</h2>
        </div>

        Modal content! - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eius illum quisquam inventore corrupti libero
        nostrum, quibusdam repellat odio, quidem porro magnam nemo at incidunt vero excepturi maxime cumque fuga!
      </Modal>
      <Button click={() => (modal = !modal)}>Open modal</Button>
    </Component>

    <Component name="Opinions.svelte" importName="import Opinions from '@/components/generic-ui/Opinions.svelte'">Opinions</Component>

    <Component name="Slider.svelte" importName="import Slider from '@/components/generic-ui/Slider.svelte'">
      <Slider>
        {#each new Array(5) as _}
          <div class="padding">
            <Card
              title="Noteworthy technology acquisitions 2021"
              description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            />
          </div>
        {/each}
      </Slider>
    </Component>

    <Component name="SliderX.svelte" importName="import SliderX from '@/components/generic-ui/SliderX.svelte'">
      <SliderX>
        {#each new Array(5) as _}
          <div class="padding">
            <Card
              title="Noteworthy technology acquisitions 2021"
              description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            />
          </div>
        {/each}
      </SliderX>
    </Component>

    <Component
      name="Pagination.svelte"
      importName="import Pagination from '@/components/generic-ui/Pagination.svelte'"
      attributes={{ done: true, hydrate: true, responsive: false }}
    >
      <Pagination currentPage={2} totalPages={20} />
    </Component>

    <Component name="Gallery.svelte" importName="import Gallery from '@/components/generic-ui/Gallery.svelte'">Gallery</Component>
    <Component
      name="ContactForm.svelte"
      importName="import ContactForm from '@/components/generic-ui/ContactForm.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true }}
    >
      <ContactForm />
    </Component>
  </div>
</Dropdown>
