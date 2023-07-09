import {h, defineComponent} from 'vue';
import {
  createController,
  RemoteRenderer,
  createRemoteReceiver
} from '@remote-ui/vue/host';

import Button from './Button.vue';
import Div from './Div.vue';
import { createEndpoint } from "@remote-ui/rpc";
const controller = createController({
    Button,
    Div
  });
  const receiver = createRemoteReceiver();
//   const root = createRemoteRoot(receiver.receive);

export const App1 = defineComponent({
  render() {
    return h(RemoteRenderer, {
      receiver,
      controller,
    });
  },
  mounted() {
    const worker = new Worker(new URL("../worker", import.meta.url), {
        type: "module",
      });
  
      const endpoint = createEndpoint(worker);
  
      endpoint.call.renderUI(receiver.receive);
    //   console.log(controller.get(1));
  
    //   return () => {
    //     endpoint.terminate();
    //   };
    // You’ll usually send the receiver.receive function to the remote
    // context, and use it to construct a `@remote-ui/core` `RemoteRoot`
    // object
    // sendReceiverToRemoteContext(receiver.receive);
  },
//   beforeUnmount(){
//     endpoint.terminate();
//   }
});
// here