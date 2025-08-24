// Global variables for legacy components
import _ from 'lodash'
import $ from 'jquery'
import Split from 'split.js'
import Awesomplete from 'awesomplete'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Extend jQuery interface to include tooltip
declare global {
  interface Window {
    _: typeof _
    $: typeof $
    Split: typeof Split
    Awesomplete: typeof Awesomplete
    initial_data: any
  }
  
  interface JQuery {
    tooltip(options?: any): JQuery;
  }
}

window._ = _
window.$ = $
window.Split = Split
window.Awesomplete = Awesomplete

// Add tooltip functionality if not available
if (typeof ($ as any).fn.tooltip === 'undefined') {
  ($ as any).fn.tooltip = function(this: any, options: any) {
    return this.each(function(this: HTMLElement) {
      const $this = $(this);
      if (options === 'show') {
        // Simple tooltip show implementation
        const title = $this.attr('title') || $this.data('original-title');
        if (title) {
          const tooltip = $('<div class="tooltip">' + title + '</div>');
          $('body').append(tooltip);
          const offset = $this.offset();
          if (offset) {
            tooltip.css({
              position: 'absolute',
              top: offset.top - 30,
              left: offset.left,
              background: '#333',
              color: '#fff',
              padding: '5px',
              borderRadius: '3px',
              fontSize: '12px',
              zIndex: 9999
            });
          }
        }
      } else if (options === 'hide') {
        $('.tooltip').remove();
      }
    });
  };
}

export { _, $, Split, Awesomplete }
