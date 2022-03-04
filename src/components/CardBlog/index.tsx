import { Container, Description, Img, Content, Card } from './styles';

export default function CardBlog() {
  return (
    <>
      <Container>
        <Description>
          <h1>Read Our Blog</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            <br /> Vokalia and Consonantia, there live the blind texts.
          </p>
        </Description>
        <Card>
          <Content>
            <Img>
              <img src="../../../img/blog_image_1.svg" alt="Quick-start guide" />
            </Img>
            <h2>Quick-start guide<br />
              to nuts and seeds
            </h2>
            <div className="figure">
              <img className="profile" src="/img/Kevin.jpeg" alt="Kevin Ibrahim" />
              <span>Kevin Ibrahim</span>
            </div>
          </Content>
          <Content>
            <Img>
              <img src="../../../img/bloco_image_2.svg" alt=" Nutrition: Tips" />
            </Img>
            <h2>
              Nutrition: Tips for <br />
              Improving Your Health
            </h2>
            <div className="figure">
              <img className="profile" src="/img/Mike_Jackson.jpeg" alt="Mike Jackson" />
              <span>Kevin Ibrahim</span>
            </div>
          </Content>
          <Content>
            <Img>
              <img src="../../../img/bloco_image_3.svg" alt="The top 10 benefits" />
            </Img>
            <h2>
              The top 10 benefits<br />
              of eating healthy
            </h2>
            <div className="figure">
              <img className="profile" src="/img/Bryan.png" alt="Bryan McGregor" />
              <span>Bryan McGregor</span>
            </div>
          </Content>
        </Card>
      </Container>
    </>
  );
};
