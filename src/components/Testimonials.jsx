import { Marquee } from "./ui/marquee";

const reviews = [
  {
    name: "Ekta Patil",
    username: "@ektapatil",
    body: "I've been training at KK Fitness for  months, and it's been an amazing journey! The trainers are supportive, the equipment is great, and the atmosphere keeps me motivated.Perfect place for beginners and experienced gym-goers alike. Highly recommend! 💪🔥",
    img: "/assets/reviews/ekta.png",
  },
  {
    name: "Simran Chadha",
    username: "@simranchadha",
    body: "Best gym in town. Felt like a judgement- free zone- perfect for women of all fitness levels! Attended a garba workshop here which was truly amazing. Enjoyed a lot. Thanks to Karan for organising such an amazing event.",
    img: "/assets/reviews/simran.png",
  },
  {
    name: "Tejas Yeola",
    username: "@tejasyeola",
    body: "Great gym! All the equipments, clean facilities, and friendly staff. Perfect for all fitness levels. Affordable rates make it a top choice. Highly recommend for anyone looking to get fit!",
    img: "/assets/reviews/tejas.png",
  },
  {
    name: "Yashashri Patil",
    username: "@yashashripatil",
    body: "As a woman, I feel incredibly comfortable and welcomed at this gym. The staff and trainers are respectful and supportive, and the atmosphere is always positive. It's a great place to work .",
    img: "/assets/reviews/yashashri.png",
  },
  {
    name: "Shriya Gupta",
    username: "@shriyagupta",
    body: "Had a great experience of harishchandragadh trek with kk fitness n all indian trek Sir and ma’am.",
    img: "/assets/reviews/shriya.png",
  },
  {
    name: "Pallavi Dode",
    username: "@pallavidode",
    body: "This gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and excellent training by Karan Sir, Santosh Sir , Riya Madam and comfortable gym for everyone from beginners to Professionals.",
    img: "/assets/reviews/pallavi.png",
  },
  {
    name: "Jayesh Mahajan",
    username: "@jayeshmahajan",
    body: "I've been training with karan sir for several months now, and the results have been amazing. He is incredibly knowledgeable, motivating and good personal trainer. I highly recommend Karan sir for Personal training.",
    img: "/assets/reviews/jayesh.png",
  },
];

const firstRow = reviews;
const secondRow = [...reviews].reverse();

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={"relative h-fit w-64 cursor-pointer overflow-hidden border p-4 bg-white"}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">
            {name}
          </figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center bg-gray-100 overflow-hidden pb-20">
      <div className="container py-10 max-w-[90%]">
        <p className="text-3xl text-black font-bold">Testimonials</p>
        <h1 className="text-4xl pb-8 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black/80 text-start glow flex-wrap flex-1 p-0">
          What people say...
        </h1>
      </div>
      <Marquee pauseOnHover className="[--duration:20s] [--gap:0.5rem]">
        {firstRow.map((review) => (
          <div className="mx-2">
            <ReviewCard key={review.username} {...review} />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:15s] [--gap:0.5rem]" reverse>
        {secondRow.map((review) => (
          <div className="mx-2">
            <ReviewCard key={`reverse-${review.username}`} {...review} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
