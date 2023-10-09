import Card from "@/components/card/Card";
import CardBody from '../components/card/card-body/CardBody';
import CardHeader from "@/components/card/card-header/CardHeader";
import CardFooter from "@/components/card/card-footer/CardFooter";



export default function Home() {
  return (
    <main>
      <h1>Este es un h1</h1>
      <Card>
        <CardHeader className="text-center">
          <h1>holi</h1>
        </CardHeader>
        <CardBody>
          <h2>Holi</h2>
          <div>
            somos la riata
          </div>
          <br />
          <p>noni <b><i>holi</i></b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid sed provident necessitatibus voluptatibus ipsam assumenda officia pariatur facilis esse unde illo, consequatur est, omnis voluptatem, enim amet voluptatum odio quidem!</p>
        </CardBody>
        <CardFooter>
          holi
        </CardFooter>
      </Card>

    </main>
  )
}
