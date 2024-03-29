import siteMetadata from '@/data/siteMetadata'
// import Icon from "@/components/icons"
import Image from 'next/image'
import Link from './Link'

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
        <div className="flex space-x-3 pt-6 hover:text-primary-600 dark:hover:text-primary-400">
          {/* <Icon kind="twitter" href={siteMetadata.twitter} />
          <Icon kind="linkedin" href={siteMetadata.linkedin} />
          <Icon kind="github" href={siteMetadata.github} /> */}
        </div>
      </div>
      <div className=" prose pt-8 pb-8 no-underline dark:prose-dark xl:col-span-2">
        <h2>Devin MacGillivray</h2>
        <p>
          A Data Analyst, Business Intelligence Engineer, and technology enthusiast, with skills
          in full stack web development. I'm a coffee nerd with a love for basketball and all things outdoors.
          This is my personal blog and digital garden, a creative outlet to document my thoughts and
          interests.
          <br />
          If your interested in my work see the link to my professional portfolio below, and don't
          hesitate to <a href="https://www.linkedin.com/in/devhmac/"> reach out</a>.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.devhmac.com/"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span className=" hidden text-white sm:inline">Portfolio</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/devhmac"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="white"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden text-white sm:inline">LinkedIn</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-rose-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-rose-500/10 transition selection:bg-white/30 hover:bg-rose-500/80 hover:shadow-rose-500/5 focus:ring-rose-500/40 dark:bg-rose-400 dark:text-zinc-900 dark:shadow-rose-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-rose-400/80 dark:hover:shadow-rose-400/5 dark:focus:ring-rose-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://github.com/devhmac"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="white"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden text-white sm:inline">GitHub</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-sky-500 py-2 px-2.5 font-medium text-white shadow-lg shadow-sky-500/10 transition selection:bg-white/30 hover:bg-sky-500/80 hover:shadow-sky-500/5 focus:ring-sky-500/40 dark:bg-sky-400 dark:text-zinc-900 dark:shadow-sky-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-sky-400/80 dark:hover:shadow-sky-400/5 dark:focus:ring-sky-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://twitter.com/devhmac"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
                fill="white"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden text-white sm:inline">Twitter</span>
          </a>
        </div>
        <div className="flex space-x-3 pt-6 hover:text-gray-600 dark:hover:text-gray-400">
          {/* put links in here */}
        </div>
      </div>
    </div>
  )
}
