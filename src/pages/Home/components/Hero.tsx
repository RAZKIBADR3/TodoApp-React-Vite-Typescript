import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black">
      <div className="mx-auto max-w-5xl text-center flex flex-col gap-3">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Stay organized
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
          Get things done.
          <br />
          <span className="text-blue-600">One task at a time.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Keep track of your tasks, stay organized, and focus on what matters
          most. Create, manage, and complete your todos with ease.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/todos" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Start adding tasks
          </Link>

          <Link
            to="/todos" className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-300 transition hover:bg-gray-50 hover:text-gray-700">
            View my tasks
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
          <span>✓ Simple</span>
          <span>✓ Fast</span>
          <span>✓ Organized</span>
          <span>✓ Free</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;