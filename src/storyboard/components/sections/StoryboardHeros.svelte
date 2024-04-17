<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'

  /*🦸‍♀️ Heros*/
  import Hero from '@/components/heros/Hero.svelte'
</script>

<style lang="scss">
</style>

<Dropdown title="🦸‍♀️ Heros">
  <div class="auto-columns">
    <Component
      sample
      name="Hero.svelte"
      importName="import Hero from '@/components/heros/Hero.svelte'"
      attributes={{ done: true, hydrate: true, responsive: true }}
    >
      <Hero />
    </Component>
  </div>
</Dropdown>
