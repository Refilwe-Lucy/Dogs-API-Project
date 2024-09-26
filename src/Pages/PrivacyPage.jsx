import Hero from "../Component/Hero"
import Footer from "../Component/footer"
const PrivacyPage = () => {
    return(
        <>
        <Hero/>
         <div className="max-w-4xl mx-auto p-10">
    <h1 className="text-2xl font-lightbold text-pink-500 mb-4">Privacy Policy for BarkHub App</h1>
    <p className="mb-4"><strong className="font-lightbold text-pink-500">Effective Date: </strong><span className="text-black">2024/09/26</span> </p>
    
    <p className="mb-6">At BarkHub App, your privacy is important to us. This privacy policy explains how we collect, use, and protect your information when you use our services.</p>

    <h2 className="text-xl font-semibold text-pink-500 mb-2">1. Information We Collect</h2>
    <ul className="list-disc list-inside mb-4">
        <li><strong className="text-pink-500">Usage Data:</strong> We may collect information about your interactions with our App, including your IP address, browser type, operating system, and the pages you visit.</li>
        <li><strong className="text-pink-500">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze usage. You can control cookie settings through your browser.</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2 text-pink-500">2. How We Use Your Information</h2>
    <p className="mb-4">We use the information we collect to:</p>
    <ul className="list-disc list-inside mb-4">
        <li>Improve our App and provide a better user experience.</li>
        <li>Analyze usage trends to enhance features.</li>
        <li>Provide links to third-party dog-related websites.</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2 text-pink-500">3. Third-Party Links</h2>
    <p className="mb-4">Our App contains links to external websites where you can learn about different dog breeds and make purchases. We do not control these sites and are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.</p>

    <h2 className="text-xl font-semibold mb-2 text-pink-500">4. Information Sharing</h2>
    <p className="mb-4">We do not sell or rent your personal information to third parties. However, when you click on links to external websites, your information may be collected by those sites. We recommend reviewing their privacy policies for more information.</p>

    <h2 className="text-xl font-semibold mb-2 text-pink-500">5. Data Security</h2>
    <p className="mb-4">We implement reasonable security measures to protect the information we collect. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

    <h2 className="text-xl font-semibold mb-2 text-pink-500 ">6. User Rights</h2>
    <p className="mb-4">You have the right to:</p>
    <ul className="list-disc list-inside mb-4">
        <li>Access your personal information.</li>
        <li>Request correction of inaccurate information.</li>
        <li>Request deletion of your personal information.</li>
    </ul>
    <p className="mb-4">To exercise these rights, please contact us a <span className="">BarkHub@dogsa.co.za.</span> </p>

    <h2 className="text-xl font-semibold mb-2 text-pink-500">7. Changes to This Privacy Policy</h2>
    <p className="mb-4">We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any updates.</p>

    <h2 className="text-xl font-semibold mb-2 text-pink-500">8. Contact Us</h2>
    <p className="mb-4">If you have any questions or concerns about this privacy policy, please contact us at:</p>
    <p className="mb-2"><strong className="text-pink-500">Email:</strong>BarkHub@dogsa.co.za.</p>
    <p><strong className="text-pink-500">Phone:</strong> 012 336 8915</p>
</div>
      <Footer/>
        </>

    )
}
export default PrivacyPage