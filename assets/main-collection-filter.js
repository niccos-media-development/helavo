document.addEventListener("DOMContentLoaded", () => {
    var select_element = document.querySelector(".collection-dropdown .select-wrapper select");
    var dropdown_lists = document.querySelectorAll(".collection-dropdown .select-wrapper .combo-box__option-list .combo-box__option-item");
    var selected_element = document.querySelector(".collection-dropdown .select-wrapper .select__selected-value");
    dropdown_lists.forEach(item => {
        item.addEventListener("click", () => {
            if(selected_element) {
                selected_element.innerHTML = item.value;
            }
            var products = document.querySelectorAll("product-list .product-list__inner product-item");
            products.forEach(product => {
                var parent_collection = product.dataset.collection;
                var selected_value = item.value;
                if(selected_value == parent_collection){
                    product.classList.remove("product-hidden");
                }else {
                    product.classList.add("product-hidden");
                }
            })
        })
    })
})