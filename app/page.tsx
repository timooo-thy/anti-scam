import { FC } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home: FC = () => {
  return (
    <main className="flex min-h-[calc(100dvh-64px)] flex-col items-center bg-background">
      <div className="flex flex-col gap-10 w-8/12 my-[120px]">
        <h1 className="text-4xl text-center font-bold">
          SG Anti-Scam AI: Empowering Your Online Safety
        </h1>
        <h2 className="text-2xl text-center  font-semibold">
          Protect Yourself from Scams with the Power of AI
        </h2>
        <Button className="w-1/4 self-center mb-10 text-white text-lg h-9">
          <Link href="/upload">Try it out!</Link>
        </Button>
        <h2 className="text-4xl mb-10 text-center font-semibold">
          How it works?
        </h2>
        <div className="text-lg flex flex-col ">
          <div className="flex items-center gap-10">
            <Image src="/1.svg" width={500} height={500} alt="1" />
            <div className="flex flex-col gap-5">
              <div className="bg-cyan-600 text-white font-semibold flex justify-center items-center w-12 h-12 rounded-full">
                1
              </div>
              <p className="text-wrap text-lg">
                <strong className="text-3xl">Upload Conversations</strong>{" "}
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
            src="/firstLine.svg"
            width={500}
            height={500}
            alt="firstLine"
            className="self-center"
          />
          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-5">
              <div className="bg-cyan-600 text-white font-semibold flex justify-center items-center w-12 h-12 rounded-full">
                2
              </div>
              <p className="text-wrap text-lg">
                <strong className="text-3xl ">AI Detection</strong>
                <br />
                <br />
                Dive into the future of scam protection. Our cutting-edge AI
                sifts through conversations, spotting scam patterns with high
                success rate. From too-good-to-be-true offers to phishing lures,
                our AI will be guarding your online interactions.
              </p>
            </div>
            <Image src="/2.svg" width={500} height={500} alt="1" />
          </div>

          <Image
            src="/secondLine.svg"
            width={500}
            height={500}
            alt="secondLine"
            className="self-center"
          />
        </div>
        <div className="flex items-center gap-10">
          <Image src="/4.svg" width={500} height={500} alt="1" />
          <div className="flex flex-col gap-5">
            <div className="bg-cyan-600 text-white font-semibold flex justify-center items-center w-12 h-12 rounded-full">
              3
            </div>
            <p className="text-wrap text-lg">
              <strong className="text-3xl">Fast Feedback</strong>
              <br />
              <br />
              Why wait in uncertainty? Our platform delivers swift feedback
              straight to your inbox, illuminating the nature of your
              interaction. Is it a scam or safe? You will know in no time. Stay
              one step ahead with SG Anti-Scam AI.
            </p>
          </div>
        </div>
        <Button className="w-1/4 self-center my-10 text-white text-lg h-10">
          <Link href="/upload">Upload now!</Link>
        </Button>
        <h2 className="text-4xl mb-10 text-center font-semibold mt-10">
          Reviews
        </h2>
        <div className="flex items-center gap-5">
          <Avatar className="h-[75px] w-[75px]">
            <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <div className="text-lg">
            <p>
              &quot;SG Anti-Scam AI saved me from a scam! The process was quick
              and easy, and I feel much safer now.&quot;
            </p>
            <cite>- John Tan</cite>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-9">
          <Avatar className="h-[75px] w-[75px]">
            <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="text-lg">
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
        <div className="flex items-center gap-5 mt-10">
          <Avatar className="h-[75px] w-[75px]">
            <AvatarImage src="https://ui.shadcn.com/avatars/03.png" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="text-lg">
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
