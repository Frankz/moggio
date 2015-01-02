/** @jsx React.DOM */

var Actions = Reflux.createActions([
	'protocols',
	'status',
	'tracks',
]);

var Stores = {};

_.each(Actions, function(action, name) {
	Stores[name] = Reflux.createStore({
		init: function() {
			this.listenTo(action, this.trigger);
		}
	});
});
