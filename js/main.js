$(document).ready(function() {
    var cartCount = sessionStorage.getItem('cartCount') || 0;
    var checkoutCartCount = sessionStorage.getItem('cartCount') || 0;
    var products = [];
    $('#cart-badge').text(checkoutCartCount);
    $('#checkout-cart').text(cartCount);
    $('#add-cart').click(function() {
        var productName = $(this).data('product');
        var currentCount = parseInt($('#cart-badge').text().trim());
        var newCount = currentCount + 1;
        products.push({'name': productName, 'count': 1});
        $('#cart-badge').text(newCount);
        var productJson = JSON.stringify(products);
        sessionStorage.setItem('products', productJson);
        sessionStorage.setItem('cartCount', newCount);
    });

    
});