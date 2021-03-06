(function(module) {
  var articleDisplay = {};

  articleDisplay.populateFilters = function() {
    $('#projects > article').each(function() {
      if ($(this).hasClass('articleContent')) {
        var optionAuthContent = ($(this).attr('data-author'));
        var newAuthOptionTag = '<option value="' + optionAuthContent + '">' + optionAuthContent + '</option>';
        if ($('#author-sort option[value="' + optionAuthContent + '"]').length === 0) {
          $('#author-sort').append(newAuthOptionTag);
        }

        var optionCatContent = ($(this).attr('data-category'));
        var newCatOptionTag = '<option value="' + optionCatContent + '">' + optionCatContent + '</option>';
        if ($('#category-sort option[value="' + optionCatContent + '"]').length === 0) {
          $('#category-sort').append(newCatOptionTag);
        }
      }
    });
  };

  articleDisplay.authorSort = function() {
    $('#author-sort').on('change', function() {
      var $authChoice = $(this).val();
      $('article').hide();
      if ($authChoice) {
        $('article[data-author="' + $authChoice + '"]').fadeIn(500);
      } else {
        $('.articleContent').fadeIn(500);
      }
      $('#category-sort').val('');
    });
  };

  articleDisplay.categorySort = function() {
    $('#category-sort').on('change', function() {
      var $catChoice = $(this).val();
      $('article').hide();
      if ($catChoice) {
        $('article[data-category="' + $catChoice + '"]').fadeIn(500);
      } else {
        $('.articleContent').fadeIn(500);
      }
      $('#author-sort').val('');
    });
  };

  articleDisplay.teaserControl = function() {
  //Change from partial to full view of article
  };

  articleDisplay.hamburgerControl = function() {
    $('.icon-menu').on('click', function() {
      $('#topNav').toggle();
      $('.links').on('click', function() {
        $('#topNav').toggle();
      });
    });
  };

  $(window).resize(function() {
    if (window.innerWidth > 640) {
      $('#topNav').show();
    } else {
      $('#topNav').hide();
    };
  });

  module.articleDisplay = articleDisplay;

})(window);
