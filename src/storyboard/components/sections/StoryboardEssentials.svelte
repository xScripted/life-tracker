<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'

  /*⭐ Essentials*/
  import Input from '@/components/essentials/Input.svelte'
  import Checkbox from '@/components/essentials/Checkbox.svelte'
  import Button from '@/components/essentials/Button.svelte'
  import Range from '@/components/essentials/Range.svelte'
  import Select from '@/components/essentials/Select.svelte'
  import MenuBasic from '@/components/essentials/menus/MenuBasic.svelte'
  import MenuLogin from '@/components/essentials/menus/MenuLogin.svelte'
  import MenuVertical from '@/components/essentials/menus/MenuVertical.svelte'
  import Footer from '@/components/essentials/footers/Footer.svelte'
  import DarkMode from '@/components/essentials/DarkMode.svelte'
  import Svg from '@/components/essentials/Svg.svelte'

  const inputDataExamples = {
    text: '',
    number: null,
    currency: '',
    email: '',
    password: '',
    phone: '',
    textarea: '',
  }

  const checkboxDataExamples = {
    checkbox_A: false,
    checkbox_B: true,
    toggle_A: false,
    toggle_B: true,
  }
</script>

<style lang="scss">
  :global(.c-Input) {
    grid-row: span 3;
  }

  .slot-inputs {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .slot-checkboxes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
    justify-items: center;
    padding: 20px 0;
  }
</style>

<Dropdown title="⭐ Essentials">
  <h3>Form Inputs</h3>

  <div class="auto-columns">
    <Component
      name="Input.svelte"
      importName="import Input from '@/components/essentials/Input.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true }}
    >
      <div class="slot-inputs">
        <Input bind:value={inputDataExamples.text} label="Label" placeholder="Placeholder example, error=true" maxlength={10} error />
        <Input
          id="1"
          bind:value={inputDataExamples.number}
          type="number"
          label="Type number"
          placeholder="Only numbers"
          prefix="youtube"
          sufix="youtube"
          min={0}
          max={30}
          step="2"
          maxlength={5}
        />

        <Input
          id="2"
          bind:value={inputDataExamples.currency}
          type="currency"
          label="Type currency"
          placeholder="formatPrice 10.000 => 10000"
          prefix="twitter"
          sufix="€"
        />

        <Input
          id="3"
          bind:value={inputDataExamples.email}
          type="email"
          label="Type email"
          placeholder="example@test.com"
          prefix="email"
          sufix="€"
        />

        <Input id="4" bind:value={inputDataExamples.phone} type="tel" label="Type tel (phone)" prefix="phone" />
        <Input id="5" bind:value={inputDataExamples.password} type="password" label="Type password" />

        <Input id="6" bind:value={inputDataExamples.textarea} type="textarea" label="Type textarea" />
      </div>

      <p class="notes">
        {JSON.stringify(inputDataExamples)}
      </p>
    </Component>

    <Component
      name="Select.svelte"
      importName="import Select from '@/components/essentials/Select.svelte'"
      attributes={{ done: false, hydrate: true, responsive: true }}
    >
      <Select icon="whatsapp" options={['Pikachu', 'Charmander', 'Squirtle']} />
      <Select
        options={[
          { main: 'Barcelona', children: ['Centro', 'Gracia', 'Raval'] },
          { main: 'Ripollet', children: ['Centro', 'Norte', 'Sur'] },
        ]}
      />
    </Component>

    <Component
      name="Checkbox.svelte"
      importName="import Checkbox from '@/components/essentials/Checkbox.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true }}
    >
      <div class="slot-checkboxes">
        <Checkbox bind:value={checkboxDataExamples.checkbox_A} />
        <Checkbox bind:value={checkboxDataExamples.toggle_A} toggle />
        <Checkbox bind:value={checkboxDataExamples.checkbox_B} />
        <Checkbox bind:value={checkboxDataExamples.toggle_B} toggle />
      </div>

      <p class="notes">
        {JSON.stringify(checkboxDataExamples)}
      </p>
    </Component>

    <Component name="Color.svelte" importName="import Color from '@/components/essentials/Color.svelte'">Color</Component>

    <Component name="DateTime.svelte" importName="import DateTime from '@/components/essentials/DateTime.svelte'">Date'n Time</Component>

    <Component name="Range.svelte" importName="import Range from '@/components/essentials/Range.svelte'">
      <Range />
    </Component>
  </div>

  <h3>Others</h3>
  <div class="auto-columns">
    <Component
      name="Button.svelte"
      importName="import Button from '@/components/essentials/Button.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true }}
    >
      <div class="flex-around">
        <Button type="main" click={() => alert('Button clicked!')}>
          <span>Main</span>
        </Button>
        <Button type="secondary">
          <span>Secondary</span>
        </Button>
        <Button disabled>
          <span>Disabled</span>
        </Button>
      </div>
    </Component>

    <Component
      name="Darkmode.svelte"
      importName="import DarkMode from '@/components/essentials/DarkMode.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true }}
    >
      <DarkMode />
    </Component>

    <Component
      name="Svg.svelte"
      importName="import Svg from '@/components/essentials/Svg.svelte'"
      attributes={{ done: true, responsive: true }}
    >
      <div class="flex-around">
        <Svg name="twitter" />
        <Svg name="twitter" fill="var(--colorBrand)" width="50" height="50" />
        <Svg name="twitter" />
      </div>

      <a href="/private/svgs" class="notes">Visitar /private/svgs</a>
    </Component>
  </div>

  <h3>Menus</h3>
  <div class="auto-columns">
    <Component name="Menu.svelte" importName="import Menu from '@/components/essentials/menus/Menu.svelte'">
      <MenuBasic />
    </Component>

    <Component name="MenuVertical.svelte" importName="import MenuVertical from '@/components/essentials/menus/MenuVertical.svelte'">
      <MenuVertical />
    </Component>

    <Component name="MenuLogin.svelte" importName="import MenuLogin from '@/components/essentials/menus/MenuLogin.svelte'">
      <MenuLogin />
    </Component>
  </div>

  <h3>Footers</h3>
  <div class="auto-columns">
    <Component
      name="Footer.svelte"
      importName="import Menu from '@/components/essentials/footers/Footer.svelte'"
      attributes={{ done: true, responsive: true }}
    >
      <Footer
        company="ValoMaster"
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
      />
    </Component>
  </div>
</Dropdown>
