import Link from "next/link";

export default function Navbar() {
  return (
    <nav class="bg-white">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="w-full md:w-auto text-gray-800 font-bold text-xl">
            <Link class="text-gray-800 hover:text-gray-700" href="#">
              Victory Labs
            </Link>
          </div>
          <div class="flex items-center -mx-2">
            <Link class="mx-2 text-gray-600 hover:text-gray-800" href="/">
              Home
            </Link>
            <Link
              href="/services"
              class="mx-2 text-gray-600 hover:text-gray-800"
            >
              Services
            </Link>

            {/* <Link class="mx-2 text-gray-600 hover:text-gray-800" href="#">
                Portfolio
              </Link>
              <Link
                class="mx-2 text-gray-600 hover:text-gray-800"
                href="https://blog.victorylabs.io"
              >
                Blog
              </Link> */}
            <Link
              class="mx-2 text-gray-600 hover:text-gray-800"
              href="#contactUs"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
