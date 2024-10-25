import styles from '../Contact/ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="">
            <div className={styles.formGroup}>
                <label htmlFor="name" hidden>
                    Nom
                </label>
                    <input
                     type="text"
                      id="name" 
                      name="name" 
                      placeholder="Nom" required/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email" hidden>
                    Email
                </label>
                    <input
                     type="text"
                      id="email" 
                      name="email" 
                      placeholder="Adresse mail" required/>
                   </div>
                   <div className={styles.formGroup}>
                <label htmlFor="message" hidden>
                    Message
                </label>
                    <textarea
                      id="message" 
                      name="message" 
                      placeholder="Message" required></textarea>
                   </div>
                   <input className="hover btn" type="submit" value="Envoyer"/>
                
        </form>
    </section>
  )
}

export default Contact