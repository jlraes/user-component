({
    alertTest : function(component, event, helper) {
        alert('x');
    },
	confirmTest : function(component, event, helper) {
        var result = confirm('y');
        alert('You have responded: ' + result);
    }

})