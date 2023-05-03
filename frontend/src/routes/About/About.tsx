import { BackgroundCats } from '../../components/BackgroundCats'

import styles from './About.module.css'
import CatImg1 from '../../assets/cat_1.png'
import CatImg2 from '../../assets/cat_2.png'
import { InformationSection } from '../../components/InformationSection'

export const About = () => {
  return (
    <div className={styles.about}>
      <BackgroundCats>
        <header>
          <h1>Be a part of our community</h1>
          <p className={styles.info}>
            So, whether you're looking for a place to share your cute cat
            photos, ask for advice on cat behavior, or just connect with other
            cat enthusiasts, our website is the perfect place to do it.
          </p>
        </header>
      </BackgroundCats>

      <main>
        <picture>
          <img src={CatImg1} alt="Cat" />
        </picture>

        <div>
          <InformationSection
            title="Why do we love cats?"
            alignment="right"
            p1="We understand that cats are more than just pets – they're family members."
            p2="That's why we strive to create a supportive community where cat lovers can come together to celebrate the joys of cat ownership and share their love for these amazing animals."
            breakLine={true}
            p3="We understand that cats are more than just pets – they're family members."
          />
        </div>

        <div className={styles.mar}>
          <InformationSection
            title="What is KotoStorage?"
            alignment="left"
            p1="In honor of our endless love for cats, we've created an app where users can share their furry creatures with each other."
            p2="Our policy is free. We have no intention of adding privacy to pictures of cats."
            breakLine={true}
          />
          <InformationSection
            title="How to get started?"
            alignment="left"
            p1="If you want to share your cat, then upload the link to the upload form"
            p2="If you want to see pretty and aestetics photos of users cats. You can just join to our gallery"
          />
        </div>

        <picture>
          <img src={CatImg2} alt="Cat" />
        </picture>
      </main>
      <img src={CatImg1} alt="Cat" className={styles.cat1} />
      <img src={CatImg2} alt="Cat" className={styles.cat2} />
    </div>
  )
}
