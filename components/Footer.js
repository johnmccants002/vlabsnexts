import Link from "next/link";

export default function Footer() {
  return (
    <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full sm:w-1/2 px-6">
            <div class="text-white">
              <h3 class="font-bold text-xl mb-2">Victory Labs</h3>
              <p class="mb-2">
                Victory Labs is a software development company that specializes
                in creating custom solutions for businesses.
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/4 px-6"></div>
          <div class="w-full sm:w-1/4 px-6">
            <h3 class="font-bold text-xl text-white mb-2">Social Media</h3>
            <ul class="list-reset mb-2">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" class="text-white hover:underline">
                  Twitter
                </Link>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" class="text-white hover:underline">
                  Facebook
                </Link>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link href="#" class="text-white hover:underline">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr class="h-px my-6 bg-gray-700 border-none" />
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-center md:text-left text-white py-4">
              © 2023 Victory Labs. All rights reserved.
            </p>
          </div>
          <div class="flex items-center"></div>
        </div>
      </div>
    </footer>
  );
}
