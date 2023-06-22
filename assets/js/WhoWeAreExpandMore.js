function handleExpandMore() {
    $(".moreless-button").click(function () {
      const expandMore = ".expand-more";
      const expandLess = ".expand-less";
      const parent = $(this).parent();
      $(".moretext", parent).slideToggle();
      const isExpanded = $(this).hasClass("expand-more");

      if (isExpanded) {
        $(expandMore, parent).addClass("d-none");
        $(expandLess, parent).removeClass("d-none");
      } else {
        $(expandLess, parent).addClass("d-none");
        $(expandMore, parent).removeClass("d-none");
      }
    });
  }

  //FUNCTION CALLING
  handleExpandMore();