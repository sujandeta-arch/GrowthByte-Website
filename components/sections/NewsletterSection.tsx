export default function NewsletterSection() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-semibold text-xl md:text-2xl mb-2 text-white">Get Growth Insights</h3>
          <p className="text-gray-400 mb-6 text-sm">Weekly marketing tips delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
