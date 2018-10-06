const blogPosts = [
  {
    _id: "1",
    title: "How to cook eggs",
    content: "Put in pan and boil for 5 minutes.",
    author: "Sarah Brown",
    category: { _id: "1a", name: "Food" },
    publishDate: "2018-01-03T19:04:28.809Z",
    favourited: true
  },
  {
    _id: "2",
    title: "How to make chocolates",
    content: "Chop down cocoa trees.",
    author: "Jim Smith",
    category: { _id: "2a", name: "Food" },
    publishDate: "2018-01-03T19:14:28.809Z"
  },
  {
    _id: "3",
    title: "How to write a book",
    content: "Get a pen and write something.",
    author: "Timmy Main",
    category: { _id: "3a", name: "Books" },
    publishDate: "2017-01-03T19:04:28.809Z"
  },
  {
    _id: "4",
    title: "Riding a bike 101",
    content: "Riding a bike is good exercise",
    author: "Harry Styles",
    category: { _id: "4a", name: "Exercise" },
    publishDate: "2008-01-03T19:04:28.809Z"
  }
];

export function getPosts() {
  return blogPosts;
}
