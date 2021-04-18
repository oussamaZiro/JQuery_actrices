$(document).ready(function(){
    
    var mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = mainMenuItems.length,
    openedIndex = 2,
    
    init = function() {
        brandEvent();
        if(validIndex(openedIndex)){
                animateItem(mainMenuItems.eq(openedIndex), true, 150);
            }
    },
        
    brandEvent = function() {
            mainMenuItems.children(".image").click(function(){
            var newIndex = $(this).parent().index(),
                item = mainMenuItems.eq(newIndex);
            
            if (openedIndex === newIndex) {
                animateItem(item, false, 150);
                openedIndex = -1;
            }
            else {
                if (validIndex(newIndex)) {
                    animateItem(mainMenuItems.eq(openedIndex), false, 150);
                    openedIndex = newIndex;
                    animateItem(item, true, 150);
                }
            }
            
        });
        
        $(".button").hover(
            function(){
            $(this).addClass("hoverd");
        },
            function(){
            $(this).removeClass("hoverd");    
        }
        );
        
        $(".button").click(function(){
            var newIndex = $(this).index();
            item = mainMenuItems.eq(newIndex);
            
            if (openedIndex === newIndex) {
                animateItem(item, false, 150);
                openedIndex = -1;
            }
            else {
                if (validIndex(newIndex)) {
                    animateItem(mainMenuItems.eq(openedIndex), false, 150);
                    openedIndex = newIndex;
                    animateItem(item, true, 150);
                }
            }
            
        });
    },
            
    validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);  
    },
    animateItem = function(item, toOpen, speed){
            var colorImage = item.find(".color"),
                itemParam = toOpen ? {width: "420px"} : {width: "140px"},
                colorImageParam = toOpen ? { left: "0px"} : { left: "140px"};
            colorImage.animate(colorImageParam, speed);
            item.animate(itemParam, speed);
    };
    init();
    
});