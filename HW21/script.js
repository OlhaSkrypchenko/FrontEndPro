const $batman = $(".batman");
const $superman = $(".superman");
const $bang = $(".bang");

$(document).keydown(function (key) {
  switch (parseInt(key.which)) {
    case 39:
      $superman.animate({ right: "-=50px" }, "slow");
      break;
    case 37:
      $superman.animate({ right: "+=50px" }, "slow");
      break;
    case 38:
      $superman.animate({ top: "-=50px" }, "slow");
      break;
    case 40:
      $superman.animate({ top: "+=50px" }, "slow");
      break;
    case 68:
      $batman.animate({ left: "+=50px" }, "slow");
      break;
    case 65:
      $batman.animate({ left: "-=50px" }, "slow");
      break;
    case 87:
      $batman.animate({ top: "-=50px" }, "slow");
      break;
    case 83:
      $batman.animate({ top: "+=50px" }, "slow");
      break;
  }
  const batmanCoodsX = $batman.offset().left;
  const supermanCoodsX = $superman.offset().left;

  const batmanCoodsY = $batman.offset().top;
  const supermanCoodsY = $superman.offset().top;

  if (
    batmanCoodsX - supermanCoodsX > -181.9 &&
    batmanCoodsY - supermanCoodsY < 340
  ) {
    console.log($bang.width);
    $bang
      .css("left", `${(batmanCoodsX + supermanCoodsX) / 2}px`)
      .css("top", `${(batmanCoodsY + supermanCoodsY) / 2}px`)
      .fadeIn();
    $batman.animate({ left: "300px", top: 0 }, "slow");
    $superman.animate({ right: "300px", top: 0 }, "slow");
    $bang.fadeOut();
  }
});
