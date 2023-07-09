<template>
    <button type="button" @click="$emit('press')">
      <slot></slot>
    </button>
  </template>
  
  <script>
  // Vue automatically handles turning `onPress` props for this component
  // into a listener for the `press` event
  export default {
    name: 'Button',
    emits: ['press'],
  };
  </script>