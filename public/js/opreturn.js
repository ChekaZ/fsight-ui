/*
ACIDDUDE - For Feathercoin.com
*/
angular.module('tanktest', []).filter('tankreplace', function() {  
    return function(input) { 
        var binwords = input.replace(" ", "");
        binwords = binwords.replace("OP_RETURN", "");
				
        var words= "";
        var tmp1 = "";
        var tmp2 = "";
        var i = 0;
        
        for(i=0;i<=(((binwords.length)/2)-1);i++)
        {
          tmp1=binwords.charAt(i*2);//get char
          tmp2=binwords.charAt(i*2+1);
          words+=String.fromCharCode(parseInt("0x"+tmp1+tmp2));//char to ascii
        }
        
        return words;
    };  
});