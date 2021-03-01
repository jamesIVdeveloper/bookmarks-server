const { v4: uuid } = require("uuid");

const bookmarks = [
  {
    id: uuid(),
    title: "Thinkful",
    url: "https://www.thinkful.com/",
    description: "Think outside the classroom",
    rating: 5,
  },
  {
    id: uuid(),
    title: "YouTube",
    url: "https://www.youtube.com/",
    description: "Full of video content",
    rating: 5,
  },
  {
    id: uuid(),
    title: "Stack Overflow",
    url: "https://stackoverflow.com/",
    description: "Where answers are found",
    rating: 4,
  },
];

module.exports = { bookmarks };
