<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'

  /*🃏 Templates*/
  import Lightweight from '@/components/templates/Lightweight.svelte'
</script>

<style lang="scss">
</style>

<Dropdown title="🃏 Templates">
  <div class="auto-columns">
    <Component name="Lightweight.svelte" attributes={{ done: true, hydrate: true, responsive: true }}>
      <Lightweight />
    </Component>
  </div>
</Dropdown>
