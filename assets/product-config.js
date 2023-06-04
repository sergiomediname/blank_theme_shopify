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
  const getProductData = async (slug) => {
    let test = "";

    const data = await fetch(window.Shopify.routes.root + `products/${slug}.js`)
      .then(function (response) {
        // The API call was successful!
        return response.json();
      })
      .then(function (data) {
        // This is the JSON from our response
        return data;
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });

    return data;
  };

  var main = {
    getProductData,
  };

  return main;
});
