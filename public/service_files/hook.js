
      window.dataLayer = window.dataLayer || [];
      function submitbutton_hook(type){
        console.log(type);
        dataLayer.push({'event': type});
      }
    