var view = {

    showNumber: function(n){
        var el = document.getElementById("showResult")
        el.innerHTML = n;
    }
};

var model = {
    number: 0,

    calculate: function (x,y) {

        this.number = x * y;
        var result = this.number;

        view.showNumber(result);
    }
};

var controller = {
    handelClick: function(){
        model.calculate(3, 6);
    }
};

(function() {
    var app = {
        init: function() {
            this.main();
            this.event();
        },

        main: function() {

        },

        event: function() {
            var el = document.getElementById("calcUser");
            el.onclick = controller.handelClick;
        }
    };
    
    app.init();
}());