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
