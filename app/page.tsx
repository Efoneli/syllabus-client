'use client'
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [showLoginPrompt, setShowLoginPrompt] = useState(true);
  
  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [isLoading, user, router]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by &nbsp;
          <code className="font-mono font-bold">  <a
              href="/api/auth/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Sign In
            </a></code>
        </p>
       
      </div>

      <div className=" relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-orange-100 after:via-orange-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-orange-900 after:dark:via-[#611d02] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
   <div className="flex flex-col items-center justify-center">
   <p>Welcome to </p>
        <h1 className="text-4xl">WDAT SYLLABUS</h1>
   </div>
        
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <div
          
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
           
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about tech stacks using their docs.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
         
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Web development in an interactive courses with videos!
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Videos{" "}
          
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter videos for videos.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{" "}
           
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Build and deploy your project to a shareable URL with Vercel.
          </p>
        </div>
      </div>
    </main>
  );
}




// 'use client';

// import { useUser } from '@auth0/nextjs-auth0/client';
// import Image from 'next/image';

// export default function ProfileClient() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   return (
//     user && (
//       <div>
//         <Image src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// }