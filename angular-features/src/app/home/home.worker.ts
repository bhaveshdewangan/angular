/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
  // console.log(this, window, this.window, this.document, document)
  console.log("inside worker file ", data)
  // postMessage("data sent from worker")
});
