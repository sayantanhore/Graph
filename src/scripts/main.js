// Entry point of the application, this will initiate the app, no functionality will be here directly.

define(['jquery'], $ => {
  function _init() {
    $(document).ready(() => {
      $('#container').css({
        'width': '30px',
        'height': '30px',
        'background-color': 'red'
      });
    });
  }

  _init();
});
