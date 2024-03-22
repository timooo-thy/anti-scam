import { FC } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home: FC = () => {
  return (
    <main className="flex min-h-[calc(100dvh-168px)] flex-col items-center">
      <div className="my-[75px] flex w-9/12 flex-col gap-10 md:my-[120px] md:w-8/12 xl:w-6/12 ">
        <h1 className="text-2xl font-bold md:text-center md:text-4xl">
          SG Anti-Scam AI: Empowering Your Online Safety
        </h1>
        <h2 className="text-xl font-semibold md:text-center  md:text-2xl">
          Protect Yourself from Scams with the Power of AI
        </h2>
        <Button className="mb-10 h-9 self-center text-base text-white md:w-1/4 md:text-lg">
          <Link href="/upload">Try it out!</Link>
        </Button>
        <h2 className="mb-10 text-center text-2xl font-semibold md:text-4xl">
          How it works?
        </h2>
        <div className="flex flex-col text-lg ">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <Image
              src="/1.svg"
              width="0"
              height="0"
              alt="upload image"
              className="h-auto w-[250px] md:w-[500px]"
              priority
            />

            <div className="flex flex-col gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-semibold text-white">
                1
              </div>
              <p className="text-wrap text-base md:text-lg">
                <strong className="text-xl md:text-3xl">
                  Upload Conversations
                </strong>
                <br />
                <br />
                Ever felt uneasy about a conversation on Carousell? Wonder no
                more. Simply upload screenshots of your conversations and let
                peace of mind begin. Our platform is your first step towards
                scam-free transactions. Say goodbye to second-guessing with just
                a click.
              </p>
            </div>
          </div>
          <Image
            src="/secondLine.svg"
            alt="secondLine"
            width="0"
            height="0"
            className="my-10 h-auto w-[250px] self-center md:hidden md:w-[500px]"
          />
          <Image
            src="/firstLine.svg"
            width="0"
            height="0"
            className="my-10 hidden h-auto w-[250px] -rotate-45 self-center md:block md:w-[500px]"
            alt="firstLine"
          />
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <div className="order-2 flex flex-col gap-5 md:order-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-semibold text-white">
                2
              </div>
              <p className="text-wrap text-base md:text-lg">
                <strong className="text-xl md:text-3xl">AI Detection</strong>
                <br />
                <br />
                Dive into the future of scam protection. Our cutting-edge AI
                sifts through conversations, spotting scam patterns with high
                success rate. From too-good-to-be-true offers to phishing lures,
                our AI will be guarding your online interactions.
              </p>
            </div>
            <Image
              src="/2.svg"
              width="0"
              height="0"
              alt="ai detection image"
              className="order-1 h-auto w-[250px] md:order-2 md:w-[500px]"
            />
          </div>

          <Image
            src="/secondLine.svg"
            alt="secondLine"
            width="0"
            height="0"
            className="my-10 h-auto w-[250px] self-center md:w-[500px]"
          />
        </div>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <Image
            src="/4.svg"
            width="0"
            height="0"
            alt="score image"
            className="h-auto w-[250px] md:w-[500px]"
          />
          <div className="flex flex-col gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-semibold text-white">
              3
            </div>
            <p className="text-wrap text-base md:text-lg">
              <strong className="text-xl md:text-3xl">Fast Feedback</strong>
              <br />
              <br />
              Why wait in uncertainty? Our platform delivers swift feedback
              straight to your inbox. Is it a scam or safe? You will know in no
              time. As a guardrail, any suspicious conversations will still be
              vetted by our professionals. Stay one step ahead with SG Anti-Scam
              AI.
            </p>
          </div>
        </div>
        <Button className="my-2 h-10 self-center text-base text-white md:my-10 md:w-1/4 md:text-lg">
          <Link href="/upload">Upload now!</Link>
        </Button>
        <h2 className="my-2 mt-10 text-center text-2xl font-semibold md:my-10 md:text-4xl">
          Reviews
        </h2>
        <div className="flex items-center gap-5">
          <Avatar className="h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
            <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <div className="text-base md:text-lg">
            <p>
              &quot;SG Anti-Scam AI saved me from a scam! The process was quick
              and easy, and I feel much safer now.&quot;
            </p>
            <cite>- John Tan</cite>
          </div>
        </div>
        <div className="mt-9 flex items-center gap-5">
          <Avatar className="h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
            <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="text-base md:text-lg">
            <p>
              &quot;Absolutely phenomenal service! I was on the fence about a
              deal on Carousell, but SG Anti-Scam AI quickly highlighted the red
              flags. It is like having a personal scam detector on your side.
              Highly recommend it to anyone navigating online
              marketplaces.&quot;
            </p>
            <cite>- Sarah Lim</cite>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-5">
          <Avatar className="h-[50px] w-[50px] md:h-[75px] md:w-[75px]">
            <AvatarImage src="https://ui.shadcn.com/avatars/03.png" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="text-base md:text-lg">
            <p>
              &quot;Using SG Anti-Scam AI has completely changed how I approach
              online buying and selling. It caught a scam attempt I almost fell
              for. The AI analysis is impressively accurate, and receiving
              feedback directly via email is super convenient. This service is a
              must-have for peace of mind in today&apos;s digital age.&quot;
            </p>
            <cite>- Alex Chung</cite>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
