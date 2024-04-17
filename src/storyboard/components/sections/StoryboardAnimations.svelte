<script lang="ts">
  import Dropdown from '@/storyboard/components/StoryboardDropdown.svelte'
  import Component from '@/storyboard/components/StoryboardComponent.svelte'
  import Button from '@/components/essentials/Button.svelte'

  /*🪄 Animations*/
  import { animReveal } from '@/utils/reveal'
  import { onMount } from 'svelte'

  let isMounted: boolean = false
  let open: boolean = false

  $: if (isMounted && open) setTimeout(() => animReveal(), 0)

  onMount(() => {
    isMounted = true
  })
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>

<Dropdown title="🪄 Animations" bind:open>
  <Component name="reveal.ts" importName="  import {'{'} animReveal {'}'} from '@/utils/reveal'">
    <h1 reveal="1">Example of text reveal</h1>
  </Component>
</Dropdown>
