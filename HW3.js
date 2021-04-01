'use strict';

    // Lesson 1.

    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log(i + ' - это ноль');
        } else if (i % 2 == 0) {
            console.log(i + ' - это четное число');
        } else {
            console.log(i + ' - это НЕ четное число');
        }
    }


    // Lesson 2.

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);

    // Lesson 3.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

    