import $ from "jquery";
import { cards } from "./cards";

var INDENT = 60;
var count = 0;

$(document).ready(function() {
  // alert(cards[0].type);
  $(".cards").html(function() {
    var cardList = "";
    for (var i = 0; i < cards.length; i++) {
      cardList += createCard(i, null);
    }
    return cardList;
  });

  $(".cards").on("keypress click", function(e) {
    if (e.shiftKey && e.altKey) {
      $(".cards").append(createCard(null, "wide"));
    } else if (e.shiftKey) {
      $(".cards").append(createCard(null, "narrow"));
    } else {
      if ($(".card").length > 1) {
        $(".card:last").remove(); // :last - последний элемент в списке
        count -= INDENT;
      }
    }
  });
});

function createCard(number, cardType) {
  var card = "";
  if (number != null) {
    card += "<div class='card card__obj card__obj--" + cards[number].type + "' style='left: " + count + "px'>";
    card += "<div class='card__obj__number'>" + (number + 1) + "</div>";
  } else if (cardType != null) {
    card += "<div class='card card__obj card__obj--" + cardType + "' style='left: " + count + "px'>";
    card += "<div class='card__obj__number'>" + ($(".card").length + 1) + "</div>";
  }
  card += "</div>";
  count += INDENT;
  return card;
}
