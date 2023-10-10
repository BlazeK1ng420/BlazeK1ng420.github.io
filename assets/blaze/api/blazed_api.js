/* 
 * ================================================
 * |    HANDLE LIGHT AND DARK MODE TOGGLES AND    |
 * |   DYNAMICALLY LOAD THEMES INTO A DROPDOWN   |
 * ================================================
*/
(() => {
  'use strict'
  fetch('/assets/blaze/api/local_api.json')
    .then(response => response.json())
    .then(data => load(data));
    function load(data) {
        const themes = data.themes;
        const dropdownMenu = document.querySelector('.dropdown-menu');
        
    themes.forEach((value, index) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.classList.add('dropdown-item');
      link.href = '#'; 
      link.textContent = value.name;
      link.addEventListener('click', () => {
        applyTheme(value);
        localStorage.setItem('selectedTheme', JSON.stringify(value));
    });
      listItem.appendChild(link);
      dropdownMenu.appendChild(listItem);
    });
      const savedTheme = JSON.parse(localStorage.getItem('selectedTheme'));
      if (savedTheme) {
        applyTheme(savedTheme);
      } else {
        // Default theme when nothing is saved in localStorage
        applyTheme(themes[0]);
      }
  }
  function applyTheme(theme) {
    document.querySelector('#theme')
      .setAttribute('href', theme.css);
    document.querySelector('.navbar')
      //.textContent = theme.name;
}
  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }
  setTheme(getPreferredTheme())
  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')
    if (!themeSwitcher) {
      return
    }
    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })
    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
    if (focus) {
      themeSwitcher.focus()
    }
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })
  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())
    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
