// Product
// augustahammock.com/shop/?product=shopify-product-handle

$(function() {

  var productContainer  = $('.product'),
    productHandle       = productContainer.attr('data-product-handle'),
    productTitle        = $('.product-title'),
    productType         = $('.product-type'),
    productDescription  = $('.product-description'),
    productVariants     = $('.product-variants'),
    productPrice        = $('.product-price'),
    productImage        = $('.product-image'),
    addToCartButton     = $('.add-to-cart');

    var shopClient = ShopifyBuy.buildClient({
        apiKey: '031333422074d0234ac4be2f6c55285c',
        domain: 'augusta-hammock-equine-art.myshopify.com',
        appId:  '6'
    });

    shopClient.fetchQueryProducts({handle: productHandle})
      .then(function (product) {

        productContainer.attr('data-product-id', product[0].attrs.product_id);
        productImage.append('<img src="' + product[0].attrs.images[0].src + '">');
        productTitle.html(product[0].attrs.title);
        productType.html(product[0].attrs.product_type);
        productDescription.html(product[0].attrs.body_html);

        var variants = product[0].variants;

        if (variants.length == 1) {
            $('.js-price').append('<p class="product-price">' + variants[0].title + '</p>');
        }


        // $.each(variants, function(i, variant) {
        //   var variantHTML = '<li class="variant" data-price="$' + variant.price + '" data-variant-id="' + variant.id + '">' + variant.title + '</li>';

        //   if (i == 0) {
        //     productPrice.html('$' + variant.price);
        //     variantHTML = '<li class="variant selected" data-price="$' + variant.price + '" data-variant-id="' + variant.id + '">' + variant.title + '</li>';
        //   }

        //   productVariants.append(variantHTML);
        // });

        // // Bind variant click events
        // $('.select-arrow').on('click', function(){
        //   if (!productVariants.hasClass('open')) {
        //     productVariants.addClass('open');
        //   }
        // });

        // productVariants.find('li').on('click', function(e){
        //   if (productVariants.hasClass('open')) {
        //     productVariants.find('li').removeClass('selected');
        //     $(e.currentTarget).addClass('selected');
        //     productVariants.removeClass('open');
        //     productPrice.html($(e.currentTarget).attr('data-price'));
        //   } else {
        //     productVariants.addClass('open');
        //   }
        // });

        // $(document).on('click', function(e){
        //   if (e.target.className != 'product-variants' && 
        //       e.target.className != 'variant' && 
        //       e.target.className != 'variant selected' &&
        //       e.target.className != 'select-arrow') {
        //     productVariants.removeClass('open');
        //   }
        // });

      })
      .catch(function (e) {
        console.log('Request failed');
        console.log(e);
      });
});
