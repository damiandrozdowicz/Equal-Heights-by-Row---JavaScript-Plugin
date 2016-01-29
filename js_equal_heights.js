/**
 * JS Equal Heights
 * @version 1.0.0
 * @author Damian Drozdowicz
 * @license The MIT License (MIT)
 *
 * Execute by passing jQuery DOM element - a parent or wrapper.
 * If detectRows is set to false, the tallest heigh from the whole
 * selection will be applied to every element. When set to true, script 
 * looks for a tallest element within the row.
 *
 */



function equalHeights( container, detectRows ) {

  var target = container.children(),
      list = [],
      rows = itemsPerRow = newHeight = 0,
      z = 1,
      newHeight = 0

  // reset
  target.css({
      "height": "auto"
  });

  if (detectRows === true) {
      itemsPerRow = Math.floor(container.outerWidth() / target.outerWidth());
      
      rows = Math.ceil(target.length / itemsPerRow);

      for (var x = newHeight = 0; x < rows; x++) {

          for (var y = 0; y < itemsPerRow; y++, z++) {

              // group elements
              if (z != 0 && (z / itemsPerRow) <= (Math.ceil(z / itemsPerRow))) {
                  target.eq(z - 1).addClass('eq-group-' + Math.ceil(z / itemsPerRow));

                  // current row
                  var current = $("." + 'eq-group-' + (Math.ceil(z / itemsPerRow)));
                  newHeight = current.eq(0).outerHeight();

                  // assign largest value in the row to the scope
                  current.each(function(index) {

                      if (current.eq(index).outerHeight() > newHeight) {
                          newHeight = current.eq(index).outerHeight();
                          current.css("min-height", newHeight);
                      } else {
                          current.eq(index).css("min-height", newHeight);
                      }

                  })

              }

          }
      }
  } else {
      // equalize to the highest element in the scope
      target.each(function(index) {
              if ($(this).height() > newHeight) {
                  newHeight = $(this).height()
              }
          })

      //set height
      target.css("min-height", newHeight);
  }
}

equalHeights( $("#container"), true )