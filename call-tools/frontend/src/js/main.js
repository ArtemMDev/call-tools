import Vue from 'vue';

$(document).ready(function () {
    if ($("#SelectCr").length> 0) {
        const SelectCr = require('./vue/SelectCr').default;
        let selectCr = new Vue({
            el: '#SelectCr',
            components: {SelectCr},
            template: '<SelectCr/>',
        })
    }
});


