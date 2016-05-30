'use strict'
var unit = {
	GCD: function(a,b){
		if (a==0 && b==0) {return NaN};
		if ((a^0)!=a || (b^0)!=b){return undefined};
		if( a!=0 && b!=0 && (a^0)==a && (b^0)==b){
			if (a == 0)
		        return b;
		    while (b != 0) {
		        if (a > b)
		            a = a - b;
		        else
		            b = b - a;
		    }
		    return a;
		}
	},
	factor:function(a){
		let i = 2;
		let arr = [];
		var b = a;
		if(a>1){
			while(i<=a){
				if(a%i==0){
					arr.push(i);
					a=a/i;
				} else {i+=1;}
			}
			return arr;
		}
		return null;
	},
	sort:function() {
	    var quickSort = function(arr) {
	        var left = [];
	        var right = [];

	        if (arr.length <= 1) return arr;

	        var pivot = arr[0];
	        arr.shift();
	        for (var i = 0; i < arr.length; i++) {
	            arr[i] <= pivot ? left.push(arr[i]) : right.push(arr[i]);
	        }
	        return $.merge($.merge(quickSort(left), $.makeArray(pivot)), quickSort(right));
	    };

	    return {
	        quickSort: quickSort
	    };
	}()
}