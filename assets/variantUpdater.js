function getVariantFromOptions() {
  let variantArr = [];
  $('.product-options select').map(function (i, el) {
    variant = { value: $(el).val(), index: $(el).data('index') };
    variantArr.push(variant);
  });
  return variantArr;
}

function updateHistoryState(variant) {
  if (!history.replaceState || !variant) {
    return;
  }

  var newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?variant=' +
    variant.id;

  window.history.replaceState({ path: newurl }, '', newurl);
}

$('.product-options select').on('change', function () {
  var selectedValues = getVariantFromOptions();
  var variants = window.product.variants;

  // Search for product variants based on what was selected in the dropdowns
  var found = _.find(variants, function (variant) {
    return selectedValues.every(function (values) {
      return _.isEqual(variant[values.index], values.value);
    });
  });
  updateHistoryState(found);
  $('#variant-id').val(found.id);
});
