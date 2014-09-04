$(document).ready(function() {
  
  
  // Shopify Product form requirement
  
  selectCallback = function(variant, selector) {
    var $product = $('#product-' + selector.product.id);    
    
    
     // BEGIN SWATCHES
     if (variant) {
       for (i=0;i<variant.options.length;i++) {
         if (parseFloat(jQuery.fn.jquery) < 1.6) {
           jQuery('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]').attr('checked', 'checked');
         }
         else {
           jQuery('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]').prop('checked', true);
         }
       }      
     }
      // END SWATCHES
    
    
    if (variant && variant.available == true) {
      if(variant.compare_at_price > variant.price){
        $('.was', $product).html(Shopify.formatMoney(variant.compare_at_price, $('form', $product).data('money-format')))        
      } else {
        $('.was', $product).text('')
      } 
      $('.product-price', $product).html(Shopify.formatMoney(variant.price, $('form', $product).data('money-format'))) 
      $('.add', $product).removeClass('disabled').removeAttr('disabled').val('ADD TO CART');
    } else {
      var message = variant ? "SOLD OUT" : "Out of Stock";
      $('.was', $product).text('')
      $('.product-price', $product).text(message);
      $('.add', $product).addClass('disabled').attr('disabled', 'disabled').val(message); 
    } 
  }; 
  
  

});
  
