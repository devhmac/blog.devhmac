import siteMetadata from "@/data/siteMetadata"
// import Icon from "@/components/icons"
import Image from "next/image"

export default function Welcome() {
  return (
    <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center space-x-2 pt-8">
        <Image
          src={siteMetadata.image}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-full"
        />
        <div className="hover:text-primary-600 dark:hover:text-primary-400 flex space-x-3 pt-6">
          {/* <Icon kind="twitter" href={siteMetadata.twitter} />
          <Icon kind="linkedin" href={siteMetadata.linkedin} />
          <Icon kind="github" href={siteMetadata.github} /> */}
        </div>
      </div>
      <div className="prose dark:prose-dark pt-8 pb-8 xl:col-span-2">
        <h2>Devin MacGillivray</h2>
        <p>
          I am a Data Analyst, statistical storyteller, and technology enthusiast, with skills in full stack web development. Im a huge coffee nerd, with a love for all things outdoors. This is my personal blog and digital garden, a creative outlet to document my thoughts and interests.
          <br />
          If your interested in my work see the link to my professional portfolio below. Dont hesitate to {" "}
          <a href="https://www.linkedin.com/in/devhmac/"> reach out</a>.
        </p>
        <div className="hover:text-primary-600 dark:hover:text-primary-400 flex space-x-3 pt-6">
          {/* put links in here */}
        </div>
      </div>
    </div>
  )
}