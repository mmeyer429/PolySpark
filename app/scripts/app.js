(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');

    $('#settings-button').on('click', function(e) {
      
      var pages = $('core-animated-pages')[0],
          button = $(this);

      pages.selected = (pages.selected + 1) % pages.children.length;
      button.attr('icon', button.attr('icon') == 'settings' ? 'arrow-back' : 'settings');

    });

    $('paper-toggle-button').on('change', function () {

      var led = this.id,
          status = this.checked;

      console.log('led:',led,'status:',status);

      callJsRemote(led, status);
    })
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
