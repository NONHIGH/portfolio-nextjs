import Card from "@/components/card/Card";
import CardBody from '@/components/card/card-body/CardBody';
import styles from './main.module.scss';
import Section1 from "@/components/static-content/Section1";
import Section2 from "@/components/static-content/Section2";
export default function Home() {
  return (
    <main className={styles.Main}>
      <Card className={styles.Section1}>
        <CardBody>
          <Section1 />
        </CardBody>
      </Card>
      <Card className={styles.Section2}>
        <CardBody >
          <Section2/>
        </CardBody>
      </Card>

    </main>
  )
}
