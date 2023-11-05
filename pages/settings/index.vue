<template>
  <div class="settings">
    <div class="settings_color">
      <span>Jedi Saber Color: {{ jediSaber }}</span>
      <input type="color" v-model="jediSaber" @input="setJediSaber">
      <button class="" @click="restoreJediSaberColor">Restore</button>
    </div>
    <div class="settings_saber_container">
      <Lightsaber 
        class="settings_saber"
        saberLength="900px"
        :saberColor="jediSaber"
      />
    </div>
    <div class="settings_color">
      <span>Darth Saber Color: {{ darthSaber }}</span>
      <input type="color" v-model="darthSaber" @input="setDarthSaber">
      <button @click="restoreDarthSaberColor">Restore</button>
    </div>
    <div class="settings_saber_container">
      <Lightsaber
        class="settings_saber"
        saberLength="900px"
        :saberColor="darthSaber"
      />
    </div>
    <Btn @click="saveSettings" class="w-20">Save</Btn>
  </div>
</template>

<script setup>
const jediSaber = ref('#03e9f4')
const darthSaber = ref('#e9033f')

const setJediSaber = (event) => {
  jediSaber.value = event.target.value
}
const setDarthSaber = (event) => {
  darthSaber.value = event.target.value
}

const restoreJediSaberColor = () => {
  jediSaber.value = '#03e9f4'
}
const restoreDarthSaberColor = () => {
  darthSaber.value = '#e9033f'
}

const saveSettings = () => {
  localStorage.setItem('jediSaberColor', jediSaber.value)
  localStorage.setItem('darthSaberColor', darthSaber.value)
  alert('Settings saved')
}

onBeforeMount(() => {
  const localJedi = localStorage.getItem('jediSaberColor')
  const localDarth = localStorage.getItem('darthSaberColor')

  if (localJedi) jediSaber.value = localJedi
  if (localDarth) darthSaber.value = localDarth
})
</script>

<style lang="scss" scoped>
.settings {
  &_color {
  @apply flex gap-2;
  }
  &_saber_container {
    @apply flex justify-start;
  }
  &_saber {
    @apply scale-[0.25] md:scale-[0.5] sm:ml-[55px];
  }
}
</style>