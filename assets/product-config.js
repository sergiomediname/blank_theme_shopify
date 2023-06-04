(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.ShopifyBlank = factory()));
})(this, function () {
  "use strict";

  /**
   * Obtener data del producto
   * @param {string} slug - Slug del producto
   * @returns {json} Data producto
   */
  const getProductData = (slug) => {
    let test = '';

    fetch(window.Shopify.routes.root + `products/${slug}.js`).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        // console.log(data);
        test = data;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    return test;

    // console.log(slug);
    // if (!slug) {
    //   console.error("No asignaste slug");
    //   return;
    // }

    
    // var request = new XMLHttpRequest();
    // let data = '';
    // request.open(
    //   "GET",
    //   window.Shopify.routes.root + `products/${slug}.js`,
    //   true
    // );

    // request.onload = function () {
    //   if (request.status >= 200 && request.status < 400) {
    //     // Success!
    //     data = JSON.parse(request.responseText);
    //   } else {
    //     // We reached our target server, but it returned an error
    //   }
    // };

    // request.onerror = function () {
    //   // There was a connection error of some sort
    // };

    // request.send();

    // return data;
  }

  var main = {
    getProductData,
  };

  return main;
});

// window.addEventListener("DOMContentLoaded", () => {
//     const selector = document.getElementById("product-select");
//     selector.addEventListener("change", function(event) {
//       console.log(event.target.value);
//     });
// })
