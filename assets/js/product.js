// Product
// augustahammock.com/shop/?product=shopify-product-handle

$(function() {

  var productHandle     = $('.product').attr('data-product')
    productTitle        = $('.product-title'),
    productType         = $('.product-type'),
    productDescription  = $('.product-description'),
    productVariants     = $('.product-variants'),
    productPrice        = $('.product-price'),
    productImage        = $('.product-image');

    var shopClient = ShopifyBuy.buildClient({
        apiKey:             '031333422074d0234ac4be2f6c55285c',
        myShopifyDomain:    'augusta-hammock-equine-art',
        appId:              '6'
    });

    shopClient.fetchQueryProducts({handle: productHandle})
      .then(function (product) {
        console.log(product[0].attrs);
        console.log(product[0].attrs.title);

        productImage.append('<img src="' + product[0].attrs.images[0].src + '">')
        
        // Populate title, type, and description
        productTitle.html(product[0].attrs.title);
        productType.html(product[0].attrs.product_type);
        productDescription.html(product[0].attrs.body_html);

        var variants = product[0].variants;

        $.each(variants, function(i, variant) {
          var variantHTML = '<li class="variant" data-price="$' + variant.price + '"">' + variant.title + '</li>';

          if (i == 0) {
            productPrice.html('$' + variant.price);
            variantHTML = '<li class="variant selected" data-price="$' + variant.price + '"">' + variant.title + '</li>';
          }

          productVariants.append(variantHTML);
        });

        // Bind variant click events
        $('.select-arrow').on('click', function(){
          if (!productVariants.hasClass('open')) {
            productVariants.addClass('open');
          }
        });

        productVariants.find('li').on('click', function(e){
          if (productVariants.hasClass('open')) {
            productVariants.find('li').removeClass('selected');
            $(e.currentTarget).addClass('selected');
            productVariants.removeClass('open');
            productPrice.html($(e.currentTarget).attr('data-price'));
          } else {
            productVariants.addClass('open');
          }
        });

        $(document).on('click', function(e){
          if (e.target.className != 'product-variants' && 
              e.target.className != 'variant' && 
              e.target.className != 'variant selected' &&
              e.target.className != 'select-arrow') {
            productVariants.removeClass('open');
          }
        });

      })
      .catch(function (e) {
        console.log('Request failed');
        console.log(e);
      });

});
