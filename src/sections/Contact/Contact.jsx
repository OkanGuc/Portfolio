import styles from '../Contact/ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className="wrapper">
        <div className={styles.card}>
            <div className={styles.intro}>
                <p className="eyebrow">Contact</p>
                <h2 className="sectionTitle">Travaillons ensemble</h2>
                <p className="sectionLead">
                    Un projet web ou mobile en tête ? Laissez-moi un message, je vous répondrai rapidement.
                </p>
            </div>
            <form className={styles.form} action="">
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nom</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Votre nom" required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="vous@exemple.com" required/>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Parlez-moi de votre projet…" required></textarea>
                </div>
                <button className={`btn btnPrimary ${styles.submit}`} type="submit">Envoyer</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
