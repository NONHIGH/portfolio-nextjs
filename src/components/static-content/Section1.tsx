import Image from 'next/image';
import styles from './styles.module.scss';
// import banner from '@/'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <section className={styles.Banner}>
        <h2 className={styles.Banner__title}>dhid</h2>
        <div className={styles.Banner__image}></div>
        {/* <Image src={} /> */}
        <div className={styles.Banner__Content}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus, veniam quas itaque repellendus facilis sequi est ut perferendis eius provident saepe reprehenderit repudiandae sed praesentium, perspiciatis ullam, consectetur autem?
                Fuga distinctio tenetur, molestiae sapiente pariatur amet iure alias praesentium voluptates unde voluptas ex laboriosam in nostrum ipsum rem omnis corporis quos? Nobis assumenda vel animi fuga obcaecati aliquid temporibus!
                Sit cumque earum asperiores totam nihil ut dolor laborum quas modi doloremque aliquam, eveniet ipsum. Hic blanditiis dignissimos sed error totam ratione non quas quibusdam, distinctio saepe possimus temporibus quasi.
            </p>
        </div>
    </section>
  )
}

export default Section1