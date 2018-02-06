 /*-------------------------------------------------------------------------------
    Home Typed - Typed js
  -------------------------------------------------------------------------------*/

  $(function(){
    $(".element").typed({
      strings: ["22nd Street Ventures",
                        "We are active investors",
                        "We seek curious founders" , "making great things."],
                    typeSpeed: 100,
                     contentType: 'html',
                     showCursor: false,
                     loop: true,
                     loopCount: true,
      });
    });