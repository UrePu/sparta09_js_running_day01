function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

// ACart 와 BCart 둘다 items 의 가격이 5000씩 깎여있음
//const userBCart = userACart; 이부분이 메모리 주소 복사를 만들어내기 때문에
//자체적으로 지원하는 메소드를 사용하던지 반복문을 통해 값만을 따로 복사해주는 방법 두가지가 있다고 생각합니다.
