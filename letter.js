// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
//pass in latter into function


module.exports = function(input){
    this.charac = input;
    this.appear = false;
    this.letterRender = function(){
        return !(this.appear) ? "_" : this.charac;
    };
    //check if the input equals the character
    this.returnUnderlying = function(){
        console.log(this.appear)
        if(this.appear){
            return this.charac
        }
        return "_"
    };

    this.checkerFunc = function(letterPassed){
        if(letterPassed==this.charac){
            this.appear = true
            
        }
    };
    //change the appears

};

