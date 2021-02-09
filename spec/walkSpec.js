describe ('walk', function(){

    it('should say a 2 step walk is false', function(){
        expect(ten_minute_walk(['n', 's'])).toEqual(false);
    });
    it('should say a 10 step walk is true', function(){
        expect(ten_minute_walk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toEqual(true);
    });
});