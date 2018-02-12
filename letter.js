// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
//pass in latter into function


module.exports = function(let){
    this.charac = let;
    this.appear = false;
    this.letterRender = function(){
        return !(this.appear) ? "_" : this.charac;
    };
}