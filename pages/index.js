import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/components/Footer";
import {
  faHtml5,
  faReact,
  faSwift,
  faNodeJs,
  faCss3,
  faJsSquare,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  function validateForm() {
    let isValid = true;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      console.log("Please enter a valid email address");
    }

    // Validate message length
    if (message.length < 1) {
      isValid = false;
      console.log("Please enter a message");
    }

    // Validate name length
    if (name.length < 1) {
      isValid = false;
      console.log("Please enter a name");
    }

    return isValid;
  }

  const handleSend = (e) => {
    e.preventDefault();

    // Use EmailJS logic here to send the message
    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual values from EmailJS
    const formData = {
      email,
      name,
      message,
    };
    emailjs
      .send(
        process.env.NEXT_EMAILJS_SERVICE_ID,
        process.env.NEXT_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        // Clear the form after successful submission
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };

  return (
    <>
      <Head>
        <title>Victory Labs</title>
        <meta
          name="description"
          content="Your Partner in Software Development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={`${styles.sectionClass} ${styles.valuepropheader}`}>
          <div
            class={`${styles.mainContainer} ${styles.valuepropheaderContainer}`}
          >
            <h1 className={`${styles.valuepropheaderH1}`}>Victory Labs</h1>
            <h2
              className={`${styles.sectionClassH2} ${styles.valuepropheaderH2}`}
            >
              Your Partner in Software Development
            </h2>
            <Link
              href="#contactUs"
              class={`${styles.btn} ${styles.valuepropheaderBtn}`}
            >
              Get Started
            </Link>
          </div>
        </section>
        <section class="bg-gray-100 sectionClass">
          <div class="container mx-auto px-6 py-20">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
              About Victory Labs
            </h2>
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/2 p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-3">
                  Who we are
                </h3>
                <p
                  class={`text-gray-600 leading-loose ${styles.sectionClassP}`}
                >
                  Victory Labs is a software development company that creates
                  custom software solutions for businesses of all sizes. We
                  specialize in solving complex problems with technology, and
                  helping our clients achieve their goals.
                </p>
              </div>
              <div class="w-full md:w-1/2 p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-3">
                  What we do
                </h3>
                <p class="text-gray-600 leading-loose">
                  Our team of experienced developers, designers, and project
                  managers work together to build software that drives growth,
                  solves problems, and improves efficiency. We take a
                  collaborative approach with our clients to ensure that their
                  needs are met at every step of the development process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" class="bg-white-100 py-20 sectionClass">
          <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-12">
              Technologies Used
            </h2>
            <ul class="flex flex-wrap justify-center items-center tech-list">
              <li class="mx-10 my-6 flex flex-col items-center">
                <FontAwesomeIcon icon={faHtml5} size={"4x"} color={"#b89c6e"} />
                <span class="text-center">HTML5</span>
              </li>
              <li class="mx-10 my-6 flex flex-col items-center">
                <FontAwesomeIcon icon={faCss3} size={"4x"} color={"#b89c6e"} />
                <span class="text-center">CSS3</span>
              </li>
              <li class="mx-10 my-6 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faJsSquare}
                  size={"4x"}
                  color={"#b89c6e"}
                />
                <span class="text-center">JavaScript</span>
              </li>
              <li class="mx-10 my-6 flex flex-col items-center">
                <FontAwesomeIcon icon={faReact} size={"4x"} color={"#b89c6e"} />
                <span class="text-center">React</span>
              </li>
              <li class="mx-10 my-6 flex flex-col items-center">
                <FontAwesomeIcon icon={faSwift} size={"4x"} color={"#b89c6e"} />
                <span class="text-center">Swift</span>
              </li>
              <li class="mx-10 my-6 flex flex-col items-center">
                <FontAwesomeIcon icon={faNode} size={"4x"} color={"#b89c6e"} />
                <span class="text-center">Node</span>
              </li>
            </ul>
          </div>
        </section>

        <section class="bg-gray-100 sectionClass">
          <div class="container mx-auto px-6 py-20">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
              Our Work
            </h2>
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/3 p-6">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Link href="https://www.fetchit.cc/">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="/images/fetchit.png"
                      alt="FetchIt"
                    />
                  </Link>

                  <div class="p-6">
                    <h3 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Fetchit AI Platform
                    </h3>
                    <p class="leading-relaxed mb-3 text-gray-900">
                      AI Learning Platform that utilizes ChatGPT to enhance
                      students learning.
                    </p>

                    <Link
                      class="text-indigo-500 inline-flex items-center"
                      href="https://www.fetchit.cc/"
                    >
                      View Site
                    </Link>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 p-6">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Link href="https://www.elevatelawn.care/">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="/images/elevatelawn.png"
                      alt="Site 2"
                    />
                  </Link>
                  <div class="p-6">
                    <h3 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Elevate Lawn Care
                    </h3>
                    <p class="leading-relaxed mb-3 text-gray-900">
                      Elevate Lawn Care provides routine lawn care services,
                      property clean-ups, and garden design for residential
                      Rancho Cordova, Folsom, and El Dorado Hills, California
                      properties. Schedule an estimate with us today and let us
                      work with you on maintaining a beautiful yard year-round
                    </p>
                    <Link
                      class="text-indigo-500 inline-flex items-center"
                      href="https://www.elevatelawn.care/"
                    >
                      View Site
                    </Link>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 p-6">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Link href="https://jake10693.github.io/AfterShock_Event_Flyer_Landing_Page/">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="/images/aftershock.png"
                      alt="Site 3"
                    />
                  </Link>
                  <div class="p-6">
                    <h3 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Aftershock Festival
                    </h3>
                    <p class={`leading-relaxed mb-3 text-gray-900`}>
                      This is a landing page used to navigate info and content
                      about the upcoming Aftershock music festival which is
                      being held in Sacramento, CA this year (2024) from 10/10 -
                      10/13
                    </p>
                    <Link
                      class="text-indigo-500 inline-flex items-center"
                      href="https://jake10693.github.io/AfterShock_Event_Flyer_Landing_Page/"
                    >
                      View Site
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white-100 sectionClass" id="contactUs">
          <div class={`mx-auto px-6 py-20`}>
            <h2
              class={`${styles.sectionClassH2} text-4xl font-bold text-center text-gray-800 mb-8`}
            >
              Contact Us
            </h2>
            <h3
              class={`${styles.sectionClassH2} font-bold text-center text-gray-800 mb-8`}
            ></h3>
            <div class="w-full max-w-2xl mx-auto">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="name">
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div class="mb-4">
                  <button
                    class="bg-gray-800 text-white py-2 px-4 rounded-full text-sm hover:bg-gray-600 hover:text-white focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSend}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
