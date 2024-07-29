import Rating from "./components/Rating"
import Content from "./components/Content"
import profile1 from "../src/assets/profile1.png"
import profile2 from "../src/assets/profile2.png"
import profile3 from "../src/assets/profile3.png"

function App() {
  return (
    <>
    <div className="bg1"></div>
    <section>
      <h1>10,000+ of our users love our products.</h1>
      <p className="subtext">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
      <div className="ratingcontainer">
        <Rating stars={5} text="Rated 5 Stars in Reviews" />
        <Rating stars={5} text="Rated 5 Stars in Report Guru"/>
        <Rating stars={5} text="Rated 5 Stars in BestTech"/>
      </div>
      <div className="contentcontainer">
        <Content img={profile1} name="Colton Smith" verified="Verified Buyer" text="“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”" />
        <Content img={profile2} name="Irene Roberts" verified="Verified Buyer" text="“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”" />
        <Content img={profile3} name="Anne Wallace" verified="Verified Buyer" text="“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”" />
      </div>
    </section>
    </>
  )
}

export default App
