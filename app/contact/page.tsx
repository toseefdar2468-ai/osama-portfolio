import ContactForm from './ContactForm'
import AnimatedContainer from '../../components/AnimatedContainer'

export default function Contact() {
  return (
    <AnimatedContainer className="page-section">
      <h1 className="page-title">Contact</h1>
      <p className="text-slate-300">If you'd like to reach out, email me at <a href="mailto:osamahashrafcwork@gmail.com" className="text-primary hover:underline">osamahashrafcwork@gmail.com</a> or use the form below.</p>
      <ContactForm />
    </AnimatedContainer>
  )
}
