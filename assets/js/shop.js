// Shop
// augustahammock.com/shop

$(function() {

  var printsList = $('.prints-list');

    var shopClient = ShopifyBuy.buildClient({
        apiKey: '031333422074d0234ac4be2f6c55285c',
        domain: 'augusta-hammock-equine-art.myshopify.com',
        appId:  '6'
    });

    shopClient.fetchQueryProducts({collection_id: 142011333, sort_by: 'collection-default'})
      .then(function (products) {

        $.each($(products), function(i, product){
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

});