/* 
 * ================================================
 * |   TEXT EFFECTS: FADING, FLIPPING, SPINNING, ECT.   |
 * ================================================
*/
!(function($) {

  $.fn.animatedHeadline = function(options) {
    var settings = $.extend({
      // Below are the default settings.
      animationType: "rotate-1",
      animationDelay: 2500,
      barAnimationDelay: 3800,
      barWaiting: 800,
      lettersDelay: 50,
      typeLettersDelay: 150,
      selectionDuration: 500,
      typeAnimationDelay: 1300,
      revealDuration: 600,
      revealAnimationDelay: 1500
    }, options);

    var duration = settings.animationDelay;

    this.each(function() {
      var headline = $(this);

      if (settings.animationType) {
        if (settings.animationType == 'type' || settings.animationType == 'rotate-2' || settings.animationType == 'rotate-3' || settings.animationType == 'scale') {
          headline.find('.ah-headline')
            .addClass('letters ' + settings.animationType);
        } else if (settings.animationType == 'clip') {
          headline.find('.ah-headline')
            .addClass(settings.animationType + ' is-full-width');
        } else {
          headline.find('.ah-headline')
            .addClass(settings.animationType);
        }
      }

      singleLetters($('.ah-headline.letters')
        .find('b'));

      if (headline.hasClass('loading-bar')) {
        duration = settings.barAnimationDelay;
        setTimeout(function() {
          headline.find('.ah-words-wrapper')
            .addClass('is-loading')
        }, settings.barWaiting);
      } else if (headline.hasClass('clip')) {
        var spanWrapper = headline.find('.ah-words-wrapper'),
          newWidth = spanWrapper.width() + 10;
        spanWrapper.css('width', newWidth);
      } else if (!headline.find('.ah-headline')
        .hasClass('type')) {
        //assign to .ah-words-wrapper the width of its longest word
        var words = headline.find('.ah-words-wrapper b'),
          width = 0;
        words.each(function() {
          var wordWidth = $(this)
            .width();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find('.ah-words-wrapper')
          .css('width', width);
      };

      //trigger animation
      setTimeout(function() {
        hideWord(headline.find('.is-visible')
          .eq(0))
      }, duration);
    });

    function singleLetters(words) {
      words.each(function() {
        var word = $(this),
          letters = word.text()
            .split(''),
          selected = word.hasClass('is-visible');
        for (i in letters) {
          if (word.parents('.rotate-2')
            .length > 0) letters[i] = '<em>' + letters[i] + '</em>';
          letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
        }
        var newLetters = letters.join('');
        word.html(newLetters)
          .css('opacity', 1);
      });
    }

    function hideWord(word) {
      var nextWord = takeNext(word);

      if (word.parents('.ah-headline')
        .hasClass('type')) {
        var parentSpan = word.parent('.ah-words-wrapper');
        parentSpan.addClass('selected')
          .removeClass('waiting');
        setTimeout(function() {
          parentSpan.removeClass('selected');
          word.removeClass('is-visible')
            .addClass('is-hidden')
            .children('i')
            .removeClass('in')
            .addClass('out');
        }, settings.selectionDuration);
        setTimeout(function() {
          showWord(nextWord, settings.typeLettersDelay)
        }, settings.typeAnimationDelay);

      } else if (word.parents('.ah-headline')
        .hasClass('letters')) {
        var bool = (word.children('i')
          .length >= nextWord.children('i')
          .length) ? true : false;
        hideLetter(word.find('i')
          .eq(0), word, bool, settings.lettersDelay);
        showLetter(nextWord.find('i')
          .eq(0), nextWord, bool, settings.lettersDelay);

      } else if (word.parents('.ah-headline')
        .hasClass('clip')) {
        word.parents('.ah-words-wrapper')
          .animate({
          width: '2px'
        }, settings.revealDuration, function() {
          switchWord(word, nextWord);
          showWord(nextWord);
        });

      } else if (word.parents('.ah-headline')
        .hasClass('loading-bar')) {
        word.parents('.ah-words-wrapper')
          .removeClass('is-loading');
        switchWord(word, nextWord);
        setTimeout(function() {
          hideWord(nextWord)
        }, settings.barAnimationDelay);
        setTimeout(function() {
          word.parents('.ah-words-wrapper')
            .addClass('is-loading')
        }, settings.barWaiting);

      } else {
        switchWord(word, nextWord);
        setTimeout(function() {
          hideWord(nextWord)
        }, settings.animationDelay);
      }
    }

    function showWord(word, duration) {
      if (word.parents('.ah-headline')
        .hasClass('type')) {
        showLetter(word.find('i')
          .eq(0), word, false, duration);
        word.addClass('is-visible')
          .removeClass('is-hidden');

      } else if (word.parents('.ah-headline')
        .hasClass('clip')) {
        word.parents('.ah-words-wrapper')
          .animate({
          'width': word.width() + 10
        }, settings.revealDuration, function() {
          setTimeout(function() {
            hideWord(word)
          }, settings.revealAnimationDelay);
        });
      }
    }

    function hideLetter(letter, word, bool, duration) {
      letter.removeClass('in')
        .addClass('out');

      if (!letter.is(':last-child')) {
        setTimeout(function() {
          hideLetter(letter.next(), word, bool, duration);
        }, duration);
      } else if (bool) {
        setTimeout(function() {
          hideWord(takeNext(word))
        }, settings.animationDelay);
      }

      if (letter.is(':last-child') && $('html')
        .hasClass('no-csstransitions')) {
        var nextWord = takeNext(word);
        switchWord(word, nextWord);
      }
    }

    function showLetter(letter, word, bool, duration) {
      letter.addClass('in')
        .removeClass('out');

      if (!letter.is(':last-child')) {
        setTimeout(function() {
          showLetter(letter.next(), word, bool, duration);
        }, duration);
      } else {
        if (word.parents('.ah-headline')
          .hasClass('type')) {
          setTimeout(function() {
            word.parents('.ah-words-wrapper')
              .addClass('waiting');
          }, 200);
        }
        if (!bool) {
          setTimeout(function() {
            hideWord(word)
          }, settings.animationDelay)
        }
      }
    }

    function takeNext(word) {
      return (!word.is(':last-child')) ? word.next() : word.parent()
        .children()
        .eq(0);
    }

    function takePrev(word) {
      return (!word.is(':first-child')) ? word.prev() : word.parent()
        .children()
        .last();
    }

    function switchWord(oldWord, newWord) {
      oldWord.removeClass('is-visible')
        .addClass('is-hidden');
      newWord.removeClass('is-hidden')
        .addClass('is-visible');
    }
  };
}(jQuery));

$(function() {
  // initialize the plugin
  // and then specify the animation type:
  $('.selector')
    .animatedHeadline({
    animationType: 'rotate-1'
  });
  $('.selector2')
    .animatedHeadline({
    animationType: 'scale'
  });
  $('.selector3')
    .animatedHeadline({
    animationType: 'loading-bar'
  });
  $('.selector4')
    .animatedHeadline({
    animationType: 'rotate-3'
  });
  $('.selector5')
    .animatedHeadline({
    animationType: 'rotate-2'
  });
  $('.selector6')
    .animatedHeadline({
    animationType: 'type'
  });
  $('.selector7')
    .animatedHeadline({
    animationType: 'clip'
  });
})

