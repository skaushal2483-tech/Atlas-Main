import "../../styles/community/Posts.css";

function Posts() {
    const posts = [
        {
            id: 1,
            name: "Suryansh Gupta",
            initial: "S",
            category: "Bodybuilding",
            time: "2h ago",
            content:
                "Finally hit a new personal best on my bench today. Consistency really does pay off.",
            likes: 24,
            comments: 6,
        },
        {
            id: 2,
            name: "Somesh Arora",
            initial: "S",
            category: "Nutrition",
            time: "4h ago",
            content:
                "Meal prepping for the week makes staying on track so much easier. What are your go-to high protein meals?",
            likes: 18,
            comments: 9,
        },
        {
            id: 3,
            name: "Rohan Singh",
            initial: "R",
            category: "Motivation",
            time: "6h ago",
            content:
                "You don't need to feel motivated every day. Show up anyway.",
            likes: 31,
            comments: 4,
        },
        {
            id: 4,
            name: "Kabir Roy",
            initial: "K",
            category: "Bodybuilding",
            time: "8h ago",
            content:
                "Leg day absolutely destroyed me today, but getting stronger every week makes it worth it.",
            likes: 27,
            comments: 7,
        },
        {
            id: 5,
            name: "Preekshit Kaushal",
            initial: "P",
            category: "Nutrition",
            time: "10h ago",
            content:
                "Started tracking my protein intake properly this week and it has made a bigger difference than I expected.",
            likes: 16,
            comments: 5,
        },
        {
            id: 6,
            name: "Aditya Verma",
            initial: "A",
            category: "Motivation",
            time: "12h ago",
            content:
                "Small progress is still progress. Don't let a slow week convince you that you're not improving.",
            likes: 42,
            comments: 11,
        },
        {
            id: 7,
            name: "Sanya Kapoor",
            initial: "S",
            category: "Bodybuilding",
            time: "1d ago",
            content:
                "Trying to improve my form instead of chasing heavier weights has completely changed my workouts.",
            likes: 22,
            comments: 8,
        },
        {
            id: 8,
            name: "Vikram Rao",
            initial: "V",
            category: "Nutrition",
            time: "1d ago",
            content:
                "What are you guys having after your workouts? Looking for some easy high protein meal ideas.",
            likes: 19,
            comments: 13,
        },
        {
            id: 9,
            name: "Ananya Patel",
            initial: "A",
            category: "Motivation",
            time: "1d ago",
            content:
                "A bad workout is still better than skipping it completely. Just keep showing up.",
            likes: 35,
            comments: 6,
        },
        {
            id: 10,
            name: "Rahul Malhotra",
            initial: "R",
            category: "Bodybuilding",
            time: "2d ago",
            content:
                "Six months ago I couldn't imagine being this consistent. Really proud of how far I've come.",
            likes: 48,
            comments: 12,
        },
        {
            id: 11,
            name: "Meera Joshi",
            initial: "M",
            category: "Nutrition",
            time: "2d ago",
            content:
                "Keeping healthy snacks around has made it so much easier to avoid random junk food during the day.",
            likes: 21,
            comments: 5,
        },
        {
            id: 12,
            name: "Dev Sharma",
            initial: "D",
            category: "Motivation",
            time: "3d ago",
            content:
                "Your routine doesn't have to be perfect. It just needs to be something you can actually stick with.",
            likes: 39,
            comments: 10,
        },
    ];

    return (
        <section className="community-posts">

            {posts.map((post) => (
                <article
                    className="community-post"
                    key={post.id}
                >

                    {/* =================================
              HEADER
          ================================= */}

                    <div className="community-post-header">

                        <div className="community-post-avatar">
                            {post.initial}
                        </div>

                        <div className="community-post-author">

                            <span className="community-post-name">
                                {post.name}
                            </span>

                            <span
                                className={`community-post-category ${post.category
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                            >
                                {post.category}
                            </span>

                        </div>

                        <span className="community-post-time">
                            {post.time}
                        </span>

                    </div>


                    {/* =================================
              CONTENT
          ================================= */}

                    <p className="community-post-content">
                        {post.content}
                    </p>


                    {/* =================================
              ACTIONS
          ================================= */}

                    <div className="community-post-actions">

                        <button
                            type="button"
                            className="community-post-action"
                        >
                            <span className="community-post-action-icon">
                                ♡
                            </span>

                            <span>
                                {post.likes}
                            </span>
                        </button>

                        <button
                            type="button"
                            className="community-post-action"
                        >
                            <span className="community-post-action-icon">
                                ○
                            </span>

                            <span>
                                {post.comments}
                            </span>
                        </button>

                    </div>

                </article>
            ))}

        </section>
    );
}

export default Posts;