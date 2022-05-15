const keys = Array.from(document.querySelectorAll('.key'));
const order = [1, 8, 0, 4, 7, 6, 9, 2, 5, 3];

keys.map((key, i) => {
  let orderIndex = order.indexOf(i);
  let animation = key.animate([
  { transform: 'translateY(0px)' },
  { transform: 'translateY(2px)' },
  { transform: 'translateY(0px)' }],
  {
    duration: 200,
    iterations: 1,
    easing: 'cubic-bezier(0.37, 0, 0.63, 1)',
    direction: 'normal',
    delay: orderIndex * 100 });


  animation.onfinish = () => {
    setTimeout(() => {animation.play(0);}, 1100);
  };


});