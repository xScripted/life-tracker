<script lang="ts">
  import Button from '@/components/essentials/Button.svelte'
  import Svg from '@/components/essentials/Svg.svelte'

  const scrollTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
</script>

<style lang="scss">
  :global(.scroll-zero) {
    position: fixed;
    width: 100px;
    height: 100px;
    bottom: 10px;
    right: 10px;
    z-index: 10;
  }

  :global(.scroll-zero-arrow) {
    transform: rotateZ(-180deg) translateY(-2px);
  }
</style>

<Button customClass="scroll-zero" click={scrollTop}>
  <Svg name="arrow" className="scroll-zero-arrow" />
</Button>
