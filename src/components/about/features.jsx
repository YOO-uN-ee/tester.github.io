import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: <EyeIcon className="h-6 w-6" strokeWidth={2} />,
    title,
    description, if you were the only one",
  },
  {
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />
    ),
    title,
    description, our hearts turn colder. Cause pain is what we go through",
  },
  {
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title,
    description,
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title,
    description, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    title,
    description, too.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title,
    description, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

export function FeatureSectionOne() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="dark" className="mb-2 font-bold text-lg">
          Social Analytics
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Turn your idea into a startup
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSectionOne;
