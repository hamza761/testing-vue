import {h} from 'vue';
import { createEndpoint, retain } from "@remote-ui/rpc";
// For convenience, this library re-exports several values from @remote-ui/core, like createRemoteRoot
import {
  createRenderer,
  createRemoteRoot,
  createRemoteVueComponent,
} from '@remote-ui/vue';

// a host component — see implementation below for getting strong
// typing on the available props.
import Counter from './remote/Counter.vue'
import { Button, Div } from './remote/components';
console.log(Counter);
// const RemoteButton = createRemoteVueComponent('Button');

// Assuming we get a function that will communicate with the host...
const renderUI =(receiver) => {
  retain(receiver)
  const remoteRoot = createRemoteRoot(receiver, {
    components: ['Button', 'Div'],
  });
  
  const {createApp} = createRenderer(remoteRoot);
  
createApp({
    render() {
      return h(Div, {}, () => ['btn testing', h(Button, {onPress: ()=> console.log('testing')}, 'testing here')]);
    },
  }).mount(remoteRoot);
    remoteRoot.mount()
}
  const endpoint = createEndpoint(self);
  
  endpoint.expose({ renderUI });
  // at the here