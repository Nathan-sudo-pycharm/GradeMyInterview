import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <div className="min-h-screen pt-32 md:pt-16 sm:pt-16 bg-white p-8">
      <div className="flex items-center mb-8">
        <ArrowLeftIcon className="h-5 w-5 text-[#d9534f]" />
        <a href="/" className="ml-2 text-[#d9534f]">
          Go back
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Here to <span className="text-[#d9534f]">Help</span>
          </h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium">
                Full name
              </label>
              <Input
                id="fullname"
                placeholder="Enter your full name..."
                className="mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address*
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address..."
                className="mt-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact-number"
                className="block text-sm font-medium"
              >
                Contact number
              </label>
              <Input
                id="contact-number"
                placeholder="Enter your contact number..."
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message*
              </label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="mt-1"
                required
              />
            </div>
            <Button className="bg-[#d9534f] text-white mt-4">
              Send message
            </Button>
          </form>
        </div>
        <div>
          <div className="mt-8  ">
            <h3 className="font-bold mt-4">Legal</h3>
            <p>
              <a href="/terms" className="text-[#d9534f]">
                Terms & Conditions
              </a>{" "}
            </p>

            <h3 className="font-bold mt-4">Alternatively contact us at:</h3>
            <p>
              <a href="#" className="text-[#d9534f]">
                info@lewshouse.com
              </a>
            </p>

            <p>
              Nathan Ivor Sequeira
              <br />
              Karnataka
              <br />
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
