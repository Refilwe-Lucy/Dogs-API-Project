import Hero from "./Hero"
const ContactForm = () =>{
    return(
        <>
        <Hero/>
        <section id="contact" className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-2xl text-center text-pink-500 dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature?Want to know more about
        <span className="text-pink-500 fon"> BarkHub</span> Let me know.</p>
                

            </div>
        
        </section>
        </>
    )
}
export default ContactForm