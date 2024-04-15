<template>
  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2023-{{ new Date().getFullYear() }} CTO De Lyon
      </p>
    </template>

    <template #right>
      <UButton to="https://www.linkedin.com/groups/12921552/" target="_blank" icon="i-simple-icons-linkedin" />
    </template>
  </UFooter>
</template>
