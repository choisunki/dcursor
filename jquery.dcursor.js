;(function($){
    /**
     * @param {String} opts.cursorEl - 커서 요소명 기본 `.cursor`
     * @param {Number} opts.baseOpacity - 커서 기본 투명도
     * @param {Number} opts.hoverOpacity - 커서 활성 투명도
     * @param {Number} opts.bottom - 커서 하단 기본 좌표
     * @param {Number} opts.bottomAct - 커서 하단 활성 좌표
     * */    
    $.fn.dCursor = function( opts ){

        var options = $.extend({
            baseOpacity     : 0.3,      // 커서 기본 투명도
            hoverOpacity    : 1,        // 커서 활성 투명도
            bottom          : -90,      // 커서 하단 기본 좌표
            cursorEl        : '.cursor'
        }, opts);

        return this.each(function(){
            
            var $scope = $(this);
            var $cursor = $scope.find(options.cursorEl);
            var inits = function(){
                $cursor.css({
                    top     : (options.top?options.top:'auto'),
                    right   : (options.right?options.right:'auto'),
                    bottom  : (options.bottom?options.bottom:'auto'),
                    left    : (options.left?options.left:'auto'),
                    opacity : options.baseOpacity
                });
            };

            inits();


            $scope.on('mouseenter mouseleave mousemove mousedown mousedup',function(e){

                var mouseX = e.clientX;
                var cursorWidth = $cursor.width();

                if( e.type === 'mouseenter' ) {

                    $cursor.css({
                        top     : (options.top?options.top:'auto'),
                        right   : (options.right?options.right:'auto'),
                        bottom  : (options.bottomAct?options.bottomAct:options.bottom?options.bottom:'auto'),
                        left    : e.clientX - ( cursorWidth / 2 ) ,
                        opacity : options.hoverOpacity
                    });

                } else if( e.type === 'mouseleave' ) {

                    $cursor.stop(true, true).animate({
                        top     : (options.top?options.top:'auto'),
                        right   : (options.right?options.right:'auto'),
                        bottom  : (options.bottom?options.bottom:'auto'),
                        left    : (options.left?options.left:'auto'),
                        opacity : options.baseOpacity
                    });

                } else if( e.type === 'mousemove' ) {

                    $cursor.css({
                        left    : e.clientX - ( cursorWidth / 2 )
                    });

                } else if( e.type === 'mousedown' ) {
                    
                } else if( e.type === 'mousedup' ) {

                }

            });

        })
    }

})(jQuery);
