// Shop
// augustahammock.com/shop

$(function() {

  var printsList = $('.prints-list');

    var shopClient = ShopifyBuy.buildClient({
        apiKey:             '031333422074d0234ac4be2f6c55285c',
        myShopifyDomain:    'augusta-hammock-equine-art',
        appId:              '6'
    });

    shopClient.fetchQueryProducts({collection_id: 142011333, sort_by: 'collection-default'})
      .then(function (products) {

        $.each($(products), function(i, product){
          // console.log(product);
          // console.log(product.attrs.title);

          // var variants = product.variants,
          //   variantsText = '<p class="small">Sizes: ';

          // console.log('variants.length = ' + variants.length);

          // $.each(variants, function(i, variant) {
          //   console.log('i = ' + i);

          //   if (i+1 == variants.length) {
          //     variantsText += variant.title;

          //   } else if (i+1 < variants.length && variants.length > 2) {
          //     variantsText += variant.title + ', and '

          //   } else if (i+1 < variants.length && variants.length == 2) {
          //     variantsText += variant.title + ' and '

          //   } else {
          //     variantsText += variant.title + ', ';
          //   }

          //   i++;
          // });

          // variantsText += '</p>';

          printsList.append('' +
            '<li>' +
              '<a href="?product=' + product.attrs.handle + '">' +
                '<div class="product-image">' +
                  '<img src="' + product.attrs.images[0].src + '"">' +
                '</div>' +
                '<h4>' + product.attrs.title + '</h4>' +
              '</a>' +
            '</li>' +
          '');
        })
      })
      .catch(function () {
        console.log('Request failed');
      });

    // shopClient.fetchQueryProducts({handle: 'fine-art-print-cowgirl'})
    //   .then(function (product) {
    //     console.log(product);
    //   })
    //   .catch(function () {
    //     console.log('Request failed');
    //   });

});
