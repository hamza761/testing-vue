<template>
    <div>
      <slot></slot>
    </div>
  </template>
  
  <script>
  // Vue automatically handles turning `onPress` props for this component
  // into a listener for the `press` event
  export default {
    name: 'Div',
  };
  </script>