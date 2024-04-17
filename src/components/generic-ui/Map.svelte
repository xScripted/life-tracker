<script lang="ts">
  import 'leaflet/dist/leaflet.css'
  import { onMount } from 'svelte'

  export let lat: number
  export let long: number
  export let zoom: number = 15

  onMount(async () => {
    const L = (await import('leaflet')).default
    const map = L.map('mapa').setView([lat, long], zoom)

    L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.{ext}', {
      maxZoom: 19,
      ext: 'png',
    }).addTo(map)

    L.marker([lat, long]).addTo(map)
  })
</script>

<style lang="scss">
  #mapa {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 500px;
    border-radius: var(--radius);
    z-index: 1;
  }
</style>

<div id="mapa" />
