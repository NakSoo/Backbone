var RouteMenu = Backbone.View.extend({
    el: '#routemenu',  //'el' defines which element to be used as the view reference
    events: {
        'click a' : 'onClick'
    },
    onClick: function( e ) {
        router.navigate('/');
    }
});
var Router = Backbone.Router.extend({
    routes: {
        'route/:id' : 'defaultRoute'
    },
});
var routemenu = new RouteMenu();
Backbone.history.start();