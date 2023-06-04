/**
 * Obtener data del producto
 * @param {string} slug - Slug del producto
 * @returns {json} Data producto
 */
function test(slug) {
    if (!slug) {
        console.error("No asignaste slug");
        return;
    }

    var request = new XMLHttpRequest();
    request.open('GET', window.Shopify.routes.root + `products/${slug}.js`, true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) { // Success!
        var data = JSON.parse(request.responseText);
        console.log(data);
      } else { // We reached our target server, but it returned an error
    
      }
    };
    
    request.onerror = function() {
    
      // There was a connection error of some sort
    };
    
    request.send();
}

window.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("product-select");
    selector.addEventListener("change", function(event) {
      console.log(event.target.value);
    });
})