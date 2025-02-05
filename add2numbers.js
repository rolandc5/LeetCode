createList = (numbers) => {
  listNode = null
  for (let i = numbers.length - 1; i >= 0; i--) {
      if (listNode === null) {
          const node = new ListNode(parseInt(numbers[i]));
          listNode = node
      } else {
          const node = new ListNode(parseInt(numbers[i]));
          node.next = listNode;
          listNode = node;
      }
  }
  return listNode;
}

var addTwoNumbers = function(l1, l2) {
  let l1Numbers = [];
  let l1Track = l1;
  let l2Numbers = [];
  let l2Track = l2;
  while (l1Track?.val != null) {
      l1Numbers.push(l1Track.val);
      l1Track = l1Track.next;
  }
  while (l2Track?.val != null) {
      l2Numbers.push(l2Track.val);
      l2Track = l2Track.next;
  }
  l1Joined = BigInt(l1Numbers.reverse().join(''));
  l2Joined = BigInt(l2Numbers.reverse().join(''));
  calculate = (l1Joined + l2Joined).toString().split('').reverse();
  return createList(calculate);
};
